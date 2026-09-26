import React from 'react';
export function Section1() { return (<section className="pad work"><div className="section-heading"><h2>What you’ll do.</h2><p className="eyebrow">당신이 만들 경험</p></div>
<div className="work-item"><span className="num">01</span><div><h3>사용자가 만나는 화면을 설계합니다.</h3><p>UI/UX 디자인으로 직관적이고 일관된 디지털 경험을 만듭니다.</p></div></div>
<div className="work-item"><span className="num">02</span><div><h3>콘텐츠와 서비스를 경험으로 연결합니다.</h3><p>콘텐츠 · 서비스 · UX 디자인을 함께 고민하고 구체화합니다.</p></div></div>
<div className="work-item"><span className="num">03</span><div><h3>대화하고, 함께 완성합니다.</h3><p>프로젝트 진행과 고객사 커뮤니케이션에 참여합니다.</p></div></div>
</section>); }

export function Section2() { return (<section className="pad fit"><p className="eyebrow">GOOD DESIGN STARTS WITH GOOD PEOPLE.</p><h2>이런 당신이라면,<br />우리의 다음 동료.</h2><div className="fit-columns"><div><h3>함께하기 위한 경험</h3><ul><li><strong>경력 2년 이상</strong></li><li>전문대 졸업 이상의 학력</li><li>디지털 UX 디자인 경험</li><li>원활한 커뮤니케이션과 협업 능력</li></ul></div><div><h3>더 반가운 경험 · 우대사항</h3><ul><li>AI 도구를 디자인 업무에 활용하실 수 있는 분</li><li>디지털 에이전시 경력이 있는 분</li></ul></div></div></section>); }

export function Section3() { return (<section className="studio"><img src={import.meta.env.BASE_URL + 'imgs/vw-office.jpg'} alt="브이더블유 사무실 입구" /><div className="studio-copy"><p className="eyebrow">LIFE AT VW</p><h2>몰입할 시간.<br />재충전할 여유.</h2><p>자유로운 휴가문화<br />연차 · 반차 · 경조휴가 · 노동절 휴무<br />음료와 간식 제공 · 퇴직연금</p></div></section>); }

export function Section4() { return (<section className="pad"><div className="section-heading"><h2>A place for you.</h2><p className="eyebrow">함께 일할 조건</p></div><dl className="details">
<div className="detail"><dt>EMPLOYMENT / 고용형태</dt><dd>정규직<small> · 수습 3개월</small></dd></div>
<div className="detail"><dt>SALARY / 급여</dt><dd>3,000~5,000만원<small> / 연봉<br />면접 후 결정</small></dd></div>
<div className="detail"><dt>WORKING HOURS / 근무시간</dt><dd>09:30 — 18:30<br /><small>주 5일 (월~금) · 탄력근무제</small></dd></div>
<div className="detail"><dt>LOCATION / 근무장소</dt><dd>서울 마포구 성산동<br /><small>월드컵로32길 24, 중보빌딩 3층<br />6호선 마포구청역 도보 4분 이내</small></dd></div>
</dl></section>); }

export function Section5() { return (<section className="pad apply"><p className="eyebrow">YOUR WORK. YOUR THINKING. YOUR NEXT.</p><h2>Let’s design<br />what’s next. ↗</h2><p className="apply-lead">당신의 작업과 생각을 보여주세요.</p>
<div className="steps"><div><small>01</small>서류전형</div><span aria-hidden="true">→</span><div><small>02</small>면접</div><span aria-hidden="true">→</span><div><small>03</small>최종합격</div></div>
<div className="apply-info"><div><h3>보내주실 자료</h3><p>이력서 · 경력기술서 · 포트폴리오<br />경력기술서에 희망연봉을 기재해주세요.</p></div><div><h3>지원 방법</h3><p>잡코리아 이력서 양식으로 즉시지원</p></div></div>
<p className="apply-note">면접 일정은 추후 개별 안내됩니다.<br />채용 일정은 회사 사정에 따라<br />변경되거나 조기 마감될 수 있습니다.<br />지원서에 허위 사실이 발견될 경우<br />채용이 취소될 수 있습니다.</p>
<footer className="footer"><div><img src={import.meta.env.BASE_URL + 'imgs/로고.svg'} alt="VW" /><p>㈜브이더블유 · DIGITAL BRANDING DIRECTORS</p></div><a href="https://www.v-w.co.kr/" target="_blank" rel="noopener noreferrer">우리의 작업 보기 ↗</a></footer>
</section>); }


