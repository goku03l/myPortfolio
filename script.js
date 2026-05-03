/* ─────────────────────────────────────────────────────────────
   script.js  — Portfolio engine
   Reads everything from config.js (PORTFOLIO object).
   Never needs editing — only config.js does.
───────────────────────────────────────────────────────────── */

// ── YouTube ID extractor ──────────────────────────────────────
function getYouTubeId(input) {
  if (!input) return null;
  // Already a bare ID (11 chars, no slash or dot)
  if (/^[a-zA-Z0-9_-]{11}$/.test(input.trim())) return input.trim();
  // Full URL patterns
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
  ];
  for (const p of patterns) {
    const m = input.match(p);
    if (m) return m[1];
  }
  return null;
}

// ── YouTube thumbnail URL ─────────────────────────────────────
function ytThumb(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

// ── Gradient placeholders for projects without images ─────────
const GRADIENTS = [
  'linear-gradient(135deg, #fde68a 0%, #f59e0b 50%, #d97706 100%)',
  'linear-gradient(135deg, #fcd9a0 0%, #e8874a 100%)',
  'linear-gradient(135deg, #fef3c7 0%, #d97706 100%)',
  'linear-gradient(135deg, #ecdcc0 0%, #b45309 100%)',
  'linear-gradient(135deg, #fde68a 0%, #92400e 100%)',
];

// ── YouTube embed cache (embeddable = true/false) ─────────────
const _ytEmbedCache = {};

// ── Check if a video is embeddable via noembed API ────────────
async function canEmbed(youtubeId) {
  if (_ytEmbedCache[youtubeId] !== undefined) return _ytEmbedCache[youtubeId];
  try {
    const res = await fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${youtubeId}`);
    const json = await res.json();
    // noembed returns an error field if the video can't be embedded
    const ok = !json.error && !!json.title;
    _ytEmbedCache[youtubeId] = ok;
    return ok;
  } catch (_) {
    // Network error — optimistically try embedding
    return true;
  }
}

// ── Open YouTube modal ─────────────────────────────────────────
async function openVideo(youtubeId, title) {
  const modal    = document.getElementById('video-modal');
  const iframe   = document.getElementById('modal-iframe');
  const mTitle   = document.getElementById('modal-title');
  const fallback = document.getElementById('modal-fallback');
  const loader   = document.getElementById('modal-loader');

  // Reset & open modal immediately so user sees feedback
  iframe.style.display   = 'none';
  fallback.style.display = 'none';
  loader.style.display   = 'flex';
  mTitle.textContent     = title || '';
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  const embeddable = await canEmbed(youtubeId);

  loader.style.display = 'none';

  if (embeddable) {
    iframe.src           = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;
    iframe.style.display = 'block';
  } else {
    showFallback(youtubeId, title);
  }
}

function showFallback(youtubeId, title) {
  const iframe   = document.getElementById('modal-iframe');
  const fallback = document.getElementById('modal-fallback');
  const fbLink   = document.getElementById('modal-fallback-link');
  const fbTitle  = document.getElementById('modal-fallback-title');
  iframe.style.display   = 'none';
  fallback.style.display = 'flex';
  fbTitle.textContent    = title ? `"${title}"` : 'This video';
  fbLink.href = `https://www.youtube.com/watch?v=${youtubeId}`;
}

function closeVideo() {
  const modal  = document.getElementById('video-modal');
  const iframe = document.getElementById('modal-iframe');
  modal.classList.remove('open');
  iframe.src = '';
  document.body.style.overflow = '';
}

// ── Render hero ───────────────────────────────────────────────
function renderHero() {
  document.getElementById('page-title').textContent      = PORTFOLIO.name + ' — Portfolio';
  document.getElementById('nav-name').textContent        = PORTFOLIO.name;
  document.getElementById('hero-profession').textContent = PORTFOLIO.profession;
  document.getElementById('hero-tagline').textContent    = PORTFOLIO.tagline;
  document.getElementById('footer-name').textContent     = '© ' + new Date().getFullYear() + ' ' + PORTFOLIO.name;

  // Bilingual name transition
  const nameEl = document.getElementById('hero-name');
  const nameA  = PORTFOLIO.name;
  const nameB  = PORTFOLIO.nameAlt || null;

  if (!nameB) {
    nameEl.textContent = nameA;
    return;
  }

  // Wrap in a fixed-height container so layout never shifts
  nameEl.style.position = 'relative';
  nameEl.innerHTML =
    '<span class="hero-name-layer" id="hero-name-a">' + nameA + '</span>' +
    '<span class="hero-name-layer" id="hero-name-b">' + nameB + '</span>';

  const HOLD = 3000;   // ms to hold each name before fading
  const FADE = 900;    // ms crossfade
  let showingA = true;

  // Use a wrapper so both layers occupy the same space
  // nameB sits invisible on top; we alternate which is visible
  function crossfade() {
    const layerA = document.getElementById('hero-name-a');
    const layerB = document.getElementById('hero-name-b');
    if (!layerA || !layerB) return;
    const fadeOut = showingA ? layerA : layerB;
    const fadeIn  = showingA ? layerB : layerA;
    fadeOut.style.opacity = '0';
    fadeIn.style.opacity  = '1';
    showingA = !showingA;
  }

  setInterval(crossfade, HOLD + FADE);
}

// ── Render about ──────────────────────────────────────────────
function renderAbout() {
  // Avatar
  const avatarEl = document.getElementById('about-avatar');
  if (PORTFOLIO.avatar) {
    avatarEl.innerHTML = `<img src="${PORTFOLIO.avatar}" alt="${PORTFOLIO.name}" />`;
  } else {
    const initials = PORTFOLIO.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    avatarEl.textContent = initials;
  }

  document.getElementById('about-bio').textContent = PORTFOLIO.bio;

  // Socials
  const socialsEl = document.getElementById('about-socials');
  const links = [
    { key: 'github',    label: 'GitHub',    icon: '⌥' },
    { key: 'linkedin',  label: 'LinkedIn',  icon: '◈' },
    { key: 'instagram', label: 'Instagram', icon: '◉' },
    { key: 'twitter',   label: 'Twitter',   icon: '◆' },
  ];
  links.forEach(({ key, label, icon }) => {
    const url = PORTFOLIO.contact[key];
    if (!url) return;
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'social-link';
    a.innerHTML = `<span>${icon}</span> ${label}`;
    socialsEl.appendChild(a);
  });
}

// ── Render projects ────────────────────────────────────────────
let currentSort   = 'featured';
let currentFilter = 'all';

function getAllTags() {
  const tags = new Set();
  PORTFOLIO.projects.forEach(p => (p.tags || []).forEach(t => tags.add(t)));
  return [...tags].sort();
}

function buildFilterButtons() {
  const row  = document.getElementById('filter-row');
  const tags = getAllTags();
  tags.forEach(tag => {
    const btn = document.createElement('button');
    btn.className    = 'filter-btn';
    btn.dataset.filter = tag;
    btn.textContent  = tag;
    btn.addEventListener('click', () => {
      currentFilter = tag;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects();
    });
    row.appendChild(btn);
  });

  // "All" button listener
  document.querySelector('.filter-btn[data-filter="all"]').addEventListener('click', function () {
    currentFilter = 'all';
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    renderProjects();
  });

  // Sort buttons
  document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      currentSort = this.dataset.sort;
      document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderProjects();
    });
  });
}

