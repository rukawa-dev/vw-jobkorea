import { ArchiveHeader, ArchiveFooter } from './ArchiveChrome';
import React from 'react';
import { recruitments } from './recruitments';
import './recruitment-list.css';

const dateLabel = date => date.replaceAll('-', '.');
export default function RecruitmentList() {
  const dates = [...new Set(recruitments.map(item => item.registeredAt))].sort().reverse();
  return <main className="recruitment-list" id="content" tabIndex={-1}>
    <ArchiveHeader/>
    <section className="list-intro"><div><p className="list-eyebrow">OUR NEXT CHAPTER, TOGETHER.</p><h1>함께할 동료를 찾는<br/>우리의 기록<span>.</span></h1><p className="list-description">등록일별 채용공고를 확인하고,<br/>직무별 디자인 시안과 HTML 코드를 살펴보세요.</p></div><div className="list-total"><strong>{String(recruitments.length).padStart(2, '0')}</strong><span>개의 채용공고</span></div></section>
    <div className="list-toolbar"><span>전체 채용공고 <b>{recruitments.length}</b></span><span>등록일 최신순 ↓</span></div>
    {dates.map(date => <section className="registration-group" key={date} aria-labelledby={`date-${date}`}><header><p className="list-eyebrow">REGISTERED</p><h2 id={`date-${date}`}><time dateTime={date}>{dateLabel(date)}</time></h2><span>{recruitments.filter(item => item.registeredAt === date).length}개 공고 등록</span></header><div className="registration-items">{recruitments.filter(item => item.registeredAt === date).map(item => <article className="recruitment-row" key={item.id}><div className="row-heading"><span className={`role-symbol ${item.category.toLowerCase()}`} aria-hidden="true">{item.category === 'DESIGN' ? '↗' : '✳'}</span><div><p className="list-eyebrow">{item.category}</p><h3><a href={item.href}>{item.title}</a></h3><p className="row-meta">{item.experience} <span>·</span> 정규직 <span>·</span> 서울 마포</p></div></div><div className="row-bottom"><div className="row-deadline"><span>접수 마감</span><p><time dateTime={item.deadline}>{dateLabel(item.deadline)}</time>{item.closeWhenFilled && <small> · 채용 시 마감</small>}</p></div><a className="row-open" href={item.href} aria-label={`${item.title} 시안 ${item.designCount}개 보기`}>시안 {item.designCount}개 보기 <span>↗</span></a></div></article>)}</div></section>)}
    <ArchiveFooter/>
  </main>;
}
