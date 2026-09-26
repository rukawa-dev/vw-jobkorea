# C · 브랜드 프레임 — 회사 공간 캠페인

2026-09-26 전면 재구성. 현재 C안 기준 문서이며 이전 v2 기록보다 우선한다.

## 디자인 방향

회사 사진을 주인공으로 삼는다. 기존 추상 건축·유리 조형 이미지는 C안에서 사용하지 않는다. 밝은 우드, 식물의 그린, 자연광을 크림색 종이와 딥그린(#344336)에 연결한다. 첫 화면의 한글 채용 메시지 → 회사 공간 전면 사진 → 브랜드 관점 → 식물과 기타가 보이는 공간 및 복지 → 업무 → 자격 → 라운지 디테일 → 조건 → 지원 안내 순서다. 사진 위 텍스트는 제한하고 원본 세로 구도를 크게 보여준다.

## 이미지

내장 imagegen으로 회사 제공 사진을 크게 보정했다. 두 파일 모두 1086×1448px. 원본은 보존한다.

- `docs/assets/업무공간과_소파_라운지.jpg` → `public/imgs/vw-company-daylight-v1.png`: 메인과 라운지 디테일.
- `docs/assets/창가_식물과_기타.jpg` → `public/imgs/vw-company-green-v1.png`: 생활·복지 소개.

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
| 조명에_걸린_브이더블유_명함.png | vw-gdweb-brand-card.png | WITH 소개 아래 명함 디테일 |
| 원더랜드_브랜드월과_라운지.png | vw-gdweb-brand-wall.png | 메인 회사 이미지 |
| 그래픽_포스터와_자전거.png | vw-gdweb-studio-detail.png | WITH 소개 아래 그래픽·자전거 디테일 |

기존 라운지·카페 생성 이미지는 생활 소개에 유지한다. 원본 회사 사진과 생성 이미지의 성격은 본 문서에서 구분한다. 디자인 사진을 포트폴리오 결과물로 오인시키지 않도록 작업 사례는 별도의 텍스트 목록과 GDWEB 링크로 연결했다. PNG 자체의 링크는 클릭되지 않으며 사이트 미리보기의 링크로 접근할 수 있다.

## 작업 탐색 CTA 간소화

프로젝트 목록·연도·GDWEB 표기를 제거하고 OUR WORK 제목, 짧은 초대 문구와 강조 버튼으로 교체했다. 사이트 버튼은 기존 GDWEB 포트폴리오로 연결된다. 게시 HTML은 기존대로 전체 이미지를 공식 홈페이지에 연결한다.


## 추가 회사 사진 적용 (v4)

메인을 브이더블유_로고벽과_업무공간.jpg → public/imgs/vw-office-logo-wide.jpg로 교체했다. 가로 원본 전체를 보여주며 영문 메시지는 사진 아래로 옮겨 VW 로고를 가리지 않는다. 문화 영역의 자전거 사진은 꽃병과_브이더블유_명함.jpg → public/imgs/vw-flowers-brand-card.jpg로 교체하고 전체 비율을 유지한다. 하단 카페 사진 블록을 제거하고 근무조건 다음, 지원 안내 직전에 브이더블유_브랜드_사인.jpg → public/imgs/vw-brand-sign.jpg를 배치했다. 원본의 색과 로고를 보존해 AI 보정 없이 사용했다. 흐릿한 식물·인물 사진은 이번에는 미사용이다.


## 메인 재설계 (v5)

어두운 로고 벽·통로 중심의 v4 메인을 교체했다. 이전 회사 사진 두 장(원더랜드_브랜드월과_라운지.png, 업무공간과_소파_라운지.jpg)을 참고해 자연광·라운지·식물·업무 공간이 보이는 새로운 캠페인 이미지를 내장 imagegen으로 생성했다. 현 사무실을 촬영한 기록 사진이 아닌 콘셉트 이미지다. 파일: public/imgs/vw-office-hero-sunlight-v5.png. 상단 소개 여백을 줄이고 별도 캡션 블록 대신 이미지 하단에 ‘좋은 감각이 자라는 곳.’을 배치했다. 나머지 회사 사진과 채용 내용은 유지한다.

### 최종 생성 프롬프트

Create a striking aspirational recruitment hero photograph inspired by these two former creative agency office references. New editorial camera angle, portrait 4:5 composition. A beautiful but believable small creative studio, not a corporate palace. Camera looking diagonally from lounge toward large sunny windows and an open working area. Foreground right: inviting charcoal sofa and low oak coffee table. Middle: lush tall green plants in white ribbed pots, honey oak shelves, a subtle guitar. Background: neat real workstations with monitors and a glass meeting room, exposed concrete ceiling and refined black pendant lamps. Warm natural morning sunlight washes the room, rich fresh greens, cream and warm oak, professionally balanced architectural photography, crisp tactile details, straight verticals. The room should feel open, welcoming, creative, a place a designer would love spending a day. Large dark wall must NOT block the view; no corridor-dominated framing, no excessive ceiling or empty floor. Composition prioritizes lounge, greenery and daylight, not monitors. Retain the reference office's modest material character. No text, no invented logos, no people. A conceptual interpretation for campaign use, not documentary restoration.

## 현실적인 메인으로 조정 (v6)

과도한 식물·자연광 콘셉트를 제거하고 브이더블유_로고벽과_업무공간.jpg를 내장 imagegen으로 보수적으로 보정했다. 적용: public/imgs/vw-office-natural-v6.png. 기존 배치·업무 공간을 기준으로 노출과 화이트밸런스를 정돈하는 방향이다. 생성형 보정이라 미세한 디테일은 달라질 수 있다. 전체 사진을 가리지 않도록 문구는 하단의 작은 차콜 캡션으로 이동했다. v5는 사용하지 않는다.

최종 프롬프트:
Retouch this exact office photograph conservatively. Preserve every object, the exact layout, framing, camera angle, room proportions, monitors, desks, shelving, ceiling lights and plants. Preserve the VW wall logo and all existing lettering exactly; do not rewrite text. Only gently lift exposure in the work area, neutralize the cool cast, improve subtle clarity. Natural ordinary office daylight, neutral white walls, realistic materials, modest contrast. Keep original landscape aspect ratio. Do not add plants, furniture, windows, sunlight beams, lounge, people, or architectural features. No conceptual redesign. Result should look like the identical real photograph with careful professional exposure and white balance correction, not a generated luxury office.

## 최종 메인 사진 재선정 (v7)

원본 docs/assets/원더랜드_브랜드월과_라운지.png (적용 파일 public/imgs/vw-gdweb-brand-wall.png)를 선택했다. 로고·브랜드 문구와 라운지가 함께 보여 회사의 정체성과 분위기를 전달한다. 어두운 통로 중심 사진보다 공간 구성이 다양하고, 생성 공간보다 실제 사진의 자연스러움이 있다. AI 재생성 없이 CSS 높이 96cqw, object-position center 82%로 천장 여백을 줄였다. 메인 외 구성은 유지한다.


## 채용 정보 우선 구성 (v8)

도입을 로고·직무 제목·경력/고용형태/지역 한 줄·48cqw 사진으로 압축했다. 사진 아래 캡션과 영문 슬로건을 삭제했다. 담당 업무 → 지원 자격 → 근무 조건 → 회사 소개와 작업 보기 → 생활·복지 → 지원 순서로 변경했다. 감성 제목은 회사 소개에 한 번만 사용하며 별도 OUR WORK 블록은 회사 소개의 버튼으로 통합했다. 회사 소개의 대형 영문 문구와 반복 초대 문장도 제거했다.


## 사진 위 채용 제목 (v9)

아이보리 로고 헤더 → 사진 위 흰색 채용 제목 → 핵심 조건 한 줄 → 담당 업무 순서다. 사진 높이는 64cqw, 제목은 왼쪽 하단에 두 줄로 배치한다. 왼쪽 하단에 집중된 그라데이션으로 대비를 확보하고 오른쪽 상단의 라운지 밝기는 유지한다. 추가 슬로건은 넣지 않는다.


## 이미지용 문구 정리 (v10)

회사 소개의 작업 보기 링크를 일반 텍스트 EXPLORE OUR WORK로 바꾸고 버튼 테두리와 화살표를 제거했다. 지원 제목은 ‘당신을 / 만나고 싶습니다.’로 변경했다.


현재 C안은 [Studio Journal](C-studio-journal.md)로 전면 재구성되었다. 이 문서는 이전 시안과 이미지 생성 기록이다.
