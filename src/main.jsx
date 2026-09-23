import { ArchiveHeader, ArchiveFooter } from './ArchiveChrome';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Editorial from './pages/Editorial';
import Poster from './pages/Poster';
import Studio from './pages/Studio';
import PlannerEditorial from './pages/PlannerEditorial';
import PlannerPoster from './pages/PlannerPoster';
import PlannerStudio from './pages/PlannerStudio';
import RecruitmentList from './RecruitmentList';
import './style.css';

import HtmlCodeDialog from './HtmlCodeDialog';
import './studio-layout.css';

const designs = [
  { id: 'editorial', letter: 'A', name: '에디토리얼', english: 'EDITORIAL', title: '여백으로 전하는 자신감', description: '흰 바탕, 절제된 선, 차분한 타이포그래피. 좋은 디자인에 대한 우리의 생각을 담았습니다.', component: Editorial },
  { id: 'poster', letter: 'B', name: '타이포 포스터', english: 'TYPO POSTER', title: '첫눈에 남는 강한 인상', description: '대담한 타이포그래피와 선명한 대비. 다음 화면과 다음 경험을 만들어갈 당신에게.', component: Poster },
  { id: 'studio', letter: 'C', name: '스튜디오', english: 'CREATIVE STUDIO', title: '좋은 동료와 만드는 다음', description: '2D 캐릭터와 경쾌한 아이콘. 서로 다른 생각이 만나 더 좋은 디자인을 만드는 스튜디오입니다.', component: Studio },
];
const plannerDesigns = designs.map((design, index) => ({ ...design, id: 'planner/' + design.id, style: design.id, imageKey: 'PM-' + design.letter, jobTitle: '디지털 기획자 · PM', component: [PlannerEditorial, PlannerPoster, PlannerStudio][index], title: ['좋은 질문에서 시작하는 기획', '다음의 방향을 제시하는 사람', '함께 그리는 다음의 가능성'][index], description: ['요구사항에서 실행까지. 문제를 명확하게 정의하는 기획자를 위한 에디토리얼.', '선명한 생각과 대담한 타이포그래피. 프로젝트의 다음을 이끌 PM을 찾습니다.', '친근한 캐릭터와 아이콘. 서로의 생각을 연결하고 함께 성장하는 스튜디오.'][index] }));
function Gallery({ onShowCode, planner = false }) {
  const collection = planner ? plannerDesigns : designs;
  return <main className="gallery" id="content">
    <ArchiveHeader/>
    <div className="gallery-back"><a href="#/">← 등록일별 공고 목록</a><span>2026.09.10 등록 · {planner ? '기획자 · PM' : '디자이너'} 채용</span></div><section className="gallery-intro"><div><p className="overline">ONE OPPORTUNITY. THREE PERSPECTIVES.</p><h1>같은 채용,<br/>세 가지 첫인상<span>.</span></h1></div><div className="intro-aside"><span className="open-label"><i/> WE’RE HIRING</span><p>브랜드의 다음을 함께 고민할<br/><strong>{planner ? '디지털 기획자 · PM' : '디지털 · UI/UX 디자이너'}</strong>{planner ? '을' : '를'} 찾습니다.</p><p className="intro-meta">경력 2년 이상 &nbsp; / &nbsp; 정규직 &nbsp; / &nbsp; 서울 마포</p></div></section>
    <div className="collection-heading"><span>채용공고 디자인 컬렉션</span><span>SELECT A PERSPECTIVE ↙</span></div>
    <section className="design-grid" aria-label="채용공고 시안">
      {collection.map((design, index) => <article className="design-card" key={design.id}>
        <a className={`design-preview preview-${design.style || design.id}`} href={`#/${design.id}`} aria-label={`${design.name} 채용공고 전체 보기`}><div className="preview-image"><img src={planner ? `${import.meta.env.BASE_URL}downloads/VW-${design.imageKey}-preview.png` : design.id === 'studio' ? import.meta.env.BASE_URL + 'downloads/VW-C-preview.png' : `${import.meta.env.BASE_URL}downloads/VW-${design.letter}-preview.png`} alt={`${design.name} 채용공고 시안`} /></div><span className="preview-footer">공고 전체 보기 <span>↗</span></span></a>
        <div className="card-heading"><p className="overline">0{index + 1} / {design.english}</p><span>{design.letter}</span></div><h2>{design.title}</h2><p className="card-description">{design.description}</p>
        <div className="card-actions"><a href={`#/${design.id}`}>{design.letter}안 둘러보기 ↗</a><button type="button" className="html-code-button" onClick={() => onShowCode(design)} aria-label={`${design.letter}안 채용공고 HTML 코드`}>채용공고 HTML 코드</button></div>
      </article>)}
    </section>
    <ArchiveFooter/>
  </main>;
}
function App() {
  const [codeDesign, setCodeDesign] = useState(null);
  const [route, setRoute] = useState(() => window.location.hash.slice(2));
  useEffect(() => { const navigate = () => { setRoute(window.location.hash.slice(2)); setCodeDesign(null); window.scrollTo(0, 0); }; window.addEventListener('hashchange', navigate); return () => window.removeEventListener('hashchange', navigate); }, []);
  const planner = route === 'planner' || route.startsWith('planner/');
  const collection = planner ? plannerDesigns : designs;
  const home = planner ? '#/planner' : '#/designer';
  const role = planner ? '기획자 · PM' : '디자이너';
  const design = collection.find(item => item.id === route);
  useEffect(() => { document.title = !route ? 'VW — 등록일별 채용공고' : design ? `VW — ${design.name} | ${role} 채용` : `VW — ${role} 채용 컬렉션`; }, [design, role, route]);
  const Page = design?.component;
  return <><a className="skip-link" href="#content" onClick={event => {event.preventDefault(); const content = document.getElementById('content'); if (content) { content.tabIndex = -1; content.focus({ preventScroll: true }); content.scrollIntoView(); }}}>본문으로 건너뛰기</a>{design ? <><nav className="design-nav" aria-label="시안 전환"><a className="back-link" href={home}>← <span>전체 시안</span></a><div>{collection.map(item => <a key={item.id} href={`#/${item.id}`} aria-current={route === item.id ? 'page' : undefined}>{item.letter ? `${item.letter}. ` : ''}{item.name}</a>)}</div><div className="nav-tools"><button className="html-code-button" onClick={() => setCodeDesign(design)}>채용공고 HTML 코드</button><button onClick={() => window.print()} aria-label="현재 채용공고 인쇄">인쇄 ↗</button></div></nav><Page/><div className="page-end"><a href={home}>← 전체 시안으로 돌아가기</a><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>맨 위로 ↑</button></div></> : !route ? <RecruitmentList/> : !['planner', 'designer'].includes(route) ? <main className="not-found" id="content" tabIndex={-1}><h1>페이지를 찾을 수 없습니다.</h1><a href="#/">등록일별 공고 목록으로 돌아가기 →</a></main> : <Gallery onShowCode={setCodeDesign} planner={planner}/>}{codeDesign && <HtmlCodeDialog key={codeDesign.id} design={codeDesign} onClose={() => setCodeDesign(null)}/>}</>;
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);






