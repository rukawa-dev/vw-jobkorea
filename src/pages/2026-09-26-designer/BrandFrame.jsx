import React from 'react';
import './BrandFrame.css';
import { Section1, Section2, Section3, Section4, Section5 } from './Sections';
const asset = name => import.meta.env.BASE_URL + 'imgs/' + name;
export default function BrandFrame() {
 return <main id="content" className="recruitment brand-frame">
  <header className="bf-header"><img src={asset('로고.svg')} alt="VW"/><span>DIGITAL BRANDING DIRECTORS<br/>DESIGNER RECRUITMENT / 2026</span></header>
  <section className="bf-cover"><img src={asset('brand-frame-space-v2.png')} alt="코발트 벽과 금속 브리지, 유리로 구성된 추상 공간"/><div className="bf-cover-title"><p>NEW PERSPECTIVES, TOGETHER.</p><h1>Make<br/>what’s<br/><i>next.</i></h1></div><span className="bf-cover-index">VW / DESIGN / 03</span></section>
  <section className="bf-intro"><p className="bf-label">THE NEXT CHAPTER IS YOURS ↗</p><h2>브랜드의 다음을,<br/>당신의 시선으로.</h2><p>디지털 · UI/UX 디자이너를 찾습니다.</p><div className="bf-meta">경력 2년 이상 <span> / </span> 정규직 <span> / </span> 서울 마포</div></section>
  <section className="bf-manifesto"><div><p className="bf-label">01 / PERSPECTIVE</p><h2>생각에 구조를.<br/>경험에 감각을.</h2></div><img src={asset('brand-frame-v1.png')} alt="유리와 금속이 겹쳐진 추상 조형물"/><p>우리는 브랜드를 이해하는 것에서 출발합니다. 무엇을 말할지, 어떻게 연결할지, 어떤 경험을 남길지.</p><p>브이더블유는 그 질문을 디자인으로 풀어갑니다. 명확한 생각과 섬세한 실행을 더해줄 당신의 시선을 기다립니다.</p></section>
  <div className="bf-work"><div className="bf-chapter"><span>02 / PRACTICE</span><strong>THINK.<br/>MAKE.<br/>CONNECT.</strong></div><Section1/></div>
  <section className="bf-interlude"><img src={asset('brand-frame-space-v2.png')} alt="빛과 그림자가 만나는 유리 공간의 디테일"/><p>A different view.<br/>A better experience.</p></section>
  <div className="bf-fit"><p className="bf-label">03 / YOUR QUALITIES</p><Section2/></div>
  <div className="bf-conditions"><p className="bf-label">04 / YOUR EVERYDAY</p><Section4/></div>
  <div className="bf-life"><Section3/></div>
  <div className="bf-join"><div className="bf-join-art"><img src={asset('brand-frame-v1.png')} alt="새로운 가능성을 상징하는 빛과 유리의 조형물"/><strong>YOUR<br/>NEXT<br/>MOVE. ↗</strong></div><Section5/></div>
 </main>;
}
