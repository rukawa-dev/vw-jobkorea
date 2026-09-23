import fs from 'node:fs';
import path from 'node:path';
const source = process.argv[2];
if (!source) throw new Error('참고 폴더 경로를 전달해주세요.');
fs.mkdirSync('src/pages', { recursive: true });
fs.mkdirSync('public', { recursive: true });
for (const folder of ['imgs', 'fonts', 'downloads']) {
  fs.mkdirSync(`public/${folder}`, { recursive: true });
  for (const file of fs.readdirSync(path.join(source, folder))) {
    if (!/\.(svg|jpe?g|png|otf)$/.test(file)) continue;
    fs.copyFileSync(path.join(source, folder, file), `public/${folder}/${file}`);
  }
}
const entries = [
  ['Editorial', 'editorial', '채용공고_A_에디토리얼.html'],
  ['Poster', 'poster', '채용공고_B_타이포포스터.html'],
];
function jsx(html) {
  return html.replace(/(<table[^>]*>)(\s*<tr>)/g, '$1<tbody>$2').replace(/<\/tr>(\s*)<\/table>/g, '</tr>$1</tbody></table>').replace(/<!--[^]*?-->/g, '').replace(/\bclass=/g, 'className=').replace(/\bcellpadding=/gi, 'cellPadding=').replace(/\bcellspacing=/gi, 'cellSpacing=').replace(/\bcolspan=/gi, 'colSpan=')
    .replace(/src="imgs\/([^"]+)"/g, (_, file) => `src={import.meta.env.BASE_URL + ${JSON.stringify(`imgs/${file}`)}}`).replace(/<(img|br|hr)([^>]*?)\s*\/?\s*>/g, '<$1$2 />')
    .replace(/style="([^"]*)"/g, (_, css) => {
      const styles = Object.fromEntries(css.split(';').filter(x => x.includes(':')).map(x => {
        const i = x.indexOf(':'); return [x.slice(0, i).trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase()), x.slice(i + 1).trim()];
      }));
      return `style={${JSON.stringify(styles)}}`;
    });
}
const shared = new Map();
let sharedCode = '';
for (const [name, id, file] of entries) {
  // Original mockups predate the confirmed JobKorea requirement (49968438).
  const html = fs.readFileSync(path.join(source, file), 'utf8')
    .replaceAll('<strong>경력무관</strong> · 신입 및 경력 지원 가능', '<strong>경력 2년 이상</strong>')
    .replaceAll('경력무관 · 신입 및 경력 지원 가능', '경력 2년 이상')
    .replaceAll('신입 · 경력 / 경력무관', '경력 2년 이상')
    .replaceAll('신입 · 경력', '경력 2년 이상')
    .replaceAll('경력무관', '경력 2년 이상');
  const css = html.match(/<style>([^]*?)<\/style>/)[1].replace(/@font-face\{[^}]*\}/g, '').replace(/url\('fonts\//g, "url('/fonts/").replace(/\bbody\s*\{/g, '&{').replace(/\bmain\s*\{/g, '&{');
  fs.writeFileSync(`src/pages/${name}.css`, `.recruitment.${id} {\n${css}\n}\n`);
  let body = html.match(/<body>([^]*?)<\/body>/)[1].replace(/<!--[^]*?-->/g, '').trim();
  body = body.replace(/^<main>/, '').replace(/<\/main>$/, '');
  if (id !== 'classic') {
    body = body.replace(/<section class="(pad work|pad fit|studio|pad apply|pad)">[^]*?<\/section>/g, section => {
      if (!shared.has(section)) { const component = `Section${shared.size + 1}`; shared.set(section, component); sharedCode += `export function ${component}() { return (${jsx(section)}); }\n\n`; }
      return `<${shared.get(section)} />`;
    });
  }
  const imports = [...new Set([...body.matchAll(/<(Section\d+) \/>/g)].map(x => x[1]))];
  fs.writeFileSync(`src/pages/${name}.jsx`, `import React from 'react';\nimport './${name}.css';\n${imports.length ? `import { ${imports.join(', ')} } from './Sections';` : ''}\nexport default function ${name}() { return (<main id="content" className="recruitment ${id}">${jsx(body)}</main>); }\n`);
}
fs.writeFileSync('src/pages/Sections.jsx', `import React from 'react';\n${sharedCode}`);

