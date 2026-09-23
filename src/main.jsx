import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Editorial from './pages/Editorial';
import Poster from './pages/Poster';
import Studio from './pages/Studio';
import './style.css';
import './studio-layout.css';

const designs = [
  { id: 'editorial', letter: 'A', name: '에디토리얼', english: 'EDITORIAL', title: '여백으로 전하는 자신감', description: '흰 바탕, 절제된 선, 차분한 타이포그래피. 좋은 디자인에 대한 우리의 생각을 담았습니다.', component: Editorial },
  { id: 'poster', letter: 'B', name: '타이포 포스터', english: 'TYPO POSTER', title: '첫눈에 남는 강한 인상', description: '대담한 타이포그래피와 선명한 대비. 다음 화면과 다음 경험을 만들어갈 당신에게.', component: Poster },
  { id: 'studio', letter: 'C', name: '스튜디오', english: 'CREATIVE STUDIO', title: '좋은 동료와 만드는 다음', description: '2D 캐릭터와 경쾌한 아이콘. 서로 다른 생각이 만나 더 좋은 디자인을 만드는 스튜디오입니다.', component: Studio },
];
function Gallery() {
  return <main className="gallery" id="content">
    <header className="gallery-header"><img src="/imgs/로고.svg" alt="VW"/><span>DIGITAL BRANDING DIRECTORS</span><span>RECRUITMENT 2026</span></header>
    <section className="gallery-intro"><div><p className="overline">ONE OPPORTUNITY. THREE PERSPECTIVES.</p><h1>같은 채용,<br/>세 가지 첫인상<span>.</span></h1></div><div className="intro-aside"><span className="open-label"><i/> WE’RE HIRING</span><p>브랜드의 다음을 함께 고민할<br/><strong>디지털 · UI/UX 디자이너</strong>를 찾습니다.</p><p className="intro-meta">신입 · 경력 &nbsp; / &nbsp; 정규직 &nbsp; / &nbsp; 서울 마포</p></div></section>
    <div className="collection-heading"><span>채용공고 디자인 컬렉션</span><span>SELECT A PERSPECTIVE ↙</span></div>
    <section className="design-grid" aria-label="채용공고 시안">
      {designs.map((design, index) => <article className="design-card" key={design.id}>
        <a className={`design-preview preview-${design.id}`} href={`#/${design.id}`} aria-label={`${design.name} 채용공고 전체 보기`}><div className="preview-image"><img src={design.id === 'studio' ? '/downloads/VW-C-preview.png' : `/downloads/VW-${design.letter}.png`} alt={`${design.name} 채용공고 시안`} /></div><span className="preview-footer">공고 전체 보기 <span>↗</span></span></a>
        <div className="card-heading"><p className="overline">0{index + 1} / {design.english}</p><span>{design.letter}</span></div><h2>{design.title}</h2><p className="card-description">{design.description}</p>
        <div className="card-actions"><a href={`#/${design.id}`}>{design.letter}안 둘러보기 ↗</a><a href={`/downloads/VW-${design.letter}-3x.png`} download={`VW-디자이너채용-${design.letter}안-2580px.png`} aria-label={`${design.letter}안 고해상도 PNG 다운로드`}>고해상도 PNG ↓</a></div>
      </article>)}
    </section>
    <footer className="gallery-footer"><span>© 2026 VW. ㈜브이더블유</span><p>세 시안은 동일한 채용 조건을 담고 있습니다.<br/>PNG는 가로 2,580px 고해상도 이미지입니다.</p><a href="https://www.v-w.co.kr/" target="_blank" rel="noopener noreferrer">우리의 작업 보기 ↗</a></footer>
  </main>;
}
function App() {
  const [route, setRoute] = useState(() => window.location.hash.slice(2));
  useEffect(() => { const navigate = () => { setRoute(window.location.hash.slice(2)); window.scrollTo(0, 0); }; window.addEventListener('hashchange', navigate); return () => window.removeEventListener('hashchange', navigate); }, []);
  const design = designs.find(item => item.id === route);
  useEffect(() => { document.title = design ? `VW — ${design.name} | 디자이너 채용` : 'VW — 디자이너 채용 컬렉션'; }, [design]);
  const Page = design?.component;
  return <><a className="skip-link" href="#content" onClick={event => {event.preventDefault(); document.getElementById('content')?.scrollIntoView(); document.getElementById('content')?.focus();}}>본문으로 건너뛰기</a>{design ? <><nav className="design-nav" aria-label="시안 전환"><a className="back-link" href="#/">← <span>전체 시안</span></a><div>{designs.map(item => <a key={item.id} href={`#/${item.id}`} aria-current={route === item.id ? 'page' : undefined}>{item.letter ? `${item.letter}. ` : ''}{item.name}</a>)}</div><button onClick={() => window.print()} aria-label="현재 채용공고 인쇄">인쇄 ↗</button></nav><Page/><div className="page-end"><a href="#/">← 전체 시안으로 돌아가기</a><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>맨 위로 ↑</button></div></> : route ? <main className="not-found"><h1>페이지를 찾을 수 없습니다.</h1><a href="#/">전체 시안으로 돌아가기 →</a></main> : <Gallery/>}</>;
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);



