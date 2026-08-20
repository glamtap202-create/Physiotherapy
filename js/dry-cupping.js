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

            const expanded =
                serviceDropdownBtn.getAttribute("aria-expanded") === "true";

            serviceDropdownBtn.setAttribute(
                "aria-expanded",
                String(!expanded)
            );

            navDropdown.classList.toggle("open");

        });


        document.addEventListener("click", function () {

            serviceDropdownBtn.setAttribute(
                "aria-expanded",
                "false"
            );

            navDropdown.classList.remove("open");

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
                mobileMenu.classList.toggle("show");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
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

        mobileServicesBtn.addEventListener("click", function () {

            mobileServices.classList.toggle("show");

            const arrow =
                mobileServicesBtn.querySelector(".mobile-arrow");

            if (mobileServices.classList.contains("show")) {

                arrow.textContent = "−";

            } else {

                arrow.textContent = "+";

            }

        });

    }



    /* =====================================================
       CLOSE MOBILE MENU WHEN LINK IS CLICKED
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
        document.querySelectorAll(".faq-question");


    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const faqItem =
                question.closest(".faq-item");

            const answer =
                faqItem.querySelector(".faq-answer");

            const isOpen =
                faqItem.classList.contains("open");


            /* Close all FAQs */

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

                        itemAnswer.style.maxHeight = null;

                    }

                });


            /* Open clicked FAQ */

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
                    document.getElementById("therapy");

                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }



    /* =====================================================
       CLOSE MOBILE MENU ON RESIZE
    ===================================================== */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 900) {

            if (mobileMenu) {
                mobileMenu.classList.remove("show");
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