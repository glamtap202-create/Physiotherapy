document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const mobileMenu =
        document.getElementById("mobileMenu");


    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener(
            "click",
            function () {

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

            }
        );

    }


    /* =====================================================
       MOBILE SERVICES DROPDOWN
    ===================================================== */

    const mobileServicesBtn =
        document.getElementById(
            "mobileServicesBtn"
        );

    const mobileServices =
        document.getElementById(
            "mobileServices"
        );


    if (
        mobileServicesBtn &&
        mobileServices
    ) {

        mobileServicesBtn.addEventListener(
            "click",
            function () {

                const isOpen =
                    mobileServices.classList.toggle(
                        "show"
                    );


                mobileServicesBtn.classList.toggle(
                    "open",
                    isOpen
                );

            }
        );

    }


    /* =====================================================
       DESKTOP SERVICES DROPDOWN
    ===================================================== */

    const serviceDropdownBtn =
        document.getElementById(
            "serviceDropdownBtn"
        );

    const serviceDropdown =
        document.querySelector(
            ".nav-dropdown"
        );


    if (
        serviceDropdownBtn &&
        serviceDropdown
    ) {

        serviceDropdownBtn.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();


                const isOpen =
                    serviceDropdown.classList.toggle(
                        "open"
                    );


                serviceDropdownBtn.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

            }
        );

    }


    /* =====================================================
       CLOSE DESKTOP DROPDOWN OUTSIDE
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (
                serviceDropdown &&
                !serviceDropdown.contains(event.target)
            ) {

                serviceDropdown.classList.remove(
                    "open"
                );


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
       MOBILE MENU LINKS
    ===================================================== */

    if (mobileMenu) {

        const mobileLinks =
            mobileMenu.querySelectorAll("a");


        mobileLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        mobileMenu.classList.remove(
                            "show"
                        );


                        if (menuToggle) {

                            menuToggle.classList.remove(
                                "active"
                            );


                            menuToggle.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }

                    }
                );

            }
        );

    }


    /* =====================================================
       FAQ ACCORDION
    ===================================================== */

    const faqItems =
        document.querySelectorAll(
            ".faq-item"
        );


    faqItems.forEach(
        function (item) {

            const question =
                item.querySelector(
                    ".faq-question"
                );


            if (!question) {
                return;
            }


            question.addEventListener(
                "click",
                function () {

                    const isCurrentlyOpen =
                        item.classList.contains(
                            "open"
                        );


                    /* Close all FAQ items */

                    faqItems.forEach(
                        function (otherItem) {

                            otherItem.classList.remove(
                                "open"
                            );


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


                    /* Open clicked FAQ */

                    if (!isCurrentlyOpen) {

                        item.classList.add(
                            "open"
                        );


                        question.setAttribute(
                            "aria-expanded",
                            "true"
                        );

                    }

                }
            );

        }
    );


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

            if (mobileMenu) {

                mobileMenu.classList.remove(
                    "show"
                );

            }


            if (menuToggle) {

                menuToggle.classList.remove(
                    "active"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }


            /* Close mobile services */

            if (mobileServices) {

                mobileServices.classList.remove(
                    "show"
                );

            }


            if (mobileServicesBtn) {

                mobileServicesBtn.classList.remove(
                    "open"
                );

            }


            /* Close desktop dropdown */

            if (serviceDropdown) {

                serviceDropdown.classList.remove(
                    "open"
                );

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

            if (window.innerWidth > 800) {

                if (mobileMenu) {

                    mobileMenu.classList.remove(
                        "show"
                    );

                }


                if (menuToggle) {

                    menuToggle.classList.remove(
                        "active"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }


                if (mobileServices) {

                    mobileServices.classList.remove(
                        "show"
                    );

                }


                if (mobileServicesBtn) {

                    mobileServicesBtn.classList.remove(
                        "open"
                    );

                }

            }

        }
    );


});