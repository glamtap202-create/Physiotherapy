document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       DESKTOP SERVICES DROPDOWN
    ===================================================== */

    const serviceDropdownBtn =
        document.getElementById("serviceDropdownBtn");

    const serviceDropdown =
        document.querySelector(".nav-dropdown");


    if (serviceDropdownBtn && serviceDropdown) {

        serviceDropdownBtn.addEventListener("click", function (event) {

            event.stopPropagation();

            const isOpen =
                serviceDropdown.classList.toggle("open");

            serviceDropdownBtn.setAttribute(
                "aria-expanded",
                isOpen
            );

        });

    }


    /* =====================================================
       CLOSE DROPDOWN OUTSIDE
    ===================================================== */

    document.addEventListener("click", function (event) {

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


    if (
        mobileServicesBtn &&
        mobileServices
    ) {

        mobileServicesBtn.addEventListener(
            "click",
            function () {

                mobileServices.classList.toggle("open");

                const arrow =
                    mobileServicesBtn.querySelector(
                        ".mobile-arrow"
                    );

                if (arrow) {

                    arrow.textContent =
                        mobileServices.classList.contains("open")
                            ? "−"
                            : "+";

                }

            }
        );

    }


    /* =====================================================
       CLOSE MOBILE MENU AFTER LINK CLICK
    ===================================================== */

    if (mobileMenu) {

        const mobileLinks =
            mobileMenu.querySelectorAll(
                "a:not(.mobile-services-btn)"
            );

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

                        menuToggle.setAttribute(
                            "aria-label",
                            "Open menu"
                        );

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

                const faqItem =
                    question.closest(".faq-item");

                const answer =
                    faqItem.querySelector(".faq-answer");

                const isOpen =
                    faqItem.classList.contains("open");


                /* Close other FAQ items */

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

                            if (otherAnswer) {
                                otherAnswer.style.maxHeight =
                                    null;
                            }

                            if (otherQuestion) {
                                otherQuestion.setAttribute(
                                    "aria-expanded",
                                    "false"
                                );
                            }

                        }

                    });


                /* Toggle current */

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

                    answer.style.maxHeight = null;

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


    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        revealObserver.unobserve(
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

        element.style.opacity = "0";

        element.style.transform =
            "translateY(20px)";

        element.style.transition =
            "opacity .6s ease, transform .6s ease";

        revealObserver.observe(element);

    });


});