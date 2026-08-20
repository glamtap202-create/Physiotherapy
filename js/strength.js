/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {

        mobileMenu.classList.toggle("open");

        const isOpen =
            mobileMenu.classList.contains("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });

}


/* =====================================================
   MOBILE SERVICES DROPDOWN
===================================================== */

const mobileServicesBtn =
    document.getElementById("mobileServicesBtn");

const mobileServices =
    document.getElementById("mobileServices");

const mobileArrow =
    document.getElementById("mobileArrow");


if (mobileServicesBtn && mobileServices) {

    mobileServicesBtn.addEventListener("click", () => {

        mobileServices.classList.toggle("open");

        const isOpen =
            mobileServices.classList.contains("open");

        if (mobileArrow) {

            mobileArrow.textContent =
                isOpen ? "−" : "+";

        }

    });

}


/* =====================================================
   FAQ ACCORDION
===================================================== */

const faqQuestions =
    document.querySelectorAll(".faq-question");


faqQuestions.forEach((question) => {

    question.addEventListener("click", () => {

        const currentItem =
            question.closest(".faq-item");

        const isActive =
            currentItem.classList.contains("active");


        document
            .querySelectorAll(".faq-item")
            .forEach((item) => {

                item.classList.remove("active");

                const btn =
                    item.querySelector(".faq-question");

                if (btn) {

                    btn.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            });


        if (!isActive) {

            currentItem.classList.add("active");

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
        ".info-card, .technique-card, .benefit-item, .process-card, .intro-point"
    );


revealElements.forEach((element) => {

    element.classList.add("reveal");

});


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

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


revealElements.forEach((element) => {

    observer.observe(element);

});


/* =====================================================
   CLOSE MOBILE MENU AFTER LINK CLICK
===================================================== */

const mobileLinks =
    document.querySelectorAll(
        ".mobile-menu a"
    );


mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (mobileMenu) {

            mobileMenu.classList.remove("open");

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
   ESC KEY
===================================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        if (mobileMenu) {
            mobileMenu.classList.remove("open");
        }

        if (mobileServices) {
            mobileServices.classList.remove("open");
        }

        if (menuToggle) {

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }

});