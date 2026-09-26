import { ArchiveHeader, ArchiveFooter } from './ArchiveChrome';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import RecruitmentList from './RecruitmentList';
import './style.css';

import HtmlCodeDialog from './HtmlCodeDialog';
import './studio-layout.css';
import './common-artwork.css';

import { exportDesigns, resolveRoute } from './recruitments';
const artworkModules = import.meta.glob('./pages/**/*.jsx', { eager: true });
for (const design of exportDesigns) {
  if (!artworkModules['./pages/' + design.component + '.jsx']?.default) throw new Error('Missing artwork component: ' + design.component);
}
function Gallery({ onShowCode, recruitment }) {
  const collection = recruitment.designs;
  return <main className="gallery" id="content">
    <ArchiveHeader/>
    <div className="gallery-back"><a href="#/">← 등록일별 공고 목록</a><span>{recruitment.registeredAt.replaceAll('-', '.')} 등록 · {recruitment.title} 채용</span></div>
    <section className="gallery-intro"><div><p className="overline">RECRUITMENT DESIGN COLLECTION</p><h1>{recruitment.title}<br/>채용 시안<span>.</span></h1></div><div className="intro-aside"><p>이 공고에 등록된 <strong>{collection.length}개 시안</strong>을 확인하세요.</p><p className="intro-meta">{recruitment.experience} / {recruitment.employment} / {recruitment.location}</p></div></section>
    <div className="collection-heading"><span>채용공고 디자인 컬렉션</span><span>SELECT A PERSPECTIVE ↙</span></div>
    <section className="design-grid" aria-label="채용공고 시안">
      {collection.map((design, index) => <article className="design-card" key={design.id}>
        <a className={`design-preview preview-${design.style || "default"}`} href={`#/${design.route}`} aria-label={`${design.name} 채용공고 전체 보기`}><div className="preview-image"><img src={import.meta.env.BASE_URL + design.previewPath} alt={`${design.name} 채용공고 시안`} /></div><span className="preview-footer">공고 전체 보기 <span>↗</span></span></a>
        <div className="card-heading"><p className="overline">0{index + 1} / {design.english}</p><span>{design.letter}</span></div><h2>{design.title}</h2><p className="card-description">{design.description}</p>
        <div className="card-actions"><a href={`#/${design.route}`}>{design.letter}안 둘러보기 ↗</a><button type="button" className="html-code-button" onClick={() => onShowCode(design)} aria-label={`${design.letter}안 채용공고 HTML 코드`}>채용공고 HTML 코드</button></div>
      </article>)}
    </section>
    <ArchiveFooter/>
  </main>;
}
function App() {
  const [codeDesign, setCodeDesign] = useState(null);
  const [route, setRoute] = useState(() => window.location.hash.slice(2));
  useEffect(() => { const navigate = () => { setRoute(window.location.hash.slice(2)); setCodeDesign(null); window.scrollTo(0, 0); }; window.addEventListener('hashchange', navigate); return () => window.removeEventListener('hashchange', navigate); }, []);
  const { recruitment, design } = resolveRoute(route);
  const collection = recruitment?.designs || [];
  const home = recruitment?.href;
  const role = recruitment?.title || '';
  useEffect(() => { document.title = !route ? 'VW — 등록일별 채용공고' : design ? `VW — ${design.name} | ${role} 채용` : recruitment ? `VW — ${role} 채용 컬렉션` : 'VW — 페이지를 찾을 수 없습니다'; }, [design, role, route, recruitment]);
  const Page = design && artworkModules['./pages/' + design.component + '.jsx'].default;
  return <><a className="skip-link" href="#content" onClick={event => {event.preventDefault(); const content = document.getElementById('content'); if (content) { content.tabIndex = -1; content.focus({ preventScroll: true }); content.scrollIntoView(); }}}>본문으로 건너뛰기</a>{design ? <><nav className="design-nav" aria-label="시안 전환"><a className="back-link" href={home}>← <span>전체 시안</span></a><div>{collection.map(item => <a key={item.id} href={`#/${item.route}`} aria-current={design.id === item.id ? 'page' : undefined}>{item.letter ? `${item.letter}. ` : ''}{item.name}</a>)}</div><div className="nav-tools"><button className="html-code-button" onClick={() => setCodeDesign(design)}>채용공고 HTML 코드</button><a href={import.meta.env.BASE_URL + design.imagePath} download>공통 이미지 다운로드 ↓</a></div></nav><div className="artwork-frame"><Page recruitment={recruitment} design={design}/></div><div className="page-end"><a href={home}>← 전체 시안으로 돌아가기</a><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>맨 위로 ↑</button></div></> : !route ? <RecruitmentList/> : !recruitment ? <main className="not-found" id="content" tabIndex={-1}><h1>페이지를 찾을 수 없습니다.</h1><a href="#/">등록일별 공고 목록으로 돌아가기 →</a></main> : <Gallery onShowCode={setCodeDesign} recruitment={recruitment}/>}{codeDesign && <HtmlCodeDialog key={codeDesign.storageKey} design={codeDesign} onClose={() => setCodeDesign(null)}/>}</>;
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);