function getSortedFiltered() {
  let list = [...PORTFOLIO.projects];

  // Filter
  if (currentFilter !== 'all') {
    list = list.filter(p => (p.tags || []).includes(currentFilter));
  }

  // Sort
  if (currentSort === 'featured') {
    list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  } else if (currentSort === 'az') {
    list.sort((a, b) => a.title.localeCompare(b.title));
  } else if (currentSort === 'za') {
    list.sort((a, b) => b.title.localeCompare(a.title));
  }

  return list;
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = '';
  const projects = getSortedFiltered();

  if (projects.length === 0) {
    grid.innerHTML = `<p style="color:var(--ink-muted);font-style:italic;grid-column:1/-1;padding:2rem 0">No projects found for this filter.</p>`;
    return;
  }

  projects.forEach((p, i) => {
    const ytId = getYouTubeId(p.youtube);
    const isFeatured = p.featured && currentSort === 'featured' && currentFilter === 'all';

    // Thumbnail
    let thumbHTML;
    if (ytId) {
      thumbHTML = `
        <div class="project-thumb" role="button" aria-label="Play video: ${p.title}" tabindex="0"
             onclick="openVideo('${ytId}','${p.title.replace(/'/g,"\\'")}')">
          <img src="${ytThumb(ytId)}" alt="${p.title}" loading="lazy"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
          <div class="project-thumb-placeholder" style="display:none;background:${GRADIENTS[i % GRADIENTS.length]};position:absolute;inset:0;"></div>
          <div class="play-overlay"><div class="play-btn-circle">▶</div></div>
        </div>`;
    } else if (p.image) {
      thumbHTML = `
        <div class="project-thumb">
          <img src="${p.image}" alt="${p.title}" loading="lazy"/>
        </div>`;
    } else {
      thumbHTML = `
        <div class="project-thumb" style="background:${GRADIENTS[i % GRADIENTS.length]};"></div>`;
    }

    // Badges
    const featuredBadge = isFeatured ? `<span class="badge-featured">★ Featured</span>` : '';
    const tagBadges = (p.tags || []).map(t => `<span class="badge-tag">${t}</span>`).join('');

    // Action buttons
    let actions = '';
    if (ytId) actions += `<button class="project-btn" onclick="openVideo('${ytId}','${p.title.replace(/'/g,"\\'")}')">▶ Watch</button>`;
    if (p.link) actions += `<a href="${p.link}" target="_blank" rel="noopener" class="project-btn primary">View Project ↗</a>`;

    const card = document.createElement('div');
    card.className = 'project-card reveal' + (isFeatured ? ' featured-card' : '');
    card.innerHTML = `
      ${thumbHTML}
      <div class="project-body">
        <div class="project-badges">${featuredBadge}${tagBadges}</div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        ${actions ? `<div class="project-actions">${actions}</div>` : ''}
      </div>`;
    grid.appendChild(card);
  });

  observeReveal();
}

