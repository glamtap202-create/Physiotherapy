// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// ===== Mobile dropdown toggle (tap to expand submenus) =====
const dropdowns = document.querySelectorAll('.nav__dropdown');

dropdowns.forEach((dropdown) => {
  const trigger = dropdown.querySelector('.nav__link--drop');
  trigger.addEventListener('click', () => {
    // Only intercept tap-to-toggle behaviour on smaller screens
    if (window.innerWidth <= 860) {
      dropdown.classList.toggle('is-open');
    }
  });
});

// Close mobile nav when a link is clicked
document.querySelectorAll('.nav__link:not(.nav__link--drop)').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Reset dropdown/menu state on resize back to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 860) {
    mainNav.classList.remove('is-open');
    dropdowns.forEach((d) => d.classList.remove('is-open'));
    navToggle.setAttribute('aria-expanded', 'false');
  }
});