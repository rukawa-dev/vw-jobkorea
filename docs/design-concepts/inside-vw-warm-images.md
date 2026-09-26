# INSIDE VW 따뜻한 사진 톤

## 세로 간판 문구 수정

내장 image_gen으로 ‘마음속의 원더랜드’를 교정한 `public/imgs/vw-office-warm-v2.png`를 상단에 적용했다.

Use case: text-localization / precise-object-edit. Edit ONLY the narrow vertical Korean lettering on the charcoal partition immediately beside the hanging plants, about 38% from left. Replace its garbled text with the exact Korean phrase '마음속의 원더랜드'. Spell all eight Hangul syllables correctly: 마 음 속 의 [space] 원 더 랜 드. Arrange readable upright Korean glyphs in one vertical column top to bottom, matching wall perspective, cream-white dimensional signage and subtle shadows. No punctuation. Preserve every other part: VW logo, lower small existing slogan, plants, desks, shelves, warm yellow-ivory lighting, framing and camera perspective. Do not redesign or change the room. The only modification should be these corrected Korean characters.

## 포스터·자전거 톤 통일

내장 image_gen으로 `public/imgs/vw-studio-detail-warm-v1.png`를 생성하고 하단 오른쪽에 적용했다.

Use case: lighting-weather. Image 1 is the edit target: portrait photograph of black road bicycle, framed geometric black-and-white poster, leaves, ivory wall and concrete floor. Image 2 is ONLY the lighting/color reference. Regenerate image 1 with identical composition, objects, bicycle geometry, poster artwork and crop; improve photographic clarity and match image 2's softly warm ivory and subtle golden-yellow interior light, natural olive foliage, warm gray floor and deep clean blacks. Balanced realistic architectural photography, not orange or sepia, no gray filter, no new objects, no added text. Portrait aspect ratio matching image 1.

내장 image_gen으로 사용자 사진을 재생성·보정했다. 기존 포스터·자전거 컷은 유지한다.

- 상단: `public/imgs/vw-office-warm-v1.png`
- 하단 왼쪽: `public/imgs/vw-plant-wall-warm-v1.png`

## 상단 생성 프롬프트

Use case: lighting-weather. Regenerate this reference office photograph as polished natural architectural photography for an INSIDE VW recruitment gallery, landscape 16:10. Preserve the actual narrow office layout, left charcoal partition and dimensional VW logo, rows of desks and monitors, central aisle, right white shelves, ceiling height and rear windows. Improve photographic clarity and tidy distracting cables modestly. Soft warm ivory and subtle yellow light, warm wood, natural green leaves, realistic balanced exposure. Not orange, not gray filtered. Keep believable small creative studio proportions, no new furniture or lavish facilities, no people, no added text. Preserve existing signage rather than inventing words.

## 식물 벽 편집 프롬프트

Use case: precise-object-edit. Edit this vertical office plant wall photograph for a recruitment gallery. Remove the white overlay Korean text '새로운 사무실' completely and reconstruct leaves beneath it. Preserve exact plant wall, cabinets, black ladder shelf, trophies and room structure. Recover blown bright leaf detail and reduce harsh yellow-orange cast while retaining a soft warm ivory, slightly yellow interior lighting mood. Natural olive greens, balanced exposure, realistic high quality photographic texture. No new plants or objects, no new text. Portrait composition.


## 원본 간판 기준 재수정
최종 상단은 public/imgs/vw-office-warm-v3.png. 내장 image_gen 사용. 원본 vw-office-logo-wide.jpg를 편집 대상으로 삼고 원본의 회전된 가로 문구, 서체, 구분점과 배치를 유지하도록 요청했다. 프롬프트: Retouch the original photo with warm slightly yellow ivory lighting. Preserve original wall lettering exactly as photographed, including sideways rotated Korean phrase, circular separator, letterforms and spacing. Do not retype or reinterpret characters. Keep architecture and composition intact; only photographic tone and modest clarity enhancement.


## 최종: 원본 사진 + CSS 색감 보정
상단은 vw-office-logo-wide.jpg 원본을 사용한다. 생성본 v1/v2/v3는 사용하지 않는다. 글자·구도 변경 없이 CSS brightness(1.09) sepia(.22) saturate(1.06)로 밝기와 따뜻한 톤만 조절한다. 이 보정은 게시 PNG에도 함께 출력된다.
