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

function externalAttrs(url) {
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

function renderLabs() {
  const list = document.querySelector('#lab-list');
  if (!list) return;
  list.innerHTML = config.labs.map((lab) => {
    const url = config.links[lab.link] || '';
    const action = url
      ? '<a href="' + url + '"' + externalAttrs(url) + '>实验说明</a>'
      : '<span class="inactive-link">链接待配置</span>';
    return '<article class="lab-item">' +
      '<p class="item-kicker">LAB ' + String(lab.id).padStart(2, '0') + ' / ' + lab.weeks + '</p>' +
      '<h3>' + lab.title + '</h3>' +
      '<p class="lab-subtitle">' + lab.subtitle + '</p>' +
      '<p>' + lab.description + '</p>' +
      '<p class="lab-skills">' + lab.skills + '</p>' +
      action +
    '</article>';
  }).join('');
}

function renderVideos() {
  const list = document.querySelector('#video-list');
  if (!list) return;
  list.innerHTML = config.videos.map((video) => {
    const slideUrl = config.links[video.slides] || '';
    const slide = slideUrl
      ? '<a href="' + slideUrl + '"' + externalAttrs(slideUrl) + '>' + video.slideLabel + '</a>'
      : '<span class="inactive-link">暂未提供</span>';
    const topics = video.topics.map((topic) => '<li>' + topic + '</li>').join('');
    return '<article class="lecture-row" role="row">' +
      '<div class="lecture-number" role="cell"><strong>' + video.id + '</strong><span>' + video.kind + '</span></div>' +
      '<div class="lecture-topic" role="cell"><h2>' + video.title + '</h2><ul>' + topics + '</ul></div>' +
      '<div class="lecture-slides" role="cell">' + slide + '</div>' +
      '<div class="lecture-recording" role="cell"><a href="' + video.url + '"' + externalAttrs(video.url) + ' aria-label="在 B 站观看：' + video.title + '">' +
        '<img src="' + video.thumbnail + '" alt="' + video.title + '视频封面" width="480" height="270" loading="lazy" />' +
        '<span class="video-play" aria-hidden="true"></span><span class="video-duration">' + video.duration + '</span>' +
      '</a></div>' +
    '</article>';
  }).join('');
}

function simpleItem(number, title, linkKey, action) {
  const url = config.links[linkKey] || '';
  if (!url) return '<span class="simple-item is-unavailable"><b>' + number + '</b><span>' + title + '</span><small>待提供</small></span>';
  return '<a class="simple-item" href="' + url + '"' + externalAttrs(url) + '><b>' + number + '</b><span>' + title + '</span><small>' + action + '</small></a>';
}

function renderLibraries() {
  const slides = document.querySelector('#slide-list');
  const books = document.querySelector('#book-chapter-list');
  if (slides) {
    const chapterSlides = config.chapters.map((chapter) => simpleItem(
      String(chapter.id).padStart(2, '0'), chapter.subtitle, 'ppt' + chapter.id, '下载'
    ));
    const supplementarySlides = (config.supplementarySlides || []).map((slide) => simpleItem(
      slide.id, slide.title, slide.link, '下载'
    ));
    slides.innerHTML = chapterSlides.concat(supplementarySlides).join('');
  }
  if (books) {
    books.innerHTML = config.books.map((book, index) => simpleItem(
      String(index + 1).padStart(2, '0'), book.title, book.link, '阅读'
    )).join('');
  }
}

function renderSharedFooter() {
  document.querySelectorAll('.site-footer').forEach((footer) => {
    footer.innerHTML = '<div class="wrap footer-inner"><p class="footer-copyright">湖南大学 · 云计算课程小组 2026 版权所有</p></div>';
  });
}

hydrateConfiguredLinks();
renderLabs();
renderVideos();
renderLibraries();
renderSharedFooter();
