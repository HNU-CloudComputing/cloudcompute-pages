const menuButton = document.querySelector('.menu-button');
const siteNav = document.querySelector('.site-nav');
const config = window.COURSE_CONFIG;

menuButton?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '关闭' : '菜单';
});

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    if (menuButton) menuButton.textContent = '菜单';
  });
});

function resourceButton(resource) {
  const url = config.links[resource.link] || '';
  if (!url) return `<span class="detail-resource unavailable">${resource.label} · 暂未提供</span>`;
  const external = url.startsWith('http') ? ' target="_blank" rel="noreferrer"' : '';
  return `<a class="detail-resource" href="${url}"${external}>${resource.label} <span>↗</span></a>`;
}

function hydrateConfiguredLinks() {
  document.querySelectorAll('[data-link]').forEach((element) => {
    const url = config.links[element.dataset.link] || '';
    if (!url) {
      element.classList.add('is-unavailable');
      element.setAttribute('aria-disabled', 'true');
      element.removeAttribute('href');
      return;
    }
    element.href = url;
    if (url.startsWith('http')) {
      element.target = '_blank';
      element.rel = 'noreferrer';
    }
  });
}

function configuredListItem(number, title, linkKey, action) {
  const url = config.links[linkKey] || '';
  if (!url) return `<span class="configured-list-item is-unavailable"><span>${number}</span>${title}<b>暂未提供</b></span>`;
  const external = url.startsWith('http') ? ' target="_blank" rel="noreferrer"' : '';
  return `<a href="${url}"${external}><span>${number}</span>${title}<b>${action} ↗</b></a>`;
}

function renderResourceLists() {
  const slideList = document.querySelector('#slides');
  const bookList = document.querySelector('#book-chapter-list');
  if (slideList) {
    slideList.innerHTML = config.chapters.slice(0, 6).map((chapter) => configuredListItem(
      String(chapter.id).padStart(2, '0'), chapter.subtitle, `ppt${chapter.id}`, '下载 PPT'
    )).join('');
  }
  if (bookList) {
    bookList.innerHTML = config.books.map((book, index) => configuredListItem(
      `第 ${index + 1} 章`, book.title, book.link, '阅读'
    )).join('');
  }
}

function renderJourney() {
  if (!config) return;
  const track = document.querySelector('#chapter-track');
  const detail = document.querySelector('#chapter-detail');
  const weekBar = document.querySelector('#week-bar');
  let startWeek = 1;
  track.innerHTML = config.chapters.map((chapter) => {
    const chapterStart = startWeek;
    startWeek += chapter.weeks;
    return `<button class="chapter ${chapter.id === 1 ? 'active' : ''}" type="button" data-chapter="${chapter.id}" aria-pressed="${chapter.id === 1}">
      <span class="chapter-number">${String(chapter.id).padStart(2, '0')}</span>${chapter.id === 1 ? '<span class="chapter-status">当前章节</span>' : ''}
      <strong>${chapter.title}</strong><span class="chapter-subtitle">${chapter.subtitle}</span><small>第 ${chapterStart}–${chapterStart + chapter.weeks - 1} 周 · ${chapter.weeks} 周</small>
    </button>`;
  }).join('');

  let currentWeek = 1;
  weekBar.innerHTML = config.chapters.map((chapter) => {
    const cells = Array.from({ length: chapter.weeks }, (_, index) => `<span title="第 ${currentWeek + index} 周：${chapter.title}">${currentWeek + index}</span>`).join('');
    currentWeek += chapter.weeks;
    return `<button class="week-group week-${chapter.id}" type="button" data-chapter="${chapter.id}" style="--duration:${chapter.weeks}">${cells}<b>${chapter.title}</b></button>`;
  }).join('');

  function activate(chapterId) {
    const chapter = config.chapters.find((item) => item.id === chapterId);
    let firstWeek = 1;
    for (const item of config.chapters) { if (item.id === chapterId) break; firstWeek += item.weeks; }
    const lastWeek = firstWeek + chapter.weeks - 1;
    track.querySelectorAll('.chapter').forEach((item) => { const active = Number(item.dataset.chapter) === chapterId; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
    weekBar.querySelectorAll('.week-group').forEach((item) => item.classList.toggle('active', Number(item.dataset.chapter) === chapterId));
    detail.innerHTML = `<div class="detail-meta"><span>CHAPTER ${String(chapter.id).padStart(2, '0')}</span><span>第 ${firstWeek}–${lastWeek} 周 · 共 ${chapter.weeks} 周</span></div><div class="detail-main"><div><h3>${chapter.title}</h3><p class="detail-subtitle">${chapter.subtitle}</p><p>${chapter.description}</p></div><div class="detail-outcomes"><b>本章收获</b>${chapter.outcomes.map((outcome) => `<span>✓ ${outcome}</span>`).join('')}</div></div><div class="detail-resources">${chapter.resources.map(resourceButton).join('')}</div>`;
    detail.classList.remove('is-visible');
    requestAnimationFrame(() => detail.classList.add('is-visible'));
  }

  track.querySelectorAll('.chapter').forEach((button) => button.addEventListener('click', () => activate(Number(button.dataset.chapter))));
  weekBar.querySelectorAll('.week-group').forEach((group) => group.addEventListener('click', () => activate(Number(group.dataset.chapter))));
  activate(1);
}

hydrateConfiguredLinks();
renderResourceLists();
renderJourney();
