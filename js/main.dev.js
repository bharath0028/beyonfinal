let isBobbing = true;

window.handleGoBeyond = function() {
  document.body.classList.add('ready');
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

// Android fallback: some Android browsers block autoplay or video loading
// which can leave the loading overlay visible and prevent interaction.
// If loading doesn't clear within a short timeout, force the page ready state.
(function androidLoadingFallback() {
  function isAndroid() {
    return /Android/i.test(navigator.userAgent || '');
  }

  if (!isAndroid()) return;

  // Wait a bit for normal loading flow, then fallback
  setTimeout(function() {
    try {
      var loader = document.querySelector('.loading');
      if (!loader) return;
      // If loading overlay is still present and body isn't ready, trigger ready
      var isHidden = loader.style.display === 'none' || loader.style.visibility === 'hidden' || loader.style.opacity === '0';
      if (!document.body.classList.contains('ready') && !isHidden) {
        try { window.handleGoBeyond && window.handleGoBeyond(); } catch (e) {}
        // also hide loader element as a fallback
        try { loader.style.display = 'none'; loader.style.visibility = 'hidden'; loader.style.opacity = '0'; } catch (e) {}
      }
    } catch (e) {}
  }, 1800);
})();

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
