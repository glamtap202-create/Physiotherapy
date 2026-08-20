/* =====================================================
   PAIN MANAGEMENT PAGE JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       DESKTOP SERVICES DROPDOWN
    ================================================= */

    const serviceDropdownBtn =
        document.getElementById("serviceDropdownBtn");

    const navDropdown =
        document.querySelector(".nav-dropdown");


    if (serviceDropdownBtn && navDropdown) {

        serviceDropdownBtn.addEventListener("click", function (event) {

            event.stopPropagation();

            const isOpen =
                navDropdown.classList.toggle("open");

            serviceDropdownBtn.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        document.addEventListener("click", function (event) {

            if (!navDropdown.contains(event.target)) {

                navDropdown.classList.remove("open");

                serviceDropdownBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }


    /* =================================================
       MOBILE MENU
    ================================================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const mobileMenu =
        document.getElementById("mobileMenu");


    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", function () {

            const isOpen =
                mobileMenu.classList.toggle("show");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        /* Close menu after clicking normal link */

        const mobileLinks =
            mobileMenu.querySelectorAll(
                "a:not(.mobile-services-btn)"
            );

        mobileLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mobileMenu.classList.remove("show");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =================================================
       MOBILE SERVICES
    ================================================= */

    const mobileServicesBtn =
        document.getElementById("mobileServicesBtn");

    const mobileServices =
        document.getElementById("mobileServices");


    if (mobileServicesBtn && mobileServices) {

        mobileServicesBtn.addEventListener(
            "click",
            function () {

                mobileServices.classList.toggle("show");

                const arrow =
                    mobileServicesBtn.querySelector(
                        ".mobile-arrow"
                    );

                if (
                    arrow &&
                    mobileServices.classList.contains("show")
                ) {

                    arrow.textContent = "−";

                } else if (arrow) {

                    arrow.textContent = "+";

                }

            }
        );

    }


    /* =================================================
       FAQ ACCORDION
    ================================================= */

    const faqQuestions =
        document.querySelectorAll(".faq-question");


    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const currentItem =
                question.closest(".faq-item");

            const isOpen =
                currentItem.classList.contains("open");


            /* Close all other FAQs */

            document
                .querySelectorAll(".faq-item")
                .forEach(function (item) {

                    item.classList.remove("open");

                    const btn =
                        item.querySelector(".faq-question");

                    if (btn) {

                        btn.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                });


            /* Open clicked FAQ */

            if (!isOpen) {

                currentItem.classList.add("open");

                question.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        });

    });


    /* =================================================
       SMOOTH SCROLL
    ================================================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(function (link) {

            link.addEventListener("click", function (event) {

                const targetId =
                    link.getAttribute("href");

                if (
                    targetId &&
                    targetId !== "#"
                ) {

                    const target =
                        document.querySelector(targetId);

                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }

            });

        });


    /* =================================================
       CLOSE MOBILE MENU ON RESIZE
    ================================================= */

    window.addEventListener("resize", function () {

        if (
            window.innerWidth > 800 &&
            mobileMenu
        ) {

            mobileMenu.classList.remove("show");

            if (menuToggle) {

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    });

});