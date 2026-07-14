const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const successMessage = document.getElementById("successMessage");

        successMessage.textContent =
            "Thank you! Your message has been sent successfully.";

        successMessage.style.color = "green";
        successMessage.style.fontWeight = "bold";
        successMessage.style.marginTop = "20px";

        contactForm.reset();

    });

}

/*Try reserve button */
document.addEventListener("DOMContentLoaded", function () {
    // Select all reserve buttons
    const reserveButtons = document.querySelectorAll(".reserve-btn");

    reserveButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Toggle reserved state
            button.classList.toggle("reserved");
            button.textContent = button.classList.contains("reserved")
                ? "Reserved"
                : "Reserve";
        });
    });
});

