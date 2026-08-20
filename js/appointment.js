/* =====================================================
   HEALING VIBES CLINIC
   APPOINTMENT PAGE JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       GET FORM
    ================================================== */

    const form = document.getElementById("appointmentForm");

    if (!form) {
        return;
    }


    /* =================================================
       FORM ELEMENTS
    ================================================== */

    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const ageInput = document.getElementById("age");

    const serviceInput = document.getElementById("service");
    const doctorInput = document.getElementById("doctor");

    const dateInput = document.getElementById("date");

    const messageInput = document.getElementById("message");

    const agreementInput =
        document.getElementById("agreement");

    const submitButton =
        document.getElementById("submitBtn");

    const successMessage =
        document.getElementById("successMessage");


    /* =================================================
       SET TODAY AS MINIMUM DATE
    ================================================== */

    const today = new Date();

    const year = today.getFullYear();

    const month = String(
        today.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
        today.getDate()
    ).padStart(2, "0");

    const currentDate =
        `${year}-${month}-${day}`;


    if (dateInput) {
        dateInput.min = currentDate;
    }


    /* =================================================
       PHONE NUMBER
       ONLY 10 DIGITS
    ================================================== */

    if (phoneInput) {

        phoneInput.addEventListener(
            "input",
            function () {

                this.value =
                    this.value
                        .replace(/\D/g, "")
                        .slice(0, 10);

                clearError("phone");

            }
        );

    }


    /* =================================================
       CLEAR ERROR WHEN USER TYPES
    ================================================== */

    if (nameInput) {

        nameInput.addEventListener(
            "input",
            function () {
                clearError("name");
            }
        );

    }


    if (emailInput) {

        emailInput.addEventListener(
            "input",
            function () {
                clearError("email");
            }
        );

    }


    if (ageInput) {

        ageInput.addEventListener(
            "input",
            function () {
                clearError("age");
            }
        );

    }


    if (serviceInput) {

        serviceInput.addEventListener(
            "change",
            function () {
                clearError("service");
            }
        );

    }


    if (doctorInput) {

        doctorInput.addEventListener(
            "change",
            function () {
                clearError("doctor");
            }
        );

    }


    if (dateInput) {

        dateInput.addEventListener(
            "change",
            function () {
                clearError("date");
            }
        );

    }


    if (agreementInput) {

        agreementInput.addEventListener(
            "change",
            function () {
                clearError("agreement");
            }
        );

    }


    /* =================================================
       TIME SLOT ERROR CLEAR
    ================================================== */

    const timeOptions =
        document.querySelectorAll(
            'input[name="time"]'
        );


    timeOptions.forEach(
        function (radio) {

            radio.addEventListener(
                "change",
                function () {

                    clearError("time");

                }
            );

        }
    );


    /* =================================================
       SET ERROR
    ================================================== */

    function setError(
        field,
        message
    ) {

        const input =
            document.getElementById(field);

        const error =
            document.getElementById(
                `${field}Error`
            );


        if (input) {

            input.classList.add(
                "invalid"
            );

        }


        if (error) {

            error.textContent =
                message;

        }

    }


    /* =================================================
       CLEAR ERROR
    ================================================== */

    function clearError(field) {

        const input =
            document.getElementById(field);

        const error =
            document.getElementById(
                `${field}Error`
            );


        if (input) {

            input.classList.remove(
                "invalid"
            );

        }


        if (error) {

            error.textContent = "";

        }


        /* Agreement special error */

        if (field === "agreement") {

            const agreementError =
                document.getElementById(
                    "agreementError"
                );


            if (agreementError) {

                agreementError.textContent =
                    "";

            }

        }

    }


    /* =================================================
       CLEAR ALL ERRORS
    ================================================== */

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


        fields.forEach(
            function (field) {

                clearError(field);

            }
        );

    }


    /* =================================================
       VALIDATE FORM
    ================================================== */

    function validateForm() {

        let isValid = true;


        clearAllErrors();


        /* ---------------------------------------------
           NAME
        --------------------------------------------- */

        const name =
            nameInput.value.trim();


        if (name.length < 2) {

            setError(
                "name",
                "Please enter your full name."
            );

            isValid = false;

        }


        /* ---------------------------------------------
           PHONE
        --------------------------------------------- */

        const phone =
            phoneInput.value.trim();


        if (
            !/^[6-9]\d{9}$/.test(phone)
        ) {

            setError(
                "phone",
                "Enter a valid 10-digit mobile number."
            );

            isValid = false;

        }


        /* ---------------------------------------------
           EMAIL
        --------------------------------------------- */

        const email =
            emailInput.value.trim();


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


        /* ---------------------------------------------
           AGE
        --------------------------------------------- */

        if (ageInput.value) {

            const age =
                Number(ageInput.value);


            if (
                age < 1 ||
                age > 120
            ) {

                setError(
                    "age",
                    "Please enter a valid age."
                );

                isValid = false;

            }

        }


        /* ---------------------------------------------
           SERVICE
        --------------------------------------------- */

        if (!serviceInput.value) {

            setError(
                "service",
                "Please select a service."
            );

            isValid = false;

        }


        /* ---------------------------------------------
           THERAPIST
        --------------------------------------------- */

        if (!doctorInput.value) {

            setError(
                "doctor",
                "Please select a therapist."
            );

            isValid = false;

        }


        /* ---------------------------------------------
           DATE
        --------------------------------------------- */

        if (!dateInput.value) {

            setError(
                "date",
                "Please select an appointment date."
            );

            isValid = false;

        }
        else if (
            dateInput.value < currentDate
        ) {

            setError(
                "date",
                "Please select today or a future date."
            );

            isValid = false;

        }


        /* ---------------------------------------------
           TIME
        --------------------------------------------- */

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


        /* ---------------------------------------------
           AGREEMENT
        --------------------------------------------- */

        if (
            !agreementInput.checked
        ) {

            const agreementError =
                document.getElementById(
                    "agreementError"
                );


            if (agreementError) {

                agreementError.textContent =
                    "Please accept the appointment terms.";

            }


            isValid = false;

        }


        return isValid;

    }


    /* =================================================
       FORM SUBMIT
    ================================================== */

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* -----------------------------------------
               VALIDATE
            ----------------------------------------- */

            const valid =
                validateForm();


            if (!valid) {

                const firstInvalid =
                    form.querySelector(
                        ".invalid"
                    );


                if (firstInvalid) {

                    firstInvalid.focus();

                }


                return;

            }


            /* -----------------------------------------
               GET FORM DATA
            ----------------------------------------- */

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


            /* -----------------------------------------
               FORMAT DATE
            ----------------------------------------- */

            const formattedDate =
                new Date(
                    `${date}T00:00:00`
                ).toLocaleDateString(
                    "en-IN",
                    {
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                    }
                );


            /* -----------------------------------------
               BUTTON LOADING
            ----------------------------------------- */

            submitButton.disabled =
                true;


            submitButton.querySelector(
                "span:first-child"
            ).textContent =
                "Submitting...";


            /* -----------------------------------------
               DEMO SUBMISSION
            ----------------------------------------- */

            setTimeout(
                function () {


                    /* ---------------------------------
                       SUCCESS MESSAGE
                    --------------------------------- */

                    successMessage.innerHTML = `

                        <strong>
                            Appointment Request Submitted!
                        </strong>

                        <br><br>

                        Thank you,
                        <strong>
                            ${escapeHtml(name)}
                        </strong>.

                        Your appointment request has been
                        received for

                        <strong>
                            ${escapeHtml(formattedDate)}
                        </strong>

                        at

                        <strong>
                            ${escapeHtml(
                                selectedTime.value
                            )}
                        </strong>.

                        <br><br>

                        <strong>
                            Phone:
                        </strong>

                        ${escapeHtml(phone)}

                        <br>

                        <strong>
                            Service:
                        </strong>

                        ${escapeHtml(service)}

                        <br>

                        <strong>
                            Therapist:
                        </strong>

                        ${escapeHtml(doctor)}

                        <br>

                        Our team will contact you shortly.

                    `;


                    /* ---------------------------------
                       SHOW SUCCESS
                    --------------------------------- */

                    successMessage.classList.add(
                        "show"
                    );


                    /* ---------------------------------
                       SCROLL TO MESSAGE
                    --------------------------------- */

                    successMessage.scrollIntoView(
                        {
                            behavior: "smooth",
                            block: "center"
                        }
                    );


                    /* ---------------------------------
                       RESET FORM
                    --------------------------------- */

                    form.reset();


                    /* Keep minimum date */

                    dateInput.min =
                        currentDate;


                    /* ---------------------------------
                       RESET BUTTON
                    --------------------------------- */

                    submitButton.disabled =
                        false;


                    submitButton.querySelector(
                        "span:first-child"
                    ).textContent =
                        "Book Appointment";


                },
                600
            );

        }
    );


    /* =================================================
       ESCAPE HTML
       Security helper
    ================================================== */

    function escapeHtml(value) {

        const div =
            document.createElement(
                "div"
            );


        div.textContent =
            value;


        return div.innerHTML;

    }


});