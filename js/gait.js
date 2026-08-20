document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       DESKTOP SERVICES DROPDOWN
    ===================================================== */

    const serviceButton = document.getElementById("serviceDropdownBtn");
    const serviceDropdown = document.querySelector(".nav-dropdown");

    if (serviceButton && serviceDropdown) {

        serviceButton.addEventListener("click", function (event) {

            event.stopPropagation();

            const isOpen =
                serviceDropdown.classList.toggle("show");

            serviceButton.setAttribute(
                "aria-expanded",
                isOpen
            );

        });

    }


    /* =====================================================
       CLOSE DESKTOP DROPDOWN
    ===================================================== */

    document.addEventListener("click", function (event) {

        if (
            serviceDropdown &&
            !serviceDropdown.contains(event.target)
        ) {

            serviceDropdown.classList.remove("show");

            if (serviceButton) {
                serviceButton.setAttribute(
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
                mobileMenu.classList.toggle("show");

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


    if (mobileServicesBtn && mobileServices) {

        mobileServicesBtn.addEventListener(
            "click",
            function () {

                const isOpen =
                    mobileServices.classList.toggle("show");

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

                    mobileMenu.classList.remove("show");

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

                const currentItem =
                    question.closest(".faq-item");

                const currentAnswer =
                    currentItem.querySelector(".faq-answer");

                const isOpen =
                    currentItem.classList.contains("open");


                /* Close all other FAQ */

                document
                    .querySelectorAll(".faq-item")
                    .forEach(function (item) {

                        item.classList.remove("open");

                        const answer =
                            item.querySelector(".faq-answer");

                        const button =
                            item.querySelector(".faq-question");

                        if (answer) {
                            answer.style.maxHeight = null;
                        }

                        if (button) {
                            button.setAttribute(
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

                    currentAnswer.style.maxHeight =
                        currentAnswer.scrollHeight + "px";

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
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
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

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        revealObserver.observe(element);

    });


    /* =====================================================
       REVEAL STYLE
    ===================================================== */

    const revealStyle =
        document.createElement("style");

    revealStyle.textContent = `
        .info-card.visible,
        .technique-card.visible,
        .benefit-item.visible,
        .process-card.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;

    document.head.appendChild(revealStyle);


});