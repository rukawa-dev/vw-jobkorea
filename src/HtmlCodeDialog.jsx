import React, { useEffect, useRef, useState } from 'react';
import './html-code-dialog.css';

const website = 'https://www.v-w.co.kr/';
function publicImageUrl(value) {
  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase();
    if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) return false;
    if (host === 'localhost' || host.endsWith('.localhost') || host.endsWith('.local') || !host.includes('.') || host.includes(':')) return false;
    if (/^(127\.|10\.|192\.168\.|169\.254\.|0\.|172\.(1[6-9]|2\d|3[01])\.)/.test(host)) return false;
    return true;
  } catch { return false; }
}
function escapeAttribute(value) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function initialUrl(letter) {
  try {
    const saved = localStorage.getItem(`vw-common-image-url-${letter}`);
    if (saved) return saved;
  } catch { /* Storage can be unavailable in private browsing. */ }
  const base = import.meta.env.VITE_PUBLIC_SITE_URL || 'https://rukawa-dev.github.io/vw-jobkorea/';
  try {
    const url = new URL(`downloads/VW-${letter}-3x.png`, base.replace(/\/?$/, '/')).href;
    return publicImageUrl(url) ? url : '';
  } catch { return ''; }
}

export default function HtmlCodeDialog({ design, onClose }) {
  const imageKey = design.imageKey || design.letter;
  const dialog = useRef(null);
  const textarea = useRef(null);
  const [imageUrl, setImageUrl] = useState(() => initialUrl(imageKey));
  const [status, setStatus] = useState('');
  const [copying, setCopying] = useState(false);
  const [checking, setChecking] = useState({ url: '', state: 'loading' });
  const [retry, setRetry] = useState(0);
  const [editing, setEditing] = useState(() => !publicImageUrl(imageUrl.trim()));
  const valid = publicImageUrl(imageUrl.trim());
  const imageState = checking.url === imageUrl.trim() ? checking.state : 'loading';
  const ready = valid && imageState === 'ready';
  const code = `<div style="width:100%;max-width:720px;margin:0 auto;text-align:center;">\n  <a href="${website}" target="_blank" rel="noopener noreferrer" style="display:block;text-decoration:none;">\n    <img src="${escapeAttribute(imageUrl.trim() || '공개_이미지_URL을_입력해주세요')}" alt="브이더블유 ${design.jobTitle || '디지털 · UI/UX 디자이너'} 채용 — ${design.name}" border="0" style="display:block;width:100%;height:auto;margin:0 auto;border:0;" />\n  </a>\n</div>`;

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const element = dialog.current;
    element.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  useEffect(() => {
    const url = imageUrl.trim();
    if (!publicImageUrl(url)) return;
    let active = true;
    const image = new Image();
    let timeout;
    setChecking({ url, state: 'loading' });
    const finish = state => {
      if (!active) return;
      clearTimeout(timeout);
      setChecking({ url, state });
    };
    image.onload = () => finish(image.naturalWidth > 0 ? 'ready' : 'error');
    image.onerror = () => finish('error');
    const start = setTimeout(() => {
      timeout = setTimeout(() => { finish('error'); active = false; }, 15000);
      image.src = url;
    }, 300);
    return () => { active = false; clearTimeout(start); clearTimeout(timeout); image.onload = null; image.onerror = null; };
  }, [imageUrl, retry]);

  async function copyCode() {
    if (!ready || copying) return;
    setCopying(true);
    let copied = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(code);
        copied = true;
      }
    } catch { /* LAN HTTP can block the Clipboard API. Use selection-based copy below. */ }
    if (!copied) {
      textarea.current.focus();
      textarea.current.select();
      try { copied = document.execCommand('copy'); } catch { copied = false; }
    }
    if (copied) {
      try { localStorage.setItem(`vw-common-image-url-${imageKey}`, imageUrl.trim()); } catch { /* Optional persistence. */ }
    }
    setStatus(copied ? '복사했습니다. 잡코리아 편집기의 HTML 모드에 붙여 넣으세요.' : '자동 복사가 지원되지 않습니다. 선택된 코드를 Ctrl+C 또는 길게 눌러 복사해주세요.');
    setCopying(false);
  }

  return <dialog ref={dialog} className="html-dialog" aria-labelledby="html-dialog-title" aria-describedby="html-dialog-description" onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === dialog.current) { const bounds = dialog.current.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose(); } }}>
    <header className="html-dialog-header"><div><p>{design.jobTitle ? '기획자 · PM / ' : ''}{design.letter} / {design.name}</p><h2 id="html-dialog-title">채용공고 HTML 코드</h2></div><button type="button" className="html-close" onClick={onClose} aria-label="팝업 닫기">×</button></header>
    <div className="html-dialog-content"><p id="html-dialog-description">코드를 복사해 잡코리아 편집기의 <strong>HTML 모드</strong>에 붙여 넣으세요.</p>
      <div className={`html-image-status ${!valid || imageState === 'error' ? 'is-error' : ''}`}>
        <div role="status" aria-live="polite"><span className="html-state-dot" aria-hidden="true"/><span>{!valid ? '공개 이미지 주소를 입력해주세요.' : imageState === 'loading' ? '공고 이미지를 확인하고 있습니다…' : imageState === 'ready' ? '공통 공고 이미지가 준비되었습니다.' : '이미지를 불러오지 못했습니다. 주소 또는 배포 상태를 확인해주세요.'}</span></div>
        {valid && <a href={imageUrl.trim()} target="_blank" rel="noopener noreferrer">공통 이미지 보기 ↗</a>}
        {valid && imageState === 'error' && <button className="html-retry" onClick={() => { setChecking({ url: imageUrl.trim(), state: 'loading' }); setStatus(''); setRetry(value => value + 1); }}>다시 확인</button>}
      </div>
<p className="html-url-help">PC와 모바일에 같은 이미지 한 장을 사용합니다. 최대 720px, 작은 화면에서는 화면 너비에 맞춰 표시합니다.</p>
      <details className="html-url-settings" open={editing} onToggle={event => setEditing(event.currentTarget.open)}><summary>이미지 주소 변경</summary><div>
        <label htmlFor="public-image-url">공통 공개 이미지 주소</label><input id="public-image-url" type="url" value={imageUrl} placeholder="https://example.com/recruitment.png" onChange={event => { setImageUrl(event.target.value); setStatus(''); }} aria-describedby="image-url-help" aria-invalid={imageUrl !== '' && !valid}/>
        <p className={`html-url-help ${imageUrl && !valid ? 'invalid' : ''}`} id="image-url-help">{imageUrl && !valid ? '외부에서 접근할 수 있는 http(s) 이미지 주소를 입력해주세요. 로컬·내부 IP 주소는 사용할 수 없습니다.' : '다른 이미지를 사용할 때만 변경하세요. 로그인 없이 열리는 공개 주소가 필요합니다.'}</p>
      </div></details>
      <div className="html-code-label"><label htmlFor="recruitment-html">붙여 넣을 HTML</label><span>이미지 클릭 → v-w.co.kr</span></div>
      <textarea ref={textarea} id="recruitment-html" readOnly spellCheck="false" value={code}/>
      <p className="html-status" role="status" aria-live="polite">{status || '이미지를 클릭하면 브이더블유 홈페이지가 새 창으로 열립니다.'}</p>
    </div>
    <footer className="html-dialog-footer"><button type="button" onClick={onClose}>닫기</button><button type="button" className="html-copy" disabled={!ready || copying} onClick={copyCode}>{copying ? '복사 중…' : 'HTML 코드 복사'}</button></footer>
  </dialog>;
}

