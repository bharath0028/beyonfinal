let isBobbing = true;

window.handleGoBeyond = function() {
  document.body.classList.add('ready');

  // Lazy load heavy scripts after intro
  function loadHeavyScripts() {
    const s1 = document.createElement('script');
    s1.src = './js/three.js';
    document.body.appendChild(s1);

    const s2 = document.createElement('script');
    s2.src = './js/gsap.js';
    document.body.appendChild(s2);

    const s3 = document.createElement('script');
    s3.src = './js/main.app.js';
    document.body.appendChild(s3);
  }

  loadHeavyScripts();
};

function createOverlayElements() {
  const main = document.querySelector('main');
  if (!main || main.querySelector('.edge-text')) return;

  // LEFT EDGE
  const leftEdge = document.createElement('div');
  leftEdge.className = 'edge-text left-edge';
  leftEdge.innerHTML = '<span>FREEDOM LOOKS GOOD ON YOU</span>';
  main.appendChild(leftEdge);

  // RIGHT EDGE
  const rightEdge = document.createElement('div');
  rightEdge.className = 'edge-text right-edge';
  rightEdge.innerHTML = "<span>LAB GROWN DIAMONDS</span>";
  main.appendChild(rightEdge);

  // CTA
  const shopCta = document.createElement('div');
  shopCta.className = 'shop-beyon-cta';
  shopCta.innerHTML = '<a href="#shop" class="cursor-eye">SHOP BEYON</a>';
  main.appendChild(shopCta);

  // INSTAGRAM ICON
  const instaIcon = document.createElement('div');
  instaIcon.className = 'insta-icon';
  instaIcon.innerHTML = '<a href="https://instagram.com/beyon" target="_blank" rel="noopener noreferrer" class="cursor-eye"><img src="./images/insta-icon.png" alt="Instagram" /></a>';
  main.appendChild(instaIcon);

  // If the timeline is already at the 'end' page, hide these overlays
  function applyEndVisibility(month) {
    const isEnd = month === 'end' || (window.timeline && window.timeline.activeMonth === 'end');
    if (shopCta) shopCta.style.display = isEnd ? 'none' : '';
    if (instaIcon) instaIcon.style.display = isEnd ? 'none' : '';
  }

  // initial check
  try { applyEndVisibility(window.timeline && window.timeline.activeMonth); } catch (e) {}

  // react to timeline changes
  document.addEventListener('timeline:activeMonthChanged', (ev) => {
    try { applyEndVisibility(ev && ev.detail && ev.detail.activeMonth ? ev.detail.activeMonth : (window.timeline && window.timeline.activeMonth)); } catch (e) {}
  });

  // Hide bottom image initially
  const bottomEl = document.querySelector('.bottom-text');
  const loaderElInitial = document.querySelector('.loading');
  if (bottomEl && loaderElInitial) {
    bottomEl.style.display = 'none';
  }

  const observer = new MutationObserver(() => {
    const loader = document.querySelector('.loading');
    if (!loader || loader.style.display === 'none' || loader.style.visibility === 'hidden' || loader.style.opacity === '0') {
      const bottom = document.querySelector('.bottom-text');
      if (bottom) bottom.style.display = 'flex';
      observer.disconnect();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['style']
  });
}

function toggleBobbing() {
  isBobbing = !isBobbing;
  const icon = document.querySelector('.center-icon');
  if (icon) {
    icon.classList.toggle('bobbing', isBobbing);
  }
}

function onIconClick() {
  try {
    window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
  } catch (e) {
    window.scrollTo(0, window.scrollY + window.innerHeight);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  createOverlayElements();
  attachSwiperScrollHandler();
});

// When the user scrolls (wheel) over the cuts/swiper area, scroll the page
function attachSwiperScrollHandler() {
  const container = document.querySelector('.cuts-swiper') || document.querySelector('.swiper-wrapper');
  if (!container) return;

  let last = 0;
  const COOLDOWN = 650; // ms to prevent multiple triggers

  container.addEventListener('wheel', function (ev) {
    // Prevent default so the inner scroll doesn't hijack the gesture
    try { ev.preventDefault(); } catch (e) {}
    const now = Date.now();
    if (now - last < COOLDOWN) return;
    last = now;

    if (ev.deltaY > 0) {
      // scroll down -> go to next page
      try {
        window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
      } catch (e) {
        window.scrollTo(0, window.scrollY + window.innerHeight);
      }
    } else if (ev.deltaY < 0) {
      // scroll up -> go to previous page
      try {
        window.scrollBy({ top: -window.innerHeight, left: 0, behavior: 'smooth' });
      } catch (e) {
        window.scrollTo(0, window.scrollY - window.innerHeight);
      }
    }
  }, { passive: false });
}
