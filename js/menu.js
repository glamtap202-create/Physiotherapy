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



// Dropdown click-to-open (Our Offerings, Patient Education, Work With Us)
document.querySelectorAll('.nav__dropdown > .nav__link--drop').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    var dropdown = this.closest('.nav__dropdown');
    var isOpen = dropdown.classList.contains('is-open');

    // close any other open dropdown
    document.querySelectorAll('.nav__dropdown.is-open').forEach(function (d) {
      d.classList.remove('is-open');
    });

    if (!isOpen) {
      dropdown.classList.add('is-open');
    }
  });
});

// click outside → close dropdown
document.addEventListener('click', function (e) {
  if (!e.target.closest('.nav__dropdown')) {
    document.querySelectorAll('.nav__dropdown.is-open').forEach(function (d) {
      d.classList.remove('is-open');
    });
  }
});





// """"""""""""""""""""""""""""""""""""""""
document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");
    const dropdown = document.querySelector(".nav__dropdown");
    const dropdownButton = document.querySelector(".nav__link--drop");

    /* =========================
       MOBILE MENU
    ========================= */

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            mainNav.classList.toggle("active");
            menuToggle.classList.toggle("active");

        });
    }


    /* =========================
       SERVICES DROPDOWN
    ========================= */

    if (dropdown && dropdownButton) {

        dropdownButton.addEventListener("click", function (event) {

            event.preventDefault();

            dropdown.classList.toggle("active");

        });
    }


    /* =========================
       CLOSE MENU AFTER CLICK
    ========================= */

    const navLinks = document.querySelectorAll(
        ".nav a:not(.nav__link--drop)"
    );

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (mainNav) {
                mainNav.classList.remove("active");
            }

            if (menuToggle) {
                menuToggle.classList.remove("active");
            }

            if (dropdown) {
                dropdown.classList.remove("active");
            }

        });

    });


    /* =========================
       ACTIVE NAV LINK
    ========================= */

    const currentPage = window.location.pathname.split("/").pop().toLowerCase();

    navLinks.forEach(function (link) {

        const linkPage = link
            .getAttribute("href")
            .split("/")
            .pop()
            .toLowerCase();

        if (linkPage === currentPage) {
            link.classList.add("is-active");
        }

    });

});
// """""""""""""""""""""""""""""