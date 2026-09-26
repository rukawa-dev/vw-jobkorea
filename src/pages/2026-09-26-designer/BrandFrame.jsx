import React from 'react';
import './BrandFrame.css';
import { Section1, Section2, Section4, Section5 } from './Sections';
const asset = name => import.meta.env.BASE_URL + 'imgs/' + name;
export default function BrandFrame() {
 return <main id="content" className="recruitment brand-frame">
  <header className="bf-header"><img src={asset('로고.svg')} alt="VW"/><span>DIGITAL BRANDING DIRECTORS<br/>DESIGNER RECRUITMENT / 2026</span></header>
  <section className="bf-opening"><p className="bf-label">WORK WITH US. GROW WITH US.</p><h1>좋은 감각이 모여,<br/>다음의 경험을 만듭니다.</h1><div className="bf-opening-meta"><span>디지털 · UI/UX 디자이너</span><span>경력 2년 이상 ↗</span></div></section>
  <figure className="bf-company-cover"><img src={asset('vw-gdweb-brand-wall.png')} alt="VW 로고와 마음속의 원더랜드 문구가 있는 회사 공간"/><figcaption><span>INSIDE VW</span><strong>A place for<br/><i>your perspective.</i></strong></figcaption></figure>

  <section className="bf-story"><p className="bf-label">01 / WHY VW</p><h2>브랜드를 이해하는 팀.<br/>경험을 만드는 디자이너.</h2><p>브이더블유는 브랜드 전략부터<br/>웹·모바일 경험까지 연결하는<br/>디지털 크리에이티브 에이전시입니다.</p><p>좋은 아이디어와 사람에 대한 이해.<br/>우리가 일하는 방식, WITH입니다.</p><div className="bf-wordmark">WONDER IDEA.<br/>THINK HUMAN.</div><div className="bf-culture-pair"><img src={asset('vw-gdweb-brand-card.png')} alt="조명 아래 걸린 VW 명함"/><img src={asset('vw-gdweb-studio-detail.png')} alt="그래픽 포스터와 식물, 자전거가 있는 회사 공간"/></div><p>브랜드의 가치를 고민하고,<br/>자신의 생각을 디자인으로 풀어낼<br/>동료를 기다립니다.</p></section>
  <section className="bf-references"><p className="bf-label">OUR WORK</p><h2>당신의 다음 작업이<br/>궁금해지는 곳.</h2><p>우리가 만든 경험에서<br/>함께할 다음을 그려보세요.</p><a href="https://www.gdweb.co.kr/sub/portfolio.asp?Txt_agnumber=113" target="_blank" rel="noopener noreferrer">우리가 만든 작업 살펴보기 ↗</a></section>
  <section className="bf-everyday"><div className="bf-life-heading"><p className="bf-label">02 / LIFE AT VW</p><h2>몰입할 시간.<br/><i>재충전할 여유.</i></h2></div><figure><img src={asset('vw-company-lounge-v2.png')} alt="창가 소파에서 바라본 식물과 기타, 스케치북이 놓인 라운지"/><figcaption>GREEN, WOOD & A LITTLE INSPIRATION.</figcaption></figure><div className="bf-perks"><article><span>01 / TIME</span><h3>나만의 리듬으로</h3><p>자유로운 휴가문화<br/>연차 · 반차 · 경조휴가<br/>노동절 휴무</p></article><article><span>02 / CARE</span><h3>일상의 작은 여유</h3><p>음료와 간식 제공<br/>퇴직연금</p></article></div></section>
  <div className="bf-work"><div className="bf-chapter"><span>03 / YOUR WORK</span><strong>좋은 질문에서<br/>좋은 디자인으로.</strong></div><Section1/></div>
  <div className="bf-fit"><p className="bf-label">04 / YOUR QUALITIES</p><Section2/></div>
  <section className="bf-company-detail"><img src={asset('vw-company-cafe-v2.png')} alt="블랙 펜던트 조명과 우드 카운터가 있는 창가 카페"/><div><span className="bf-label">YOUR NEXT CHAPTER</span><h2>함께할 다음을<br/>기대합니다.</h2></div></section>
  <div className="bf-conditions"><p className="bf-label">05 / THE DETAILS</p><Section4/></div>
  <div className="bf-join"><div className="bf-invitation"><p className="bf-label">LET’S MAKE WHAT’S NEXT.</p><h2>당신의 작업을<br/>만나고 싶습니다. ↗</h2></div><Section5/></div>
 </main>;
}


