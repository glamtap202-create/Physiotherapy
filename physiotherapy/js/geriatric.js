document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       DESKTOP SERVICES DROPDOWN
    ===================================================== */

    const serviceButton =
        document.getElementById("serviceDropdownBtn");

    const serviceDropdown =
        document.querySelector(".nav-dropdown");


    if (serviceButton && serviceDropdown) {

        serviceButton.addEventListener("click", function (event) {

            event.stopPropagation();

            const isOpen =
                serviceDropdown.classList.toggle("open");

            serviceButton.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        document.addEventListener("click", function () {

            serviceDropdown.classList.remove("open");

            serviceButton.setAttribute(
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


                if (
                    mobileServices.classList.contains("open")
                ) {

                    arrow.textContent = "−";

                } else {

                    arrow.textContent = "+";

                }

            }
        );

    }



    /* =====================================================
       FAQ ACCORDION
    ===================================================== */

    const faqQuestions =
        document.querySelectorAll(".faq-question");


    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const faqItem =
                question.closest(".faq-item");

            const answer =
                faqItem.querySelector(".faq-answer");

            const isOpen =
                faqItem.classList.contains("open");


            /* Close all other FAQs */

            document
                .querySelectorAll(".faq-item")
                .forEach(function (item) {

                    item.classList.remove("open");

                    const itemQuestion =
                        item.querySelector(".faq-question");

                    const itemAnswer =
                        item.querySelector(".faq-answer");

                    if (itemQuestion) {

                        itemQuestion.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                    if (itemAnswer) {

                        itemAnswer.style.maxHeight =
                            null;

                    }

                });


            /* Open selected FAQ */

            if (!isOpen) {

                faqItem.classList.add("open");

                question.setAttribute(
                    "aria-expanded",
                    "true"
                );

                answer.style.maxHeight =
                    answer.scrollHeight + "px";

            }

        });

    });



    /* =====================================================
       CLOSE MOBILE MENU AFTER LINK CLICK
    ===================================================== */

    const mobileLinks =
        document.querySelectorAll(
            ".mobile-menu a"
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

                }

            }
        );

    });



    /* =====================================================
       RESIZE RESET
    ===================================================== */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 850) {

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

    });


});