// ── Render skills ──────────────────────────────────────────────
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  (PORTFOLIO.skills || []).forEach(group => {
    const el = document.createElement('div');
    el.className = 'skill-group reveal';
    el.innerHTML = `
      <div class="skill-group-title">${group.category}</div>
      <div class="skill-tags">${group.items.map(s => `<span class="skill-tag">${s}</span>`).join('')}</div>`;
    grid.appendChild(el);
  });
}

// ── Render videos ──────────────────────────────────────────────
function renderVideos() {
  const grid = document.getElementById('videos-grid');
  (PORTFOLIO.videos || []).forEach(v => {
    const ytId = getYouTubeId(v.youtube);
    if (!ytId) return;
    const card = document.createElement('div');
    card.className = 'video-card reveal';
    card.innerHTML = `
      <div class="video-thumb">
        <img src="${ytThumb(ytId)}" alt="${v.title}" loading="lazy"/>
        <div class="video-play-overlay"><div class="video-play-circle">▶</div></div>
      </div>
      <div class="video-body">
        <div class="video-title">${v.title}</div>
        <p class="video-desc">${v.description}</p>
      </div>`;
    card.addEventListener('click', () => openVideo(ytId, v.title));
    grid.appendChild(card);
  });
}

// ── Render blog ────────────────────────────────────────────────
function renderBlog() {
  const grid = document.getElementById('blog-grid');
  (PORTFOLIO.blogs || []).forEach(post => {
    const tagHTML = (post.tags || []).map(t => `<span class="blog-tag">${t}</span>`).join('');
    const card = document.createElement('a');
    card.className = 'blog-card reveal';
    card.href   = post.link || '#';
    card.target = '_blank';
    card.rel    = 'noopener noreferrer';
    card.innerHTML = `
      <div class="blog-meta">
        <span class="blog-date">${post.date}</span>
        ${tagHTML}
      </div>
      <div class="blog-title">${post.title}</div>
      <p class="blog-excerpt">${post.excerpt}</p>
      <span class="blog-read">Read more →</span>`;
    grid.appendChild(card);
  });
}

// ── Render contact ─────────────────────────────────────────────
function renderContact() {
  const emailEl = document.getElementById('contact-email');
  emailEl.href          = 'mailto:' + PORTFOLIO.contact.email;
  emailEl.textContent   = PORTFOLIO.contact.email;

  const socialsEl = document.getElementById('contact-socials');
  const links = [
    { key: 'github',    label: 'GitHub' },
    { key: 'linkedin',  label: 'LinkedIn' },
    { key: 'instagram', label: 'Instagram' },
    { key: 'twitter',   label: 'Twitter' },
  ];
  links.forEach(({ key, label }) => {
    const url = PORTFOLIO.contact[key];
    if (!url) return;
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'contact-social-link';
    a.textContent = label;
    socialsEl.appendChild(a);
  });
}

// ── Scroll reveal ──────────────────────────────────────────────
function observeReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => io.observe(el));
}

// ── Navbar scroll style ────────────────────────────────────────
function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// ── Mobile hamburger ───────────────────────────────────────────
function initHamburger() {
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  btn.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => menu.classList.remove('open'));
  });
}

// ── Modal close listeners ──────────────────────────────────────
function initModal() {
  document.getElementById('modal-close').addEventListener('click', closeVideo);
  document.getElementById('video-modal').addEventListener('click', function (e) {
    if (e.target === this) closeVideo();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeVideo();
  });
}

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderAbout();
  buildFilterButtons();
  renderProjects();
  renderSkills();
  renderVideos();
  renderBlog();
  renderContact();
  observeReveal();
  initNavbar();
  initHamburger();
  initModal();
});