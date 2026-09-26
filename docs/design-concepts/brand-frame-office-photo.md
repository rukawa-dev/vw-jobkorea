# C안 회사 사진 활용 기록

## 선택과 적용

- 선택 원본: `../assets/업무공간과_소파_라운지.jpg` (292 × 390px).
- 적용 파일: `../../public/imgs/vw-office-archive-4-upscaled.png`.
- 선택 이유: 선반·업무 공간·소파·식물이 한 화면에 있어 일과 휴식의 분위기를 함께 전달한다. 1번은 통로 중심, 2번은 카페 디테일 중심, 3번은 식물 중심으로 4번보다 공간 전체 설명력이 낮아 이번에는 사용하지 않았다.
- 적용 대상: 2026-09-26 디자이너 C / 브랜드 프레임의 LIFE AT VW 영역. 사진 전체를 세로 비율로 배치하고 회색 필터를 사용하지 않는다.
- 원본 네 장은 변경하지 않았다. A/B 디자인에는 적용하지 않았다.
- 촬영 시점과 현재 사무실 여부는 확인되지 않아 `VW SPACE ARCHIVE`로 표기했다.
- 내장 imagegen으로 확대·보정했다. 단순 픽셀 보간이 아닌 생성형 복원이므로 가구나 식물의 미세한 형태·질감은 원본과 다를 수 있다. 실제 상세 공간 확인 자료로 사용하지 않는다.

## 최종 프롬프트

Edit target: the supplied low-resolution real office photograph. Faithful photographic upscale and gentle JPEG artifact restoration only, output portrait 1168x1560 or larger at identical 3:4 framing. Preserve exact camera, perspective, framing, floor reflection, dark ceiling, hanging rectangular light, wood shelves and monitors on left, black sofa, low wooden table, plants with white pots and acoustic guitar on right, every object location, and the original warm natural color atmosphere. Recover clean edges conservatively, avoid invented detail where ambiguous. No redesign, no added or removed objects, no people, no text, no logos, no gray filter, no excessive sharpening or HDR. This is an archival company photograph for a recruitment layout, not a concept render.

## 출력 확인

실제 생성 크기: 1086 × 1448px (원본 대비 가로·세로 약 3.7배). 게시 PNG: 1440 × 21170px. 빌드 및 360/390/720px 가로 넘침 검사 통과. 최종 게시 PNG의 사진 영역을 확인했다.
