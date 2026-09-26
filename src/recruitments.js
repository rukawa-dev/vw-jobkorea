// Every recruitment exports to its own ID folder. Legacy root PNGs are retained untouched.
export function defineRecruitments(entries) {
  const ids = new Set(), routes = new Set(), files = new Set();
  const claim = (set, value, kind) => {
    if (set.has(value)) throw new Error(`Duplicate ${kind}: ${value}`);
    set.add(value);
  };
  const segment = value => {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) throw new Error(`Invalid ID: ${value}`);
    return value;
  };
  return entries.map(entry => {
    claim(ids, segment(entry.id), 'recruitment');
    const route = `recruitments/${entry.id}`;
    const aliases = entry.aliases || [];
    [route, ...aliases].forEach(value => claim(routes, value, 'route'));
    const designIds = new Set();
    const designs = entry.designs.map(design => {
      claim(designIds, segment(design.id), 'design');
      const designRoute = `${route}/${design.id}`;
      const designAliases = design.aliases || [];
      [designRoute, ...designAliases].forEach(value => claim(routes, value, 'route'));
      const prefix = `downloads/${entry.id}/${design.id}`;
      const imagePath = design.imagePath || `${prefix}-3x.png`;
      const previewPath = design.previewPath || `${prefix}-preview.png`;
      for (const file of [imagePath, previewPath]) {
        if (!/^downloads\/[a-zA-Z0-9/_-]+\.png$/.test(file)) throw new Error(`Invalid image path: ${file}`);
        claim(files, file, 'image');
      }
      return { ...design, route: designRoute, aliases: designAliases, imagePath, previewPath,
        storageKey: `${entry.id}/${design.id}`, jobTitle: entry.title };
    });
    return { ...entry, route, aliases, href: `#/${route}`, designs };
  });
}

export const recruitments = defineRecruitments([
  {
    // Hypothetical new round requested on September 26; content matches September 10.
    id: '2026-09-26-designer', registeredAt: '2026-09-26', title: '디지털 디자이너',
    category: 'DESIGN', experience: '경력 2년 이상', employment: '정규직', location: '서울 마포',
    deadline: '2026-10-16', closeWhenFilled: false,
    referenceSource: 'https://www.jobkorea.co.kr/Recruit/GI_Read/49968438',
    designs: [
      { id: 'editorial', letter: 'A', name: '에디토리얼', english: 'EDITORIAL', style: 'editorial',
        title: '여백으로 전하는 자신감', description: '흰 바탕, 절제된 선, 차분한 타이포그래피. 좋은 디자인에 대한 우리의 생각을 담았습니다.',
        component: '2026-09-26-designer/Editorial' },
      { id: 'poster', letter: 'B', name: '타이포 포스터', english: 'TYPO POSTER', style: 'poster',
        title: '첫눈에 남는 강한 인상', description: '대담한 타이포그래피와 선명한 대비. 다음 화면과 다음 경험을 만들어갈 당신에게.',
        component: '2026-09-26-designer/Poster' },
    ],
  },

  {
    id: '2026-09-10-designer', registeredAt: '2026-09-10', title: '디지털 디자이너',
    category: 'DESIGN', experience: '경력 2년 이상', employment: '정규직', location: '서울 마포',
    deadline: '2026-10-16', closeWhenFilled: false,
    source: 'https://www.jobkorea.co.kr/Recruit/GI_Read/49968438', aliases: ['designer'],
    designs: [
      { id: 'editorial', letter: 'A', name: '에디토리얼', english: 'EDITORIAL', style: 'editorial',
        title: '여백으로 전하는 자신감', description: '흰 바탕, 절제된 선, 차분한 타이포그래피. 좋은 디자인에 대한 우리의 생각을 담았습니다.',
        component: 'Editorial', aliases: ['editorial'] },
      { id: 'poster', letter: 'B', name: '타이포 포스터', english: 'TYPO POSTER', style: 'poster',
        title: '첫눈에 남는 강한 인상', description: '대담한 타이포그래피와 선명한 대비. 다음 화면과 다음 경험을 만들어갈 당신에게.',
        component: 'Poster', aliases: ['poster'] },
    ],
  },
  {
    id: '2026-09-10-planner', registeredAt: '2026-09-10', title: '디지털 기획자 · PM',
    category: 'PLANNING', experience: '경력 2년 이상', employment: '정규직', location: '서울 마포',
    deadline: '2026-10-16', closeWhenFilled: true,
    source: 'https://www.jobkorea.co.kr/Recruit/GI_Read/49968242', aliases: ['planner'],
    designs: [
      { id: 'editorial', letter: 'A', name: '에디토리얼', english: 'EDITORIAL', style: 'editorial',
        title: '좋은 질문에서 시작하는 기획', description: '요구사항에서 실행까지. 문제를 명확하게 정의하는 기획자를 위한 에디토리얼.',
        component: 'PlannerEditorial', aliases: ['planner/editorial'] },
      { id: 'poster', letter: 'B', name: '타이포 포스터', english: 'TYPO POSTER', style: 'poster',
        title: '다음의 방향을 제시하는 사람', description: '선명한 생각과 대담한 타이포그래피. 프로젝트의 다음을 이끌 PM을 찾습니다.',
        component: 'PlannerPoster', aliases: ['planner/poster'] },
    ],
  },
]);

export function resolveRoute(route, entries = recruitments) {
  for (const recruitment of entries) {
    if (recruitment.route === route || recruitment.aliases.includes(route)) return { recruitment };
    const design = recruitment.designs.find(item => item.route === route || item.aliases.includes(route));
    if (design) return { recruitment, design };
  }
  return {};
}
export const exportDesigns = recruitments.flatMap(recruitment => recruitment.designs);
