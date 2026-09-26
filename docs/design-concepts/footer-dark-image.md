# 차콜 배경에 연결되는 마무리 이미지

## 정면 구도 개정

현재 사용: `public/imgs/vw-signature-dark-v2.png`. 내장 image_gen으로 회사명 기준선과 VW 사인을 수평으로 교정한 정면 구도를 생성했다.

프롬프트: Edit this photographic brand sign banner. Correct perspective to a straight-on front elevation, camera perfectly parallel to the wall, zero roll. All text baselines must be precisely horizontal, Korean letter tops level, English baseline level. VW sign upright, same size letters without perspective taper, aligned level. Preserve composition: Korean '브이더블유' left, 'V° WONDERLAND EXTENSION' underneath, warm bulb-lit dimensional VW right. Preserve exact spelling, physical raised ivory/gold lettering and subtle realistic depth shadows. Same dark warm charcoal background #292824, warm amber lighting and upper 20% empty dark area blending into background. Wide 16:9. No windows, floor, additional objects or extra text. Key change is level front-facing geometry, no diagonal typography, no oblique wall perspective.

내장 image_gen으로 vw-office.jpg를 편집했다. 결과: `public/imgs/vw-signature-dark-v1.png`.
밝은 창과 바닥을 제거하고 회사명·VW 조명 사인을 유지한다. 페이지에서는 상단 20%에 차콜 그라데이션을 겹쳐 배경 경계를 없앤다.

## 생성 프롬프트

Edit reference photo into a seamless dark photographic closing banner for a recruitment page. Landscape 16:9. Preserve the dimensional Korean company lettering '브이더블유', the existing WONDERLAND EXTENSION lettering and the illuminated VW sign faithfully. Keep physical photography, the oblique wall perspective and warm ivory metal letters. Remove the bright window strip and all cold blue daylight at the top, replacing it with continuous warm charcoal wall. Upper 20 percent should be calm dark charcoal around #292824, with no text there, seamlessly fading into the wall photograph beneath. Position company lettering in middle-left and VW illuminated letters middle-right/lower-right with enough space around them. Subtle warm amber bulbs, restrained warm highlights, deep neutral shadows. Remove bright floor/window distractions. No added words, no new logos, no frame, no border, no washed gray filter. Elegant quiet studio brand sign, not a dramatic neon advertisement.
