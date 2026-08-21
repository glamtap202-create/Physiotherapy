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


    document.addEventListener("click", function () {

        if (serviceDropdown) {

            serviceDropdown.classList.remove("open");

        }

        if (serviceDropdownBtn) {

            serviceDropdownBtn.setAttribute(
                "aria-expanded",
                "false"
            );

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
                    mobileServices.classList.toggle("show");

                mobileArrow.textContent =
                    isOpen ? "−" : "+";

            }
        );

    }


    /* =====================================================
       CLOSE MOBILE MENU AFTER CLICKING LINK
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
        document.querySelectorAll(
            ".faq-question"
        );


    faqQuestions.forEach(function (question) {

        question.addEventListener(
            "click",
            function () {

                const currentItem =
                    question.closest(".faq-item");

                const currentAnswer =
                    currentItem.querySelector(
                        ".faq-answer"
                    );

                const isOpen =
                    currentItem.classList.contains("open");


                /* Close all */

                document
                    .querySelectorAll(".faq-item")
                    .forEach(function (item) {

                        item.classList.remove("open");

                        const answer =
                            item.querySelector(
                                ".faq-answer"
                            );

                        if (answer) {
                            answer.style.maxHeight = null;
                        }

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


    const observer =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "reveal-visible"
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

});