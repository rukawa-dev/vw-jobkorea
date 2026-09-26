import React from 'react';
import './BrandFrame.css';
const asset = name => import.meta.env.BASE_URL + 'imgs/' + name;
const duties = [
 ['브랜드에 맞는 경험을 설계합니다.', '브랜드와 사용자 맥락을 이해하고, 웹과 모바일에 맞는 직관적인 UI/UX를 설계합니다.'],
 ['아이디어를 움직임으로 구체화합니다.', '사용자 흐름을 바탕으로 프로토타입과 인터랙션을 설계하고, 화면의 연결과 사용성을 점검합니다.'],
 ['일관된 디자인을 만듭니다.', '타이포그래피와 컴포넌트 등 비주얼 기준을 정리하고, 디자인 시스템과 가이드로 완성도를 높입니다.'],
 ['협업으로 결과를 완성합니다.', 'PM·개발자와 디자인 의도를 공유하고, 고객사 커뮤니케이션과 구현 결과 검수에 참여합니다.'],
];
function BenefitIllustration({ type }) {
 return <span className={`bf-benefit-illustration bf-benefit-${type}`} aria-hidden="true"><img src={asset('vw-benefits-infographic-v1.png')} alt=""/></span>;
}
export default function BrandFrame() {
 return <main id="content" className="recruitment brand-frame">
  <header className="bf-masthead"><img src={asset('로고.svg')} alt="VW"/><span>DIGITAL BRANDING DIRECTORS<br/>DESIGNER RECRUITMENT — 2026</span></header>
  <section className="bf-values-hero">
   <img src={asset('vw-company-lounge-v2.png')} alt="회사 사진을 바탕으로 구성한 햇살이 드는 라운지 공간"/>
   <div className="bf-values-title"><p>WE'RE HIRING.</p><h1>DIGITAL · UI/UX<br/>DESIGNER</h1></div><div className="bf-hero-bottom"><p className="bf-hero-philosophy">상상은 자유롭게,<br/>결정은 전략적으로.</p><div className="bf-facts" aria-label="채용 조건"><span>경력 2년 이상</span><span>정규직</span><span>서울 마포</span></div></div>
  </section>
  <section className="bf-block bf-role">
   <div className="bf-section-top"><span>01 / THE ROLE</span><span>생각을 화면으로.</span></div>
   <h2>당신이 만들 경험</h2>
   <div className="bf-duty-list">{duties.map(([title, body], i) => <article className="work-item" key={title}><span className="bf-number">0{i+1}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
  </section>
  <section className="bf-perspective">
   <div className="bf-section-top"><span>02 / OUR PERSPECTIVE</span><span>VW의 생각</span></div>
   <div className="bf-photo-composition"><figure className="bf-card-photo"><img src={asset('vw-gdweb-brand-card.png')} alt="램프에 걸린 VW 명함"/></figure><div className="bf-composition-word" aria-hidden="true">Good<br/><i>thinking.</i></div><figure className="bf-flower-photo"><img src={asset('vw-flowers-brand-card.jpg')} alt="꽃병 옆에 놓인 VW 명함"/></figure></div>
   <h2>좋은 감각이 모여,<br/>다음의 경험을 만듭니다.</h2><p>브랜드 전략부터 웹·모바일 경험까지.<br/>브이더블유는 브랜드를 이해하고<br/>사람을 생각하는 디자인을 합니다.</p><div className="bf-philosophy"><span>WONDER IDEA</span><span>THINK HUMAN</span></div>
  </section>
  <section className="bf-block bf-people"><div className="bf-section-top"><span>03 / YOU & VW</span><span>지원 자격</span></div><h2>이런 당신을 기다립니다.</h2><div className="bf-qualification"><h3>함께하기 위한 경험</h3><ul><li><mark className="text-highlight">실무 경력 2년 이상</mark></li><li><mark className="text-highlight">포트폴리오 제출 필수</mark></li><li><mark className="text-highlight">웹·모바일 UI/UX 디자인 실무 경험</mark></li><li>사용자 관점에서 문제를 파악하고,<br/>디자인 의도를 설명할 수 있는 분</li><li>타이포그래피·레이아웃 등 디테일과<br/>일관성을 중요하게 생각하는 분</li><li>PM·개발자와 의견을 나누며 협업할 수 있는 분</li></ul></div><div className="bf-qualification"><h3>더 반가운 경험 <small>우대사항</small></h3><ul><li><mark className="text-highlight">Figma</mark> 프로토타이핑·컴포넌트 활용 경험</li><li><mark className="text-highlight">Framer</mark>를 활용한 웹사이트 제작·배포 경험</li><li>브랜드·프로덕트 또는 에이전시 디자인 경험</li><li>모션·인터랙션으로 디자인 의도를 표현한 경험</li><li><mark className="text-highlight">생성형 AI 도구</mark>를 디자인 과정에 활용한 경험</li></ul></div></section>
  <section className="bf-life-spread"><img src={asset('vw-company-cafe-v2.png')} alt="회사 사진을 바탕으로 구성한 창가 카페 공간"/><div className="bf-life-caption"><span>04 / EVERYDAY</span><h2>몰입할 시간.<br/>재충전할 여유.</h2></div></section>
  <section className="bf-block bf-terms"><div className="bf-section-top"><span>WORK & LIFE</span><span>근무 안내</span></div><dl><div><dt>고용형태</dt><dd>정규직 <small>· 수습 3개월</small></dd></div><div><dt>연봉</dt><dd>3,000~5,000만원<small>면접 후 결정</small></dd></div><div><dt>근무시간</dt><dd>09:30 — 18:30<small>주 5일 (월~금) · 탄력근무제</small></dd></div><div><dt>근무장소</dt><dd>서울 마포구 성산동<small>월드컵로32길 24, 중보빌딩 3층<br/>6호선 마포구청역 도보 4분 이내</small></dd></div><div className="bf-support"><dt>복리후생</dt><dd><strong>잘 일하고, 편히 쉴 수 있도록.</strong><div className="bf-benefits"><article><BenefitIllustration type="leave"/><div className="bf-benefit-copy"><h3>휴가는 자유롭게</h3><p>개인 일정에 맞춰 연차와 반차를<br/><mark className="text-highlight">자유롭게</mark> 사용합니다.</p></div></article><article><BenefitIllustration type="break"/><div className="bf-benefit-copy"><h3>잠깐의 여유도 든든하게</h3><p>일하는 중간 즐길 수 있는<br/><mark className="text-highlight">음료와 간식</mark>을 제공합니다.</p></div></article><article><BenefitIllustration type="care"/><div className="bf-benefit-copy"><h3>중요한 날에는 함께</h3><p>기쁜 일에도, 어려운 일에도<br/><mark className="text-highlight">경조휴가와 경조금</mark>을 지원합니다.</p></div></article><article><BenefitIllustration type="tools"/><div className="bf-benefit-copy"><h3>좋은 작업을 위한 장비 투자</h3><p>업무에 필요한 장비에는<br/><mark className="text-highlight">투자를 아끼지 않습니다.</mark></p></div></article></div><span className="bf-support-details">고용보험 · 산재보험 · 건강보험<br/>퇴직연금 · 노동절 휴무</span></dd></div></dl></section>
  <section className="bf-block bf-inside"><div className="bf-section-top"><span>05 / INSIDE VW</span><span>공간의 기록</span></div><h2>우리의 공간, 우리의 취향.</h2><div className="bf-inside-grid"><figure className="bf-inside-wide"><img src={asset('vw-office-logo-wide.jpg')} alt="VW 로고 벽에서 바라본 책상과 업무 공간"/></figure><figure><img src={asset('vw-plant-wall-warm-v1.png')} alt="식물 벽과 오브제가 놓인 선반"/></figure><figure><img src={asset('vw-studio-detail-warm-v1.png')} alt="그래픽 포스터와 자전거가 놓인 사무실 코너"/></figure></div></section>
  <section className="bf-application"><div className="bf-section-top"><span>06 / JOIN US</span><span>함께할 다음</span></div><h2>당신을<br/><em>만나고 싶습니다.</em></h2><p className="bf-apply-intro">당신의 작업과 생각을 보여주세요.</p><ol className="bf-process"><li><small>01</small>서류전형</li><li><small>02</small>면접</li><li><small>03</small>최종합격</li></ol><div className="bf-apply-row"><h3>보내주실 자료</h3><p>이력서 · 포트폴리오<br/><span className="bf-salary-note">이력서에 <strong>희망연봉 필수 기재</strong></span></p></div><div className="bf-apply-row bf-apply-action"><h3>지원 방법</h3><p>잡코리아 이력서 양식으로 즉시지원</p></div><p className="bf-note">면접 일정은 추후 개별 안내됩니다.<br/>지원서에 허위 사실이 발견될 경우<br/>채용이 취소될 수 있습니다.</p><footer className="bf-signature-photo"><img src={asset('vw-signature-dark-v2.png')} alt="브이더블유 회사명과 조명이 켜진 VW 사인"/></footer></section>
 </main>;
}









