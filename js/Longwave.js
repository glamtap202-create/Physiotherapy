document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    const mobileServicesBtn =
        document.getElementById("mobileServicesBtn");

    const mobileServices =
        document.getElementById("mobileServices");

    const serviceDropdownBtn =
        document.getElementById("serviceDropdownBtn");

    const serviceDropdown =
        document.querySelector(".nav-dropdown");

    const faqItems =
        document.querySelectorAll(".faq-item");


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", function () {

            const isOpen =
                mobileMenu.classList.toggle("show");

            menuToggle.classList.toggle(
                "active",
                isOpen
            );

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close menu"
                    : "Open menu"
            );

        });

    }


    /* =====================================================
       MOBILE SERVICES DROPDOWN
    ===================================================== */

    if (
        mobileServicesBtn &&
        mobileServices
    ) {

        mobileServicesBtn.addEventListener(
            "click",
            function () {

                const isOpen =
                    mobileServices.classList.toggle("show");

                mobileServicesBtn.classList.toggle(
                    "open",
                    isOpen
                );

                mobileServicesBtn.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

            }
        );

    }


    /* =====================================================
       DESKTOP SERVICES DROPDOWN
    ===================================================== */

    if (
        serviceDropdownBtn &&
        serviceDropdown
    ) {

        serviceDropdownBtn.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                const isOpen =
                    serviceDropdown.classList.toggle("open");

                serviceDropdownBtn.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

            }
        );

    }


    /* =====================================================
       CLOSE DESKTOP DROPDOWN WHEN CLICKING OUTSIDE
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (
                serviceDropdown &&
                !serviceDropdown.contains(event.target)
            ) {

                serviceDropdown.classList.remove("open");

                if (serviceDropdownBtn) {

                    serviceDropdownBtn.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }

        }
    );


    /* =====================================================
       MOBILE LINKS
       CLOSE MOBILE MENU AFTER CLICK
    ===================================================== */

    if (mobileMenu) {

        const mobileLinks =
            mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    closeMobileMenu();

                }
            );

        });

    }


    /* =====================================================
       FAQ ACCORDION
    ===================================================== */

    faqItems.forEach(function (item) {

        const question =
            item.querySelector(".faq-question");

        if (!question) {
            return;
        }


        question.addEventListener(
            "click",
            function () {

                const isCurrentlyOpen =
                    item.classList.contains("open");


                /* -----------------------------------------
                   CLOSE ALL FAQ ITEMS
                ----------------------------------------- */

                faqItems.forEach(
                    function (otherItem) {

                        otherItem.classList.remove("open");

                        const otherQuestion =
                            otherItem.querySelector(
                                ".faq-question"
                            );

                        if (otherQuestion) {

                            otherQuestion.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }

                    }
                );


                /* -----------------------------------------
                   OPEN SELECTED FAQ
                ----------------------------------------- */

                if (!isCurrentlyOpen) {

                    item.classList.add("open");

                    question.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                }

            }
        );

    });


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key !== "Escape") {
                return;
            }


            /* Close mobile menu */

            closeMobileMenu();


            /* Close mobile services */

            if (mobileServices) {

                mobileServices.classList.remove("show");

            }

            if (mobileServicesBtn) {

                mobileServicesBtn.classList.remove("open");

                mobileServicesBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }


            /* Close desktop services */

            if (serviceDropdown) {

                serviceDropdown.classList.remove("open");

            }

            if (serviceDropdownBtn) {

                serviceDropdownBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );


    /* =====================================================
       RESIZE RESET
    ===================================================== */

    window.addEventListener(
        "resize",
        function () {

            /*
             * When switching from mobile to desktop,
             * reset mobile menu state.
             */

            if (window.innerWidth > 800) {

                closeMobileMenu();

                if (mobileServices) {

                    mobileServices.classList.remove(
                        "show"
                    );

                }

                if (mobileServicesBtn) {

                    mobileServicesBtn.classList.remove(
                        "open"
                    );

                    mobileServicesBtn.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }

        }
    );


    /* =====================================================
       HELPER FUNCTION
       CLOSE MOBILE MENU
    ===================================================== */

    function closeMobileMenu() {

        if (mobileMenu) {

            mobileMenu.classList.remove("show");

        }  

        if (menuToggle) {

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open menu"
            );

        }

    }

});