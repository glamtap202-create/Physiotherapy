document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       FAQ ACCORDION (page-specific)
    ========================================= */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function (item) {

        const question = item.querySelector(".faq-question");

        question.addEventListener("click", function () {

            const isActive = item.classList.contains("active");

            faqItems.forEach(function (el) {
                el.classList.remove("active");
            });

            if (!isActive) {
                item.classList.add("active");
            }

        });

    });

});