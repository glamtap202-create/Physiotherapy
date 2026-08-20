document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       DESKTOP SERVICES DROPDOWN
    ===================================================== */

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

    }


    document.addEventListener("click", function (event) {

        if (
            navDropdown &&
            !navDropdown.contains(event.target)
        ) {

            navDropdown.classList.remove("open");

            if (serviceDropdownBtn) {

                serviceDropdownBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    });


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
                mobileMenu.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );


            const spans =
                menuToggle.querySelectorAll("span");


            if (isOpen) {

                spans[0].style.transform =
                    "translateY(7px) rotate(45deg)";

                spans[1].style.opacity = "0";

                spans[2].style.transform =
                    "translateY(-7px) rotate(-45deg)";

            } else {

                spans[0].style.transform = "";

                spans[1].style.opacity = "1";

                spans[2].style.transform = "";

            }

        });

    }


    /* =====================================================
       MOBILE SERVICES
    ===================================================== */

    const mobileServicesBtn =
        document.getElementById("mobileServicesBtn");

    const mobileServices =
        document.getElementById("mobileServices");


    if (
        mobileServicesBtn &&
        mobileServices
    ) {

        mobileServicesBtn.addEventListener(
            "click",
            function () {

                const isOpen =
                    mobileServices.classList.toggle("open");

                const arrow =
                    mobileServicesBtn.querySelector(
                        ".mobile-arrow"
                    );

                if (arrow) {

                    arrow.textContent =
                        isOpen ? "−" : "+";

                }

            }
        );

    }


    /* =====================================================
       CLOSE MOBILE MENU AFTER LINK CLICK
    ===================================================== */

    if (mobileMenu) {

        const mobileLinks =
            mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    mobileMenu.classList.remove("open");

                    if (menuToggle) {

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                        const spans =
                            menuToggle.querySelectorAll("span");

                        if (spans.length === 3) {

                            spans[0].style.transform = "";
                            spans[1].style.opacity = "1";
                            spans[2].style.transform = "";

                        }

                    }

                }
            );

        });

    }


    /* =====================================================
       FAQ ACCORDION
    ===================================================== */

    const faqQuestions =
        document.querySelectorAll(".faq-question");


    faqQuestions.forEach(function (question) {

        question.addEventListener(
            "click",
            function () {

                const currentAnswer =
                    question.nextElementSibling;

                const isCurrentlyOpen =
                    question.getAttribute(
                        "aria-expanded"
                    ) === "true";


                /* Close all FAQs */

                faqQuestions.forEach(function (item) {

                    item.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    const answer =
                        item.nextElementSibling;

                    if (answer) {
                        answer.style.maxHeight = null;
                    }

                });


                /* Open clicked FAQ */

                if (!isCurrentlyOpen) {

                    question.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                    if (currentAnswer) {

                        currentAnswer.style.maxHeight =
                            currentAnswer.scrollHeight + "px";

                    }

                }

            }
        );

    });


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    const exploreButton =
        document.querySelector(
            'a[href="#therapy"]'
        );


    if (exploreButton) {

        exploreButton.addEventListener(
            "click",
            function (event) {

                const target =
                    document.getElementById("therapy");

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }


    /* =====================================================
       RESIZE - CLOSE MOBILE MENU
    ===================================================== */

    window.addEventListener(
        "resize",
        function () {

            if (
                window.innerWidth > 1000 &&
                mobileMenu
            ) {

                mobileMenu.classList.remove("open");

                if (menuToggle) {

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }

        }
    );

});