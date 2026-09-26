# C · 브랜드 프레임 v2 — 이미지 중심 캠페인

2026-09-26 수정. v1이 A안과 유사하다는 피드백에 따라 Editorial.css 의존성과 editorial 클래스를 제거했다. 기존 brand-frame 게시 경로는 유지한다.

전체 폭 이미지와 대형 영문 제목 → 차콜 직무 소개 → 비대칭 이미지·회사 관점 → 번호 카드형 업무 → 공간 이미지 전환 → 짙은 차콜 자격요건 → 밝은 근무조건 → 실제 사무실 → 이미지 위 지원 메시지 → 차콜 지원 안내 순서다.

색상은 차콜 #30302c, 딥차콜 #232321, 웜그레이 #e5e3dc, 아이보리 #f2f0e9. 생성 아트워크는 v3 소재 이미지로 교체했다. grayscale 필터를 제거하고 처음부터 차콜 석재·아이보리·샴페인 메탈로 생성한 컬러 원본을 사용한다. 블루가 회사 스타일과 맞지 않는다는 피드백을 반영했다. 본문은 360px에서 약 16px를 유지한다. 채용 조건은 기존 Sections.jsx를 그대로 사용한다. 두 생성 아트워크를 다르게 크롭해 표지·소개·전환·마지막 메시지에 활용하고 실제 회사 사진은 복지 영역에 둔다. 생성 공간을 실제 사무실이나 고객 프로젝트로 설명하지 않는다.

내장 imagegen으로 생성한 추가 이미지: `public/imgs/brand-frame-space-v3.png`와 `public/imgs/brand-frame-object-v3.png`. [v3 생성 기록](brand-frame-v3-image-prompts.md)을 참조한다. v1 기준 이미지는 보존한다.

## 추가 이미지 최종 프롬프트

Create a premium editorial campaign photograph, landscape 3:2. An abstract architectural landscape of monolithic cobalt blue planes, a sweeping brushed aluminium bridge and translucent cyan glass, on an ivory gallery floor. Dramatic side sunlight casts long graphic shadows. Close architectural perspective, highly tactile materials, bold minimalist art direction for a digital branding agency. New original art, no real building, no people, no words, no typography, no logos, no UI. Strong geometric composition, refined and cinematic, not toy-like. Let blue occupy 40 percent and warm ivory 40 percent, metal and glass the remainder.

## 회사 사진 적용

LIFE AT VW의 입구 사진을 회사 제공 4번 사진의 확대 보정본으로 교체했다. 세로 원본 구도를 유지하며 별도 색상 필터를 사용하지 않는다. 선택 이유·원본·생성 프롬프트는 [사진 활용 기록](brand-frame-office-photo.md)을 참조한다.

현재 디자인은 [회사 공간 캠페인](C-company-campaign.md)으로 전면 개편되었다. 이 문서는 이전 버전 기록이다.
