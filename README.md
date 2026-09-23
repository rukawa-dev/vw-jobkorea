# VW 채용공고 · React

참고 폴더의 채용공고 디자인을 React 컴포넌트로 구성한 Vite 프로젝트입니다.

## 실행

```sh
npm install
npm run dev
```

`npm run build`를 실행하면 배포 파일을 `dist`에 생성한 뒤 미리보기 서버를 시작합니다. 터미널의 `Network` 주소(예: `http://192.168.0.10:4173/`)로 같은 네트워크의 기기에서 접속할 수 있습니다. 주소는 PC에 할당된 내부 IP에 따라 달라집니다. 서버를 종료하려면 `Ctrl+C`를 누르세요.

파일만 빌드하려면 `npm run build:only`, 기존 빌드로 미리보기 서버만 시작하려면 `npm run preview`를 실행합니다.

PNG 생성에는 설치된 Microsoft Edge를 사용합니다. 다른 Chromium 브라우저를 사용하려면 `PNG_BROWSER_CHANNEL=chrome` 또는 `PNG_BROWSER_PATH` 환경변수로 실행 파일 경로를 지정하세요.

## 페이지

- `#/` — 시안 비교
- `#/editorial` — A 에디토리얼
- `#/poster` — B 타이포 포스터
- `#/studio` — C 스튜디오

해시 경로를 사용하므로 정적 호스팅에서도 개별 페이지 접근과 새로고침이 가능합니다. 공통 채용 섹션은 `src/pages/Sections.jsx`, 각 디자인은 `src/pages`에서 관리합니다. 이미지와 Wanted Sans 폰트는 `public`에 포함했습니다. HTML 삽입용 PNG는 실제 React 공고를 가로 860 CSS px, 배율 3배(출력 가로 2,580px)로 렌더링한 이미지입니다. `npm run build` 및 `npm run build:only` 실행 시 자동 갱신되며, `npm run export:png`로 이미지만 다시 생성할 수도 있습니다. A·B 비교 미리보기에는 기존 이미지를 사용하고, 새롭게 디자인한 C안의 미리보기는 빌드 시 함께 생성합니다. C안의 캐릭터 이미지와 생성 프롬프트는 `public/imgs/studio-characters.png`, `public/imgs/studio-characters.prompt.md`에 있습니다.

공고 내용과 지원 기간은 참고 자료 기준입니다. 지원 접수는 구현하지 않았으며 지원 방법을 안내합니다. 상단 메뉴에서 시안 이동 및 인쇄가 가능합니다.

참고 원본을 다시 가져오려면 `node scripts/import-reference.mjs <참고폴더>`를 실행합니다. 이 명령은 A·B안 및 공통 섹션의 생성 파일을 덮어쓰므로 수정 전 주의하세요. 새롭게 제작한 C안은 가져오기 대상에서 제외되어 유지됩니다.




## 잡코리아 HTML 코드

비교 화면 또는 각 시안 상단의 `채용공고 HTML 코드` 버튼으로 레이어 팝업을 엽니다. 고해상도 이미지를 잡코리아나 회사 웹서버에 업로드하고, 로그인 없이 접근 가능한 이미지 URL을 입력한 뒤 `HTML 코드 복사`를 누릅니다. 생성 코드는 인라인 스타일을 적용한 이미지와 `https://www.v-w.co.kr/` 앵커를 포함합니다. 붙여 넣은 결과는 잡코리아 편집기에서 확인해주세요.

내부 IP나 localhost 이미지 URL은 외부 지원자가 접근할 수 없어 복사 전에 공개 URL을 입력하도록 안내합니다. 공개 사이트에서 실행하면 현재 사이트의 이미지 URL을 기본값으로 사용하며, `VITE_PUBLIC_SITE_URL` 환경변수로 이미지가 배포되는 공개 도메인을 지정할 수도 있습니다. 입력한 이미지 URL은 시안별로 복사 성공 시 브라우저에 저장됩니다. 이미지 업로드 자체는 자동화하지 않습니다.

팝업은 Esc와 닫기 버튼을 지원하고, 내부 IP의 HTTP 환경에서 Clipboard API를 사용할 수 없으면 선택 기반 복사를 시도합니다. 둘 다 지원되지 않으면 코드 수동 복사를 안내합니다.
