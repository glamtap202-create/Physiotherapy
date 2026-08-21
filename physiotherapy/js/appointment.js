/* =====================================================
   HEALING VIBES CLINIC
   APPOINTMENT PAGE JAVASCRIPT
   WhatsApp Appointment Booking
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("appointmentForm");

    if (!form) {
        return;
    }

    /* =====================================================
       FORM ELEMENTS
    ===================================================== */

    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const ageInput = document.getElementById("age");
    const serviceInput = document.getElementById("service");
    const doctorInput = document.getElementById("doctor");
    const dateInput = document.getElementById("date");
    const messageInput = document.getElementById("message");
    const agreementInput = document.getElementById("agreement");
    const submitButton = document.getElementById("submitBtn");

    /* =====================================================
       TODAY AS MINIMUM DATE
    ===================================================== */

    const today = new Date();

    const year = today.getFullYear();

    const month = String(today.getMonth() + 1).padStart(2, "0");

    const day = String(today.getDate()).padStart(2, "0");

    const currentDate = `${year}-${month}-${day}`;

    if (dateInput) {
        dateInput.min = currentDate;
    }

    /* =====================================================
       ERROR FUNCTIONS
    ===================================================== */

    function setError(field, message) {

        const input = document.getElementById(field);

        const error = document.getElementById(`${field}Error`);

        if (input) {
            input.classList.add("invalid");
        }

        if (error) {
            error.textContent = message;
        }
    }

    function clearError(field) {

        const input = document.getElementById(field);

        const error = document.getElementById(`${field}Error`);

        if (input) {
            input.classList.remove("invalid");
        }

        if (error) {
            error.textContent = "";
        }

        if (field === "agreement") {

            const agreementError =
                document.getElementById("agreementError");

            if (agreementError) {
                agreementError.textContent = "";
            }
        }
    }

    function clearAllErrors() {

        const fields = [
            "name",
            "phone",
            "email",
            "age",
            "service",
            "doctor",
            "date",
            "time",
            "agreement"
        ];

        fields.forEach(function (field) {
            clearError(field);
        });
    }

    /* =====================================================
       PHONE - ONLY 10 DIGITS
    ===================================================== */

    if (phoneInput) {

        phoneInput.addEventListener("input", function () {

            this.value = this.value
                .replace(/\D/g, "")
                .slice(0, 10);

            clearError("phone");
        });
    }

    /* =====================================================
       CLEAR ERRORS WHILE USER TYPES
    ===================================================== */

    if (nameInput) {
        nameInput.addEventListener("input", function () {
            clearError("name");
        });
    }

    if (emailInput) {
        emailInput.addEventListener("input", function () {
            clearError("email");
        });
    }

    if (ageInput) {
        ageInput.addEventListener("input", function () {
            clearError("age");
        });
    }

    if (serviceInput) {
        serviceInput.addEventListener("change", function () {
            clearError("service");
        });
    }

    if (doctorInput) {
        doctorInput.addEventListener("change", function () {
            clearError("doctor");
        });
    }

    if (dateInput) {
        dateInput.addEventListener("change", function () {
            clearError("date");
        });
    }

    if (agreementInput) {
        agreementInput.addEventListener("change", function () {
            clearError("agreement");
        });
    }

    /* =====================================================
       TIME SLOT ERROR CLEAR
    ===================================================== */

    const timeOptions =
        document.querySelectorAll('input[name="time"]');

    timeOptions.forEach(function (radio) {

        radio.addEventListener("change", function () {
            clearError("time");
        });

    });

    /* =====================================================
       FORM VALIDATION
    ===================================================== */

    function validateForm() {

        let isValid = true;

        clearAllErrors();

        /* NAME */

        const name = nameInput.value.trim();

        if (name.length < 2) {

            setError(
                "name",
                "Please enter your full name."
            );

            isValid = false;
        }

        /* PHONE */

        const phone = phoneInput.value.trim();

        if (!/^[6-9]\d{9}$/.test(phone)) {

            setError(
                "phone",
                "Enter a valid 10-digit mobile number."
            );

            isValid = false;
        }

        /* EMAIL */

        const email = emailInput.value.trim();

        if (
            email &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ) {

            setError(
                "email",
                "Please enter a valid email address."
            );

            isValid = false;
        }

        /* AGE */

        if (ageInput.value) {

            const age = Number(ageInput.value);

            if (age < 1 || age > 120) {

                setError(
                    "age",
                    "Please enter a valid age."
                );

                isValid = false;
            }
        }

        /* SERVICE */

        if (!serviceInput.value) {

            setError(
                "service",
                "Please select a service."
            );

            isValid = false;
        }

        /* THERAPIST */

        if (!doctorInput.value) {

            setError(
                "doctor",
                "Please select a therapist."
            );

            isValid = false;
        }

        /* DATE */

        if (!dateInput.value) {

            setError(
                "date",
                "Please select an appointment date."
            );

            isValid = false;

        } else if (dateInput.value < currentDate) {

            setError(
                "date",
                "Please select today or a future date."
            );

            isValid = false;
        }

        /* TIME */

        const selectedTime =
            document.querySelector(
                'input[name="time"]:checked'
            );

        if (!selectedTime) {

            setError(
                "time",
                "Please select a preferred time."
            );

            isValid = false;
        }

        /* AGREEMENT */

        if (!agreementInput.checked) {

            const agreementError =
                document.getElementById("agreementError");

            if (agreementError) {

                agreementError.textContent =
                    "Please accept the appointment terms.";
            }

            isValid = false;
        }

        return isValid;
    }

    /* =====================================================
       FORM SUBMIT
    ===================================================== */

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        /* VALIDATE */

        if (!validateForm()) {

            const firstInvalid =
                form.querySelector(".invalid");

            if (firstInvalid) {
                firstInvalid.focus();
            }

            return;
        }

        /* =================================================
           GET FORM DATA
        ================================================= */

        const name =
            nameInput.value.trim();

        const phone =
            phoneInput.value.trim();

        const email =
            emailInput.value.trim();

        const age =
            ageInput.value.trim();

        const service =
            serviceInput.value;

        const doctor =
            doctorInput.value;

        const date =
            dateInput.value;

        const message =
            messageInput.value.trim();

        const selectedTime =
            document.querySelector(
                'input[name="time"]:checked'
            );

        const time =
            selectedTime ? selectedTime.value : "";

        /* =================================================
           WHATSAPP MESSAGE
        ================================================= */

        const whatsappMessage = `
*New Appointment Request*

*Name:* ${name}

*Phone:* ${phone}

*Email:* ${email || "Not provided"}

*Age:* ${age || "Not provided"}

*Service:* ${service}

*Therapist:* ${doctor}

*Date:* ${date}

*Time:* ${time}

*Additional Message:*
${message || "No additional message"}
        `;

        /* =================================================
           WHATSAPP NUMBER
        ================================================= */

        const whatsappNumber = "918750355566";

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);

        /* =================================================
           BUTTON LOADING
        ================================================= */

        submitButton.disabled = true;

        const buttonText =
            submitButton.querySelector("span:first-child");

        if (buttonText) {
            buttonText.textContent = "Opening WhatsApp...";
        }

        /* =================================================
           OPEN WHATSAPP
        ================================================= */

        window.open(whatsappURL, "_blank");

        /* =================================================
           RESET BUTTON
        ================================================= */

        setTimeout(function () {

            submitButton.disabled = false;

            if (buttonText) {
                buttonText.textContent = "Book Appointment";
            }

        }, 1500);

    });

});