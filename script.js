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