document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       DESKTOP SERVICES DROPDOWN
    ===================================================== */

    const serviceBtn = document.getElementById("serviceDropdownBtn");
    const serviceDropdown = document.querySelector(".nav-dropdown");

    if (serviceBtn && serviceDropdown) {

        serviceBtn.addEventListener("click", function (event) {

            event.stopPropagation();

            const isOpen =
                serviceDropdown.classList.toggle("open");

            serviceBtn.setAttribute(
                "aria-expanded",
                isOpen
            );

        });

    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

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

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );

        });

    }


    /* =====================================================
       MOBILE SERVICES
    ===================================================== */

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

                if (arrow) {

                    arrow.textContent =
                        mobileServices.classList.contains("show")
                            ? "−"
                            : "+";

                }

            }
        );

    }


    /* =====================================================
       CLOSE MOBILE MENU AFTER CLICK
    ===================================================== */

    const mobileLinks =
        document.querySelectorAll(
            ".mobile-menu a"
        );

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (mobileMenu) {
                mobileMenu.classList.remove("show");
            }

            if (menuToggle) {

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    });


    /* =====================================================
       FAQ ACCORDION
    ===================================================== */

    const faqQuestions =
        document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function (question) {

        question.addEventListener(
            "click",
            function () {

                const currentItem =
                    question.closest(".faq-item");

                const isOpen =
                    currentItem.classList.contains("open");


                /* Close all */

                document
                    .querySelectorAll(".faq-item")
                    .forEach(function (item) {

                        item.classList.remove("open");

                        const btn =
                            item.querySelector(
                                ".faq-question"
                            );

                        if (btn) {

                            btn.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }

                    });


                /* Open selected */

                if (!isOpen) {

                    currentItem.classList.add("open");

                    question.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                }

            }
        );

    });


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute("href");

                    if (
                        targetId &&
                        targetId !== "#"
                    ) {

                        const target =
                            document.querySelector(
                                targetId
                            );

                        if (target) {

                            event.preventDefault();

                            target.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });

                        }

                    }

                }
            );

        });


    /* =====================================================
       CLOSE DROPDOWN OUTSIDE
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (
                serviceDropdown &&
                !serviceDropdown.contains(event.target)
            ) {

                serviceDropdown.classList.remove("open");

                if (serviceBtn) {

                    serviceBtn.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }

        }
    );

});