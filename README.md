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

해시 경로를 사용하므로 정적 호스팅에서도 개별 페이지 접근과 새로고침이 가능합니다. 공통 채용 섹션은 `src/pages/Sections.jsx`, 각 디자인은 `src/pages`에서 관리합니다. 이미지와 Wanted Sans 폰트는 `public`에 포함했습니다. 다운로드용 PNG는 실제 React 공고를 가로 860 CSS px, 배율 3배(출력 가로 2,580px)로 렌더링한 이미지입니다. `npm run build` 및 `npm run build:only` 실행 시 자동 갱신되며, `npm run export:png`로 이미지만 다시 생성할 수도 있습니다. A·B 비교 미리보기에는 기존 이미지를 사용하고, 새롭게 디자인한 C안의 미리보기는 빌드 시 함께 생성합니다. C안의 캐릭터 이미지와 생성 프롬프트는 `public/imgs/studio-characters.png`, `public/imgs/studio-characters.prompt.md`에 있습니다.

공고 내용과 지원 기간은 참고 자료 기준입니다. 지원 접수는 구현하지 않았으며 지원 방법을 안내합니다. 상단 메뉴에서 시안 이동 및 인쇄가 가능합니다.

참고 원본을 다시 가져오려면 `node scripts/import-reference.mjs <참고폴더>`를 실행합니다. 이 명령은 A·B안 및 공통 섹션의 생성 파일을 덮어쓰므로 수정 전 주의하세요. 새롭게 제작한 C안은 가져오기 대상에서 제외되어 유지됩니다.



