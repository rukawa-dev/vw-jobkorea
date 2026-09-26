import assert from 'node:assert/strict';
import test from 'node:test';
import { defineRecruitments, recruitments, resolveRoute, exportDesigns } from '../src/recruitments.js';
const entry = (id, count = 1) => ({ id, title: id, designs: Array.from({length: count}, (_, i) => ({ id: `draft-${i}`, component: 'Editorial' })) });
test('same role in later rounds has isolated routes, images and storage; arbitrary design counts', () => {
  const entries = defineRecruitments([entry('2026-designer'), entry('2027-designer', 4), entry('2027-engineer', 2)]);
  const designs = entries.flatMap(item => item.designs);
  for (const field of ['route', 'imagePath', 'previewPath', 'storageKey']) assert.equal(new Set(designs.map(item => item[field])).size, 7);
  for (const recruitment of entries) {
    assert.equal(resolveRoute(recruitment.route, entries).recruitment, recruitment);
    for (const design of recruitment.designs) assert.equal(resolveRoute(design.route, entries).design, design);
  }
});
test('all rounds use ID paths while existing route aliases survive; C is removed', () => {
  for (const recruitment of recruitments) for (const design of recruitment.designs) {
    assert.equal(design.imagePath, `downloads/${recruitment.id}/${design.id}-3x.png`);
    assert.equal(design.previewPath, `downloads/${recruitment.id}/${design.id}-preview.png`);
  }
  for (const recruitment of recruitments) {
    for (const alias of recruitment.aliases) assert.equal(resolveRoute(alias).recruitment, recruitment);
    for (const design of recruitment.designs) for (const alias of design.aliases) assert.equal(resolveRoute(alias).design, design);
  }
  for (const route of ['studio', 'planner/studio', 'unknown']) assert.deepEqual(resolveRoute(route), {});
});
test('duplicate IDs, aliases and output paths fail before overwriting another recruitment', () => {
  assert.throws(() => defineRecruitments([entry('one'), entry('one')]), /Duplicate recruitment/);
  assert.throws(() => defineRecruitments([{...entry('one'), designs: [{id:'a'}, {id:'a'}]}]), /Duplicate design/);
  assert.throws(() => defineRecruitments([{...entry('one'), aliases:['shared']}, {...entry('two'), aliases:['shared']}]), /Duplicate route/);
  assert.throws(() => defineRecruitments([{...entry('one'), designs:[{id:'a', imagePath:'downloads/shared.png'}]}, {...entry('two'), designs:[{id:'b', imagePath:'downloads/shared.png'}]}]), /Duplicate image/);
  assert.throws(() => defineRecruitments([{...entry('one'), designs:[{id:'a', imagePath:'downloads/../shared.png'}]}]), /Invalid image path/);
});

test('September 26 designer is a separate round with its own artwork and storage', () => {
  const latest = recruitments.find(item => item.id === '2026-09-26-designer');
  const previous = recruitments.find(item => item.id === '2026-09-10-designer');
  assert.equal(latest.registeredAt, '2026-09-26');
  assert.equal(latest.designs.length, 2);
  assert.equal(resolveRoute('designer').recruitment, previous);
  latest.designs.forEach((design, index) => {
    assert.equal(design.imagePath, 'downloads/2026-09-26-designer/' + design.id + '-3x.png');
    assert.notEqual(design.component, previous.designs[index].component);
    assert.notEqual(design.storageKey, previous.designs[index].storageKey);
    assert.equal(design.aliases.length, 0);
  });
});
