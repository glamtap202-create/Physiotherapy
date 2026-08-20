/* =========================================================
   RESPONSIVE NAVBAR
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");
    const servicesButton = document.getElementById("servicesButton");
    const servicesDropdown = document.querySelector(".nav-dropdown");


    /* =====================================================
       MOBILE MENU TOGGLE
    ===================================================== */

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            const isOpen = mainNav.classList.toggle("is-open");

            menuToggle.classList.toggle("active", isOpen);

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );

            document.body.classList.toggle(
                "menu-open",
                isOpen
            );
        });
    }


    /* =====================================================
       SERVICES DROPDOWN
    ===================================================== */

    if (servicesButton && servicesDropdown) {

        servicesButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                const isOpen =
                    servicesDropdown.classList.toggle("is-open");

                servicesButton.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );
            }
        );
    }


    /* =====================================================
       CLOSE DROPDOWN OUTSIDE CLICK
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (
                servicesDropdown &&
                !servicesDropdown.contains(event.target)
            ) {

                servicesDropdown.classList.remove("is-open");

                if (servicesButton) {
                    servicesButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }
            }
        }
    );


    /* =====================================================
       CLOSE MOBILE MENU AFTER LINK CLICK
    ===================================================== */

    const normalNavLinks =
        document.querySelectorAll(
            ".nav > a.nav-link, " +
            ".nav-dropdown-menu a, " +
            ".mobile-appointment"
        );


    normalNavLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                closeMobileMenu();
            }
        );
    });


    /* =====================================================
       CLOSE MENU FUNCTION
    ===================================================== */

    function closeMobileMenu() {

        if (mainNav) {
            mainNav.classList.remove("is-open");
        }

        if (menuToggle) {

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        }

        if (servicesDropdown) {
            servicesDropdown.classList.remove("is-open");
        }

        if (servicesButton) {
            servicesButton.setAttribute(
                "aria-expanded",
                "false"
            );
        }

        document.body.classList.remove("menu-open");
    }


    /* =====================================================
       CLOSE ON RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 860) {
                closeMobileMenu();
            }
        }
    );


    /* =====================================================
       ACTIVE PAGE
    ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .split("?")[0]
            .split("#")[0]
            .toLowerCase();


    const navPageLinks =
        document.querySelectorAll(
            ".nav > a.nav-link"
        );


    navPageLinks.forEach(function (link) {

        const href = link.getAttribute("href");

        if (!href) return;


        const linkPage =
            href
                .split("/")
                .pop()
                .split("?")[0]
                .split("#")[0]
                .toLowerCase();


        link.classList.remove("is-active");


        if (
            linkPage === currentPage ||
            (
                currentPage === "" &&
                linkPage === "home.html"
            )
        ) {

            link.classList.add("is-active");
        }
    });

});