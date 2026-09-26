# C · 브랜드 프레임 v2 — 이미지 중심 캠페인

2026-09-26 수정. v1이 A안과 유사하다는 피드백에 따라 Editorial.css 의존성과 editorial 클래스를 제거했다. 기존 brand-frame 게시 경로는 유지한다.

전체 폭 이미지와 대형 영문 제목 → 코발트 직무 소개 → 비대칭 이미지·회사 관점 → 번호 카드형 업무 → 공간 이미지 전환 → 짙은 남색 자격요건 → 밝은 근무조건 → 실제 사무실 → 이미지 위 지원 메시지 → 코발트 지원 안내 순서다.

색상은 코발트 #094bbb, 남색 #122532, 아이보리 #f2f0e9. 본문은 360px에서 약 16px를 유지한다. 채용 조건은 기존 Sections.jsx를 그대로 사용한다. 두 생성 아트워크를 다르게 크롭해 표지·소개·전환·마지막 메시지에 활용하고 실제 회사 사진은 복지 영역에 둔다. 생성 공간을 실제 사무실이나 고객 프로젝트로 설명하지 않는다.

내장 imagegen으로 생성한 추가 이미지: `public/imgs/brand-frame-space-v2.png`. 기존 `brand-frame-v1.png`도 함께 사용한다. v1 기준 이미지는 보존한다.

## 추가 이미지 최종 프롬프트

Create a premium editorial campaign photograph, landscape 3:2. An abstract architectural landscape of monolithic cobalt blue planes, a sweeping brushed aluminium bridge and translucent cyan glass, on an ivory gallery floor. Dramatic side sunlight casts long graphic shadows. Close architectural perspective, highly tactile materials, bold minimalist art direction for a digital branding agency. New original art, no real building, no people, no words, no typography, no logos, no UI. Strong geometric composition, refined and cinematic, not toy-like. Let blue occupy 40 percent and warm ivory 40 percent, metal and glass the remainder.
