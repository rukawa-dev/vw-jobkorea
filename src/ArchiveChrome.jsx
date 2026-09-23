import React from 'react';
import './archive-chrome.css';

export function ArchiveHeader() {
  return <header className="archive-header">
    <a className="archive-logo" href="#/" aria-label="VW 채용공고 목록"><img src={import.meta.env.BASE_URL + 'imgs/로고.svg'} alt="VW"/></a>
    <span className="archive-tagline">DIGITAL BRANDING DIRECTORS</span>
    <span className="archive-title">RECRUITMENT ARCHIVE</span>
    <a className="archive-github" href="https://github.com/rukawa-dev/vw-jobkorea" target="_blank" rel="noopener noreferrer" aria-label="GitHub 저장소 열기 (새 창)">GitHub <span aria-hidden="true">↗</span></a>
  </header>;
}

export function ArchiveFooter() {
  return <footer className="archive-footer">
    <span>© 2026 VW. ㈜브이더블유</span>
    <span className="archive-footer-description">브이더블유 채용공고 디자인 아카이브</span>
    <a href="https://www.v-w.co.kr/" target="_blank" rel="noopener noreferrer">우리의 작업 보기 ↗</a>
  </footer>;
}
