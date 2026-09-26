# C · Studio Journal — 채용공고 리디자인

2026-09-26. 현재 C안 기준 문서. 이전 C-company-campaign.md의 v1~v10 기록을 대체한다. 게시 경로와 C 식별자는 유지한다.

## 방향

회사 사진을 편집 디자인의 중심으로 사용한다. 차콜(#292824), 종이색(#f3f0e8), 샌드(#e7e1d4), 작은 샴페인 포인트(#d5be94). 이전 딥그린 블록과 반복 슬로건, 누적된 CSS 오버라이드를 제거하고 독립적인 JSX/CSS로 재작성했다. 한글 본문은 Wanted Sans, 사진 위 영문 일부에 Georgia 이탤릭을 사용한다.

## 순서와 사진 역할

1. 로고 헤더 + 원더랜드 브랜드월 사진 위 Design with us 및 채용 제목. 기본 조건 3칸을 바로 붙인다.
2. 담당 업무: 번호와 가는 구분선으로 세 업무를 정리한다.
3. 회사 관점: 램프 아래 명함 사진을 크게, 꽃·명함 사진을 작게 배치한 비대칭 구성. 브랜드 소개는 한 문단으로 제한한다.
4. 지원 자격과 우대사항.
5. 창가 카페 이미지를 전체 폭으로 배치하고 밝은 제목 면을 하단 일부에 겹친다. 바로 근무 조건과 복지로 이어진다.
6. 당신을 만나고 싶습니다 → 전형·제출자료·지원방법 → 로고로 마무리한다.

## 이미지 출처

- public/imgs/vw-gdweb-brand-wall.png: 사용자 첨부 원더랜드_브랜드월과_라운지.png. 메인.
- public/imgs/vw-gdweb-brand-card.png: 사용자 첨부 조명에_걸린_브이더블유_명함.png. 회사 관점.
- public/imgs/vw-flowers-brand-card.jpg: 사용자 첨부 꽃병과_브이더블유_명함.jpg. 회사 관점.
- public/imgs/vw-company-cafe-v2.png: 창가_카페와_펜던트조명.jpg를 참고해 앞서 생성한 이미지. 생성 기록은 C-company-campaign.md의 v2에 있다.

이번에는 추가 생성 없이 기존 원본과 참고 기반 생성 이미지를 조합했다. 회사 사진은 과거 공간 기록이며 카페 이미지는 콘셉트 이미지다.

## 채용 내용과 출력

업무·자격·급여·근무지·복지 정보를 유지한다. 경력기술서는 요구하지 않으며 희망연봉은 이력서에 필수 기재한다. 이미지 안에 링크나 버튼을 넣지 않는다. 접수 기간과 마감 관련 문구는 이미지에서 제외한다.

본문 360px 표시 기준 16px 이상. 도입 직후 담당 업무에 진입하며 회사 소개를 반복하지 않는다. 1440×14488px로 출력, 이전 18003px 대비 약 20% 단축했다. 360/390/720px 넘침 검사와 빌드 완료. 최종 PNG의 전체 구성과 회사 사진 조합을 확인했다.

## 지원 자격 변경

C안의 ‘전문대 졸업 이상의 학력’을 ‘학력 무관 (단, 실무 경력 2년 이상 및 포트폴리오 제출 필수)’로 대체했다. 같은 목록의 경력 조건은 이 문구에 통합하고, 포트폴리오 제출 필수를 굵게 강조했다. 직무 요약의 경력 2년 이상과 제출자료의 포트폴리오 표기는 유지한다.


## 생활 사진 구성 수정

사진 하단 일부를 가리던 아이보리 박스를 제거했다. 사진 전체 폭을 유지하고 하단 그라데이션 위에 ‘몰입할 시간. / 재충전할 여유.’를 배치해 잘린 듯한 경계를 없앴다.


## 휴가 안내와 지도

‘자유로운 휴가문화’ 강조 제목을 제거하고 휴가 및 지원을 보통 굵기의 안내 두 줄로 정리했다. 확인되지 않은 업무 문화는 추가하지 않았다. 사용자 제공 docs/assets/회사위치.png를 public/imgs/vw-location-map.png로 복사해 근무지 바로 아래 배치했다. 지도는 역과 회사 표식 중심으로 CSS 크롭하며 주소와 도보 안내를 텍스트로 함께 제공한다.


지도는 사용자 요청으로 시안에서 제거했다. 근무지 주소와 도보 안내는 유지하며 지도 원본은 보관한다.


## VW 가치 이미지 메인

첫 섹션을 사무실 사진에서 VW 가치의 상징 이미지로 교체했다. 두 사람의 손은 THINK HUMAN과 WITH, 함께 완성하는 종이 조형은 WONDER IDEA를 표현한다. 이는 편집자의 시각적 해석이다. 텍스트는 이미지에 생성하지 않고 HTML로 WITH. / WONDER IDEA · THINK HUMAN / 함께, 생각을 새로운 경험으로.를 얹었다. 직무와 기본 조건은 바로 아래에 배치했다.

내장 imagegen 생성 파일: public/imgs/vw-values-with-v1.png. 실제 회사 작업 사례가 아닌 브랜드 콘셉트 아트다.

최종 프롬프트:
Create a sophisticated art-directed editorial photograph for a Korean digital branding agency recruitment campaign. Visualize the values WONDER IDEA, THINK HUMAN, WITH without any text: two natural human hands entering from opposite lower edges, collaboratively shaping a single broad ivory paper ribbon into a beautiful open sculptural flowing arch. One hand gently holds the lower left end, the other carefully guides the lower right end. The joined paper structure casts an unexpected elegant organic shadow on a warm charcoal studio surface, with a subtle warm luminous interior suggesting a new idea emerging through human collaboration. Premium tactile matte cotton paper, beautiful precise folds, realistic skin and believable fingers, restrained warm champagne light, cream and charcoal palette, fine editorial photographic grain. No office, plants, screens, robot hands, neon blue, generic stock handshake, hearts, lightbulbs, puzzle pieces, floating objects, excessive gold or glossy CGI. Landscape 5:4 composition. Sculpture fills center and lower two thirds, top quarter calm dark negative space for later graphic typography. Visually striking, quiet intelligent design-magazine cover quality. No letters, no logo, no watermark. Actual photographic still-life appearance, concept artwork.

## 공식 About 기준 메인 문구

첫 섹션의 문구는 [공식 About 참고](../company-official-about.md)를 기준으로 변경했다. ‘상상은 자유롭게, 결정은 전략적으로.’를 핵심 제목으로 사용한다. 기존 WITH 문구는 메인에서 제거했다.


메인 보조 문구는 WE'RE HIRING.으로 교체해 채용 목적을 명시한다. 공식 About의 한글 핵심 제목은 유지한다.


## 참고 이미지 기반 채용 내용 개정

사용자가 제공한 Digital Designer 및 UI/UX 디자이너 공고 이미지를 참고해 C안의 업무·지원자격·우대사항을 개정했다. 참고 이미지의 업무/자격 중복과 영어·한글 중복은 옮기지 않았다. 경력 2년 이상·학력 무관·포트폴리오 제출 필수 및 기존 급여·근무조건은 유지한다. 참고의 신입 지원 표기는 적용하지 않는다.

- 주요업무: 브랜드와 사용자 맥락을 고려한 웹·모바일 UI/UX, 사용자 흐름·프로토타입·인터랙션, 비주얼 기준·디자인 시스템·가이드, PM/개발자 협업·고객사 소통·구현 검수.
- 지원자격: 실무 경험, 사용자 관점의 문제 이해와 의도 설명, 디테일·일관성, 협업 역량.
- 우대사항: Figma 프로토타이핑/컴포넌트, 브랜드·프로덕트 또는 에이전시 경험, 모션/인터랙션, 생성형 AI 활용. 도구 경험은 지원 범위를 과도하게 좁히지 않도록 우대에 배치했다.

이번 변경은 현재 작업 중인 C안에 적용했다. A/B 및 9월 10일 공고는 기존 내용을 유지한다.


### 라운지 이미지 기반 채용 커버
- 첫 섹션은 `public/imgs/vw-company-lounge-v2.png`를 사용한다.
- 이미지 위에 `WE'RE HIRING.`과 `DIGITAL · UI/UX / DESIGNER`를 배치하고, 별도의 한글 직무 타이틀 영역은 제거한다.
- 공식 소개 문구는 이미지 하단에 작게 유지한다. 경력·고용형태·근무지 요약은 바로 아래에 둔다.
- 높이는 78cqw로 제한하고 왼쪽 중심의 그라데이션으로 흰 글자의 가독성과 공간 사진의 밝기를 함께 확보한다.


### 휴가 및 지원 문구
직원 관점에서 “쉬어갈 시간, 일상의 작은 지원.”으로 소개한다. 연차·반차·경조휴가, 음료·간식은 사용 목적을 짧게 설명하고 노동절 휴무·퇴직연금은 보조 정보로 정리한다. 미확인 휴가비·교통비·선택적 근로시간제 등은 추가하지 않는다.


### 복리후생 강조 개정
사용자가 확인한 자유로운 연차·반차 사용, 음료·간식 제공, 경조휴가·경조금 지원, 업무 장비에 대한 적극적 투자를 네 항목으로 강조한다. 제목은 “잘 일하고, 편히 쉴 수 있도록.”. 보험·퇴직연금·노동절 휴무는 하단 보조 정보로 정리하며 무제한 장비 지원 등 확인되지 않은 조건은 추가하지 않는다.


### INSIDE VW 공간 갤러리
지원 안내 직전, 회사 공간 기록 사진 3장을 배치한다. vw-office-logo-wide.jpg 전경은 크게, vw-gdweb-brand-wall.png 라운지와 vw-gdweb-studio-detail.png 디테일은 아래 2열로 배치한다. 제목은 “우리의 공간, 우리의 취향.”. 로고 클로즈업·기존 명함 컷과 유사한 사진은 중복을 줄이기 위해 제외한다.


### 마지막 브랜드 이미지
지원 안내 하단의 로고·회사명 텍스트를 `public/imgs/vw-office.jpg` 한 장으로 교체한다. 회사명과 VW 사인이 함께 보이는 가로 크롭을 사용하고, 추가 문구 없이 전체 폭 사진으로 마무리한다.
