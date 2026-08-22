document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if (!form) return;

    const successMessage = document.getElementById("formSuccess");


    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let isValid = true;


        // Get fields

        const name = document.getElementById("name");
        const phone = document.getElementById("phone");
        const email = document.getElementById("email");
        const service = document.getElementById("service");
        const message = document.getElementById("message");


        // Clear previous errors

        document.querySelectorAll(".error-message").forEach(function (error) {
            error.textContent = "";
        });

        document.querySelectorAll(
            ".form-group input, .form-group select, .form-group textarea"
        ).forEach(function (field) {
            field.classList.remove("error");
        });


        // Name validation

        if (name.value.trim().length < 3) {

            showError(
                name,
                "Please enter your full name."
            );

            isValid = false;
        }


        // Phone validation

        const phonePattern = /^[6-9]\d{9}$/;

        if (!phonePattern.test(phone.value.trim())) {

            showError(
                phone,
                "Please enter a valid 10-digit phone number."
            );

            isValid = false;
        }


        // Email validation

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value.trim())) {

            showError(
                email,
                "Please enter a valid email address."
            );

            isValid = false;
        }


        // Service validation

        if (service.value === "") {

            showError(
                service,
                "Please select a service."
            );

            isValid = false;
        }


        // Message validation

        if (message.value.trim().length < 10) {

            showError(
                message,
                "Please enter at least 10 characters."
            );

            isValid = false;
        }


        // If valid

        if (isValid) {

            successMessage.classList.add("show");

            form.reset();


            // Hide message after 5 seconds

            setTimeout(function () {

                successMessage.classList.remove("show");

            }, 5000);

        }

    });


    // Error function

    function showError(field, message) {

        field.classList.add("error");

        const errorElement =
            field.parentElement.querySelector(".error-message");

        if (errorElement) {
            errorElement.textContent = message;
        }
    }


    // Only numbers in phone

    phone.addEventListener("input", function () {

        this.value = this.value.replace(/\D/g, "");

    });


    // Remove error while typing

    const fields = form.querySelectorAll(
        "input, select, textarea"
    );

    fields.forEach(function (field) {

        field.addEventListener("input", function () {

            this.classList.remove("error");

            const error =
                this.parentElement.querySelector(".error-message");

            if (error) {
                error.textContent = "";
            }

        });

    });


    // Smooth scroll

    const heroButton =
        document.querySelector(".contact-hero-btn");

    if (heroButton) {

        heroButton.addEventListener("click", function (event) {

            event.preventDefault();

            const target =
                document.getElementById("contact-form");

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }

});