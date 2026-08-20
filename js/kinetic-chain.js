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

            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close menu"
                    : "Open menu"
            );

            menuToggle.classList.toggle(
                "active",
                isOpen
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

    const mobileArrow =
        document.getElementById("mobileArrow");


    if (
        mobileServicesBtn &&
        mobileServices &&
        mobileArrow
    ) {

        mobileServicesBtn.addEventListener(
            "click",
            function () {

                const isOpen =
                    mobileServices.classList.toggle("open");

                mobileArrow.textContent =
                    isOpen ? "−" : "+";

            }
        );

    }



    /* =====================================================
       CLOSE MOBILE MENU AFTER LINK CLICK
    ===================================================== */

    const mobileLinks =
        document.querySelectorAll(
            ".mobile-menu a"
        );


    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (mobileMenu) {

                mobileMenu.classList.remove("open");

            }

            if (menuToggle) {

                menuToggle.classList.remove("active");

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
        document.querySelectorAll(
            ".faq-question"
        );


    faqQuestions.forEach(function (question) {

        question.addEventListener(
            "click",
            function () {

                const faqItem =
                    question.closest(".faq-item");

                const answer =
                    faqItem.querySelector(".faq-answer");

                const isOpen =
                    faqItem.classList.contains("open");


                /* Close other FAQs */

                document
                    .querySelectorAll(".faq-item.open")
                    .forEach(function (item) {

                        if (item !== faqItem) {

                            item.classList.remove("open");

                            const otherAnswer =
                                item.querySelector(
                                    ".faq-answer"
                                );

                            const otherQuestion =
                                item.querySelector(
                                    ".faq-question"
                                );

                            otherAnswer.style.maxHeight =
                                null;

                            otherQuestion.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }

                    });


                /* Toggle current FAQ */

                if (!isOpen) {

                    faqItem.classList.add("open");

                    answer.style.maxHeight =
                        answer.scrollHeight + "px";

                    question.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                } else {

                    faqItem.classList.remove("open");

                    answer.style.maxHeight =
                        null;

                    question.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );

    });



    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".info-card, .technique-card, .benefit-item, .process-card"
        );


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        observer.observe(element);

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

                event.preventDefault();

                const target =
                    document.getElementById(
                        "therapy"
                    );

                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }

});