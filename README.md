<p align="center">
  <a href="https://rukawa-dev.github.io/vw-jobkorea/" target="_blank" rel="noopener noreferrer">
    <img src="docs/assets/readme-demo.svg" width="1120" alt="🚀 LIVE DEMO — VW 채용공고 운영 사이트 바로가기">
  </a>
</p>

<p align="center">
  <strong>브이더블유 채용공고 디자인 아카이브</strong><br>
  다양한 직무와 채용 회차의 공고를 모아, 디자인하고 기록합니다.
</p>

## 🗂️ 프로젝트 소개

새로운 채용이 열릴 때마다 공고와 디자인을 추가해 나가는 아카이브입니다. 특정 직무나 시안 개수에 범위를 한정하지 않습니다.

- 🗓️ **등록일별 기록** — 채용 회차별 공고를 찾고 이전 공고를 보관합니다.
- 🎨 **공고별 디자인** — 직무와 채용 목적에 맞는 시안을 제작합니다.
- 📋 **게시용 HTML** — 완성한 공고를 잡코리아 편집기에 붙여 넣습니다.

## 🎨 제작 예시

아래는 현재 등록된 디자이너 공고의 시안입니다. 앞으로 추가되는 공고는 각 채용에 맞게 구성합니다.

| 🤍 A · 에디토리얼 | 🖤 B · 타이포 포스터 |
| :---: | :---: |
| <img src="public/downloads/2026-09-10-designer/editorial-preview.png" width="240" alt="에디토리얼 시안"> | <img src="public/downloads/2026-09-10-designer/poster-preview.png" width="240" alt="타이포 포스터 시안"> |
| 여백과 차분한 타이포그래피 | 대담한 글자와 선명한 대비 |

현재는 디자이너와 기획자/PM 공고가 등록되어 있습니다. A·B는 이번 공고의 시안 구성이며, 모든 공고에 적용되는 고정 형식은 아닙니다.

## 📐 디자인 컨셉 보관과 재사용

다음 채용 회차에서도 내용만 교체하고 디자인을 유지할 때 아래 문서를 먼저 확인합니다.

- [A · 에디토리얼 컨셉](docs/design-concepts/A-editorial.md)
- [B · 타이포 포스터 컨셉](docs/design-concepts/B-poster.md)
- [공통 제작 규칙·새 공고 제작 절차·다음 작업 요청문](docs/design-concepts/README.md)

각 문서에는 색상, 글자 크기, 섹션 순서, 변경 가능한 내용, 검수 기준과 고정 참고 미리보기가 들어 있습니다. 현재 본문은 JSX로 작성하며, 내용 데이터만 전달하는 공용 A·B 템플릿은 다음 개선안으로 문서화했습니다.

## 📋 잡코리아에 사용하는 방법

**등록일별 목록 → 채용공고 선택 → 시안 선택 → HTML 코드 복사**

1. 운영 사이트에서 원하는 채용공고를 선택합니다.
2. **채용공고 HTML 코드** 버튼을 누릅니다.
3. ‘공고 이미지가 준비되었습니다’를 확인하고 **HTML 코드 복사**를 누릅니다.
4. 잡코리아 편집기의 **HTML 모드**에 붙여 넣고 미리보기를 확인합니다.

게시용 이미지는 **PC·모바일 공통 한 장**입니다. 본문을 1열로 구성하고 360px 표시 폭에서 주요 본문이 약 16px가 되도록 설계했습니다. 일반 `<img>`를 사용하며 PC에서는 최대 720px, 모바일에서는 화면 너비에 맞춰 표시합니다. 저장 후 실제 공고 페이지에서도 확인하세요.

