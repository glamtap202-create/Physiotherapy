// Adds a subtle shadow to the nav once the page scrolls past the hero top
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('siteNav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});