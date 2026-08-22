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


        document.addEventListener("click", function () {

            serviceDropdown.classList.remove("open");

            serviceDropdownBtn.setAttribute(
                "aria-expanded",
                "false"
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
                isOpen ? "Close menu" : "Open menu"
            );

        });


        const mobileLinks =
            mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mobileMenu.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

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

        mobileServicesBtn.addEventListener("click", function () {

            const isOpen =
                mobileServices.classList.toggle("open");

            const arrow =
                mobileServicesBtn.querySelector(".mobile-arrow");

            if (arrow) {
                arrow.textContent =
                    isOpen ? "−" : "+";
            }

        });

    }


    /* =====================================================
       FAQ ACCORDION
    ===================================================== */

    const faqQuestions =
        document.querySelectorAll(".faq-question");


    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const currentItem =
                question.closest(".faq-item");

            const isOpen =
                currentItem.classList.contains("open");


            /* Close all other FAQs */

            document.querySelectorAll(".faq-item")
                .forEach(function (item) {

                    item.classList.remove("open");

                    const button =
                        item.querySelector(".faq-question");

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

            }

        });

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

                        entry.target.classList.add("visible");

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
    revealObserver.observe(element);
});


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(function (link) {

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

});