const config = window.COURSE_CONFIG;
const menuButton = document.querySelector('.menu-button');
const siteNav = document.querySelector('.site-nav');

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

function linkAttrs(url) {
  return url.startsWith('http') ? ' target="_blank" rel="noreferrer"' : '';
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

function resourceLink(resource) {
  const url = config.links[resource.link] || '';
  const type = resource.label.includes('课件') ? 'SLIDES' : resource.label.includes('视频') ? 'VIDEO' : resource.label.includes('书') ? 'BOOK' : 'RESOURCE';
  if (!url) return `<span class="module-resource unavailable"><small>${type}</small>${resource.label}<b>待上线</b></span>`;
  return `<a class="module-resource" href="${url}"${linkAttrs(url)}><small>${type}</small>${resource.label}<b>↗</b></a>`;
}

function renderCurriculum() {
  const moduleList = document.querySelector('#module-list');
  if (!moduleList || !config) return;

  let startWeek = 1;
  moduleList.innerHTML = config.chapters.map((chapter, index) => {
    const firstWeek = startWeek;
    const lastWeek = startWeek + chapter.weeks - 1;
    startWeek += chapter.weeks;
    const resources = chapter.resources.map(resourceLink).join('');
    return `<article class="module ${index === 0 ? 'is-open' : ''}">
      <button class="module-toggle" type="button" aria-expanded="${index === 0}" aria-controls="module-panel-${chapter.id}">
        <span class="module-number">${String(chapter.id).padStart(2, '0')}</span>
        <span class="module-title"><small>第 ${firstWeek}–${lastWeek} 周</small><strong>${chapter.title}</strong><em>${chapter.subtitle}</em></span>
        <span class="module-action"><i></i></span>
      </button>
      <div id="module-panel-${chapter.id}" class="module-panel">
        <div class="module-description"><p>${chapter.description}</p><div>${chapter.outcomes.map((outcome) => `<span>✓ ${outcome}</span>`).join('')}</div></div>
        <div class="module-resources">${resources}</div>
      </div>
    </article>`;
  }).join('');

  moduleList.querySelectorAll('.module-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const module = button.closest('.module');
      const isOpen = module.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(isOpen));
    });
  });
}

function fileItem(number, title, linkKey, action) {
  const url = config.links[linkKey] || '';
  if (!url) return `<span class="file-item unavailable"><small>${number}</small><strong>${title}</strong><b>待上线</b></span>`;
  return `<a class="file-item" href="${url}"${linkAttrs(url)}><small>${number}</small><strong>${title}</strong><b>${action} ↗</b></a>`;
}

function renderLibraries() {
  const slideList = document.querySelector('#slide-list');
  const bookList = document.querySelector('#book-chapter-list');

  if (slideList) {
    slideList.innerHTML = config.chapters.map((chapter) => fileItem(
      String(chapter.id).padStart(2, '0'), chapter.subtitle, `ppt${chapter.id}`, '下载 PPT'
    )).join('');
  }

  if (bookList) {
    bookList.innerHTML = config.books.map((book, index) => fileItem(
      String(index + 1).padStart(2, '0'), book.title, book.link, '阅读章节'
    )).join('');
  }
}

hydrateConfiguredLinks();
renderCurriculum();
renderLibraries();
