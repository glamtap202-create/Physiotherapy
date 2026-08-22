document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       DESKTOP SERVICE DROPDOWN
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
       CLOSE MOBILE MENU
    ===================================================== */

    const mobileLinks =
        document.querySelectorAll(
            ".mobile-menu a"
        );


    mobileLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                if (mobileMenu) {
                    mobileMenu.classList.remove("open");
                }

                if (menuToggle) {
                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }

            }
        );

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
                    faqItem.querySelector(
                        ".faq-answer"
                    );

                const isOpen =
                    faqItem.classList.contains("open");


                /* Close all other FAQs */

                document
                    .querySelectorAll(".faq-item")
                    .forEach(function (item) {

                        if (item !== faqItem) {

                            item.classList.remove("open");

                            const otherAnswer =
                                item.querySelector(
                                    ".faq-answer"
                                );

                            const otherButton =
                                item.querySelector(
                                    ".faq-question"
                                );

                            if (otherAnswer) {
                                otherAnswer.style.maxHeight = null;
                            }

                            if (otherButton) {
                                otherButton.setAttribute(
                                    "aria-expanded",
                                    "false"
                                );
                            }

                        }

                    });


                /* Toggle selected FAQ */

                if (!isOpen) {

                    faqItem.classList.add("open");

                    question.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                    answer.style.maxHeight =
                        answer.scrollHeight + "px";

                } else {

                    faqItem.classList.remove("open");

                    question.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    answer.style.maxHeight = null;

                }

            }
        );

    });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".info-card, .area-card, .benefit-item, .process-card, .safety-card"
        );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

    });


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

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

        observer.observe(element);

    });


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(function (anchor) {

            anchor.addEventListener(
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
       CLOSE DESKTOP DROPDOWN OUTSIDE
    ===================================================== */

    document.addEventListener(
        "click",
        function () {

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

});