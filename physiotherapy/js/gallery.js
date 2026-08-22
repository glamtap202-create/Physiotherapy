document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileServicesBtn = document.getElementById('mobileServicesBtn');
  const mobileServices = document.getElementById('mobileServices');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('show');
      menuToggle.classList.toggle('active', isOpen);
      document.body.classList.toggle('menu-open', isOpen);
    });
  }

  if (mobileServicesBtn && mobileServices) {
    mobileServicesBtn.addEventListener('click', function () {
      mobileServices.classList.toggle('show');
    });
  }

  document.querySelectorAll('.mobile-menu a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('show');
      menuToggle.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });
});