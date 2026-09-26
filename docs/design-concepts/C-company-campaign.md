# C · 브랜드 프레임 — 회사 공간 캠페인

2026-09-26 전면 재구성. 현재 C안 기준 문서이며 이전 v2 기록보다 우선한다.

## 디자인 방향

회사 사진을 주인공으로 삼는다. 기존 추상 건축·유리 조형 이미지는 C안에서 사용하지 않는다. 밝은 우드, 식물의 그린, 자연광을 크림색 종이와 딥그린(#344336)에 연결한다. 첫 화면의 한글 채용 메시지 → 회사 공간 전면 사진 → 브랜드 관점 → 식물과 기타가 보이는 공간 및 복지 → 업무 → 자격 → 라운지 디테일 → 조건 → 지원 안내 순서다. 사진 위 텍스트는 제한하고 원본 세로 구도를 크게 보여준다.

## 이미지

내장 imagegen으로 회사 제공 사진을 크게 보정했다. 두 파일 모두 1086×1448px. 원본은 보존한다.

- `docs/assets/JK_CO_vwonder_4.jpg` → `public/imgs/vw-company-daylight-v1.png`: 메인과 라운지 디테일.
- `docs/assets/JK_CO_vwonder_3.jpg` → `public/imgs/vw-company-green-v1.png`: 생활·복지 소개.

촬영 시점과 현 사무실 여부는 미확인이다. 단순 해상도 확대가 아니라 노출·채광·색감·세부를 생성형 보정한 연출 이미지다. 초기 버전에서는 공고에 연출 안내를 표기했으며, 아래 v2 개편에서 사용자 요청으로 삭제했다. 실제 시설이나 현재 공간에 관한 새로운 사실을 주장하지 않는다.

## 생성 프롬프트 — 메인

Create a beautifully retouched architectural editorial photograph from this company's real archival office photo, for a designer recruiting campaign. Portrait 3:4 high resolution. Preserve the recognizable real layout, camera perspective, wood shelving and monitors left, lounge sofa and low wooden table center, white plant pots and guitar right, concrete ceiling and rectangular hanging light. Transform the dull underexposed vintage rendering into inviting premium interior photography: luminous soft morning daylight from the existing right windows, warm honey oak, fresh natural green plants, creamy neutral walls, clean realistic concrete reflections, balanced bright exposure and crisp photographic detail. Remove old vignette and muddy cast. A desirable creative working atmosphere, tasteful magazine quality. Do not add rooms, facilities, people, furniture or architectural features. No typography, no logos. It may be polished and enhanced substantially but must remain recognizably this office rather than an invented luxury office. Preserve full original composition.

## 생성 프롬프트 — 식물과 기타

Substantially enhance this actual archival company interior photo for an inviting designer recruitment editorial. Portrait 3:4 high resolution. Retain this exact composition and recognizable room: guitar right foreground, lush plants in white pots at right windows, low wood table center, wood cubby shelving and workstations left, concrete ceiling with exposed lights. Bright premium natural interior photography, fresh botanical greens, soft creamy daylight through existing right windows, honey oak wood, realistic gently reflective floor. Remove vintage vignette, yellow muddy cast and blur. Airy, tactile, human, aspirational but recognizably the original office. Do not add facilities, people, new furniture or architecture. No text or logos. Balance exposure to show plant and wood detail, avoid blown highlights, no gray filter.

## 반복 제작

라우트와 게시 파일명은 유지한다. 다음 공고에서는 이 이미지와 색상·구성 순서를 유지하고 직무·업무·조건 데이터만 교체한다. 실제 회사 사진의 원본 고해상도가 확보되면 연출 이미지 대신 우선 사용한다. 본문은 360px 기준 16px 이상, 한글은 어절 단위 줄바꿈으로 검사한다.

## 다양한 시점으로 개편 (v2)

사용자 확인: 참고 사진은 이전 사무실이며 현재 사무실과 분위기가 유사하다. 사용자 요청으로 공고의 AI 연출 안내 문구를 삭제했다. 아래 두 이미지는 실제 공간 기록이 아니라 회사 사진의 소재와 분위기를 참고해 생성한 새로운 시점이다.

- 메인: 기존 `public/imgs/vw-company-daylight-v1.png` 유지.
- 생활 영역: `public/imgs/vw-company-lounge-v2.png` (1086×1448), 소파에 앉아 창가를 보는 가까운 시점. 참고 사진 3·2번.
- 하단: `public/imgs/vw-company-cafe-v2.png` (1448×1086), 창가 카페 카운터를 비스듬히 보는 시점. 참고 사진 2번. 원래 반복되던 메인 사진을 대체하며 가로 구도를 자르지 않는다.

내장 imagegen 사용. 기존 원본과 이전 생성본은 보존한다.

### 카페 최종 프롬프트

Use the supplied former company office photo as a design reference, create a NEW CAMERA ANGLE editorial interior photograph for a creative studio recruiting campaign. Landscape 4:3 composition. Camera faces the window coffee counter diagonally from inside the room, medium close view, at counter height. Feature warm honey oak counter, two black dome pendant lights with warm gold interiors, coffee machine, a couple of ceramic mugs, simple glass jars, soft leafy plant at edge, large windows and gentle morning city light. Concrete ceiling subtly visible. Same modest warm lived-in design agency atmosphere as reference, fresh natural green and creamy neutrals, professional magazine lighting, no vintage dark cast. This is a concept interpretation, not a reconstruction. No people, no words, no logos, no luxury additions. Focus on the coffee counter and pendant lamps, NOT the long office aisle, not a sofa and guitar composition. Crisp photorealistic natural materials.

### 라운지 최종 프롬프트

Generate a new camera viewpoint of an inviting creative agency lounge inspired by these former company office reference photos. Portrait 3:4 high-resolution editorial photograph. Camera at seated eye level, looking SIDEWAYS toward the windows across a low oak coffee table in foreground, charcoal fabric sofa on left edge, lush plants in ribbed white ceramic pots beside the window to right, acoustic guitar leaning by a low wood cabinet in middle distance. A small open sketchbook on table, soft daylight, honey wood, fresh green leaves, neutral concrete, quiet authentic modest studio mood. Shallow diagonal composition, close intimate lounge vignette rather than the long corridor seen in original photos. No repetition of original frontal office aisle. Photorealistic magazine quality, balanced bright warm light, not yellow or gray. No people, no text, no logos. This is a new conceptual camera view drawing on reference materials and character, not a documentary reconstruction.


## GDWEB 채용 메시지 반영 (v3)

지원자가 팀의 전문분야와 일하는 관점을 이해하도록 WHY VW와 SELECTED PROJECTS를 추가했다. 회사 소개는 브랜드 전략과 웹·모바일 경험을 연결하는 팀으로 요약하고, WITH의 WONDER IDEA / THINK HUMAN을 함께 일할 동료에 대한 메시지로 연결했다. GDWEB 등록 프로젝트 중 씨네큐브·한진 80주년 역사관·태광그룹·아이리버를 소개하며 등록연도임을 명시한다. 신규 입사자가 해당 프로젝트를 맡는다고 약속하지 않는다. 순위와 과거 인터뷰의 임원 경력·해외 계획은 넣지 않았다.

사용자가 제공한 세 이미지는 프로젝트 화면이 아닌 회사 공간·브랜드 사진이다. 충분한 화면 크기와 실제 로고의 정확성을 고려해 AI 재생성 없이 원본을 복사해서 사용했다.

| 원본 (docs/assets/) | 적용 파일 (public/imgs/) | 용도 |
| --- | --- | --- |
| Snipaste_2026-09-26_18-45-10.png | vw-gdweb-brand-card.png | WITH 소개 아래 명함 디테일 |
| Snipaste_2026-09-26_18-45-23.png | vw-gdweb-brand-wall.png | 메인 회사 이미지 |
| Snipaste_2026-09-26_18-45-31.png | vw-gdweb-studio-detail.png | WITH 소개 아래 그래픽·자전거 디테일 |

기존 라운지·카페 생성 이미지는 생활 소개에 유지한다. 원본 회사 사진과 생성 이미지의 성격은 본 문서에서 구분한다. 디자인 사진을 포트폴리오 결과물로 오인시키지 않도록 작업 사례는 별도의 텍스트 목록과 GDWEB 링크로 연결했다. PNG 자체의 링크는 클릭되지 않으며 사이트 미리보기의 링크로 접근할 수 있다.

## 작업 탐색 CTA 간소화

프로젝트 목록·연도·GDWEB 표기를 제거하고 OUR WORK 제목, 짧은 초대 문구와 강조 버튼으로 교체했다. 사이트 버튼은 기존 GDWEB 포트폴리오로 연결된다. 게시 HTML은 기존대로 전체 이미지를 공식 홈페이지에 연결한다.