상세 화면의 **공통 이미지 다운로드**에서 게시용 PNG를 받을 수 있습니다. `npm run export:png`는 등록된 모든 시안을 가로 720px 기준, 2배 해상도(1440px)로 생성합니다. 파일 경로는 `downloads/{공고 ID}/{시안 ID}-3x.png` 형식입니다. PC/MO 전환은 사용하지 않습니다. 새 이미지가 공개 서버에 배포되어야 HTML의 기본 공개 주소로 표시됩니다. 현재 출력은 2배이며 `-3x.png`는 호환용 접미사입니다. 9월 10일 공고도 ID별 폴더에 생성합니다. 기존 루트의 `VW-*.png` 8개는 이미 게시된 URL을 위해 그대로 보존하며 자동 생성·수정·삭제하지 않습니다. 공고 마감 후 사용자가 직접 정리합니다. 모바일 전용 파일과 중복 원본은 제거했습니다. 브라우저나 게시 플랫폼의 캐시가 갱신된 뒤 새 이미지가 표시됩니다.

> 공고 이미지를 클릭하면 [브이더블유 홈페이지](https://www.v-w.co.kr/)가 새 창으로 열립니다. 지원 접수는 이 사이트에서 처리하지 않습니다.

이미지 주소는 GitHub Pages에 배포된 파일로 자동 입력됩니다. 다른 서버의 이미지를 쓰는 경우에만 **이미지 주소 변경**을 펼치세요. 로그인 없이 열리는 공개 주소가 필요하며, localhost나 내부 IP는 사용할 수 없습니다.

## ⚡ 로컬 실행

Node.js 24와 Microsoft Edge가 설치된 환경을 기준으로 합니다.

```sh
npm ci
npm run dev
```

| 명령어 | 하는 일 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 · 수정 내용 자동 반영 |
| `npm run build` | 이미지 생성 + 사이트 빌드 + 네트워크 미리보기 |
| `npm run build:only` | 이미지와 `dist` 생성 후 종료 |
| `npm run preview` | 기존 `dist`로 네트워크 미리보기 실행 |
| `npm run export:png` | 공고 이미지와 미리보기만 다시 생성 |

**다른 기기에서 확인:** `npm run dev` 또는 `npm run build` 후 터미널의 **Network** 주소로 접속합니다. 예: `http://192.168.0.10:4173/`. 같은 네트워크에서 사용할 수 있고, IP는 PC 환경에 따라 달라집니다. 종료는 `Ctrl+C`입니다.

## 🚀 GitHub Pages 배포

1. 저장소 **Settings → Pages → Source → GitHub Actions**를 선택합니다.
2. 변경 사항을 **main** 브랜치에 커밋하고 푸시합니다.
3. **Actions → Deploy GitHub Pages**가 성공하면 운영 사이트를 확인합니다.

```text
main에 push → 공고 이미지 생성 → Vite 빌드 → GitHub Pages 배포
```

워크플로가 Node.js 24와 Chromium을 준비하고, `/vw-jobkorea/` 경로와 공개 이미지 주소를 자동 설정합니다. 별도 도메인은 필요하지 않습니다. CI에서는 서버까지 실행하는 `npm run build` 대신 `npm run build:only`를 사용합니다.

## 🛠️ 수정할 파일 찾기

| 수정할 내용 | 파일 / 폴더 |
| --- | --- |
| 등록일·마감일·직무별 목록 | [src/recruitments.js](src/recruitments.js) |
| 메인 목록 화면·헤더 | [src/RecruitmentList.jsx](src/RecruitmentList.jsx) |
| 시안 비교 화면·페이지 연결 | [src/main.jsx](src/main.jsx) |
| 디자이너 A·B 공통 내용 | [Sections.jsx](src/pages/Sections.jsx) |
| 기획자 A·B 공통 내용 | [PlannerSections.jsx](src/pages/PlannerSections.jsx) |
| HTML 코드 팝업 | [HtmlCodeDialog.jsx](src/HtmlCodeDialog.jsx) |
| 사진·캐릭터·로고 | [public/imgs](public/imgs) |
| 자동 생성되는 공고 이미지 | [public/downloads](public/downloads) |
| 원문 채용 기준 | [디자이너](docs/designer-source.md) · [기획자/PM](docs/planner-source.md) |

**새 공고 추가 시:** 실제 등록일(`registeredAt`), 고유 ID, 마감일, 직무와 designs 배열을 등록합니다. 시안 수와 경로는 자동으로 계산합니다. 날짜는 최신순으로 정렬됩니다. 같은 직무의 새 회차도 별도 공고로 추가해 이전 기록을 보존하세요.

목록, 상세 화면, 다운로드, HTML 및 PNG 생성은 모두 `src/recruitments.js`의 등록 정보를 사용합니다. 새 공고 추가 시 라우터나 이미지 생성 스크립트를 수정할 필요가 없습니다. 시안은 1개 이상 자유롭게 등록할 수 있습니다.

- 공고 경로: `#/recruitments/{공고 ID}`
- 시안 경로: `#/recruitments/{공고 ID}/{시안 ID}`
- 기본 이미지: `public/downloads/{공고 ID}/{시안 ID}-3x.png`, `{시안 ID}-preview.png`
- HTML 이미지 주소 저장 키도 공고 ID와 시안 ID를 함께 사용합니다.
- 모든 공고의 생성 경로는 공고 ID별 폴더입니다. 기존 루트 `VW-*.png` 파일은 게시 호환용으로만 남깁니다. 신규 공고에 기존 경로·별칭을 복사하지 마세요. ID·경로·파일 중복은 등록 단계에서 오류로 차단합니다.
- C·스튜디오 시안은 삭제했습니다. 해당 상세 경로와 PNG는 더 이상 제공하지 않습니다.

새 디자인은 `src/pages/` 아래에 default export React 컴포넌트로 작성하고, 시안의 `component`에 확장자 없는 상대 경로를 지정합니다(예: `2027/DesignerEditorial`). 각 컴포넌트는 `recruitment`, `design` props를 받으며, 출력 영역에 `main.recruitment`를 사용합니다. 기존 컴포넌트의 본문은 현재 공고 전용이므로 새 회차에서 내용이 다르면 별도 컴포넌트를 등록하세요. 이전 공고 컴포넌트를 수정하면 해당 공고 이미지도 바뀝니다.

`node --test scripts/recruitments.test.mjs`로 회차 격리와 중복 차단을 검사합니다.

<details>
<summary><strong>🧩 현재 등록된 공고의 경로와 이미지 생성 설정</strong></summary>

| 화면 | 디자이너 | 기획자/PM |
| --- | --- | --- |
| 시안 비교 | `#/designer` | `#/planner` |
| A · 에디토리얼 | `#/editorial` | `#/planner/editorial` |
| B · 타이포 포스터 | `#/poster` | `#/planner/poster` |

첫 화면은 `#/`입니다. 해시 경로를 사용해 정적 호스팅에서도 상세 페이지 새로고침이 가능합니다.

- 공고 PNG는 가로 **720 CSS px × 2배 = 1,440px**로 생성합니다.
- 9월 10일 공고도 `downloads/2026-09-10-designer/`, `downloads/2026-09-10-planner/` 아래 `editorial-3x.png`, `poster-3x.png` 및 미리보기를 생성합니다.
- 로컬 이미지 생성은 Microsoft Edge를 사용합니다. 다른 브라우저는 `PNG_BROWSER_CHANNEL` 또는 `PNG_BROWSER_PATH` 환경변수로 지정합니다.
- 공개 이미지 기본 주소는 `VITE_PUBLIC_SITE_URL`, 배포 경로는 `VITE_BASE_PATH`로 설정합니다.
- 직접 입력한 이미지 주소는 복사 성공 시 해당 시안별로 브라우저에 저장됩니다.
- 팝업은 Esc로 닫을 수 있습니다. 자동 복사가 안 되는 환경에서는 코드 수동 복사를 안내합니다.

</details>

<details>
<summary><strong>📦 참고 원본 다시 가져오기</strong></summary>

```sh
node scripts/import-reference.mjs <참고폴더>
```

이 명령은 A·B안과 공통 섹션의 생성 파일을 덮어씁니다. 수정한 내용이 있다면 실행 전에 확인하세요.

</details>
