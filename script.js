/////////////////////////////////////////////////// Skill-Bars-JavaScript

document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll(".progress");

    function animateSkills() {
        skillBars.forEach((bar) => {
            bar.style.width = bar.parentElement.previousElementSibling.textContent.split(" ")[1];
        });
    }

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(document.querySelector(".skills"));
});

///////////////////////////////////////////////////// S_B_JS



///////////////////////////////////////////////////////// form-submition-JavaScript
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const formMessage = document.getElementById("form-message");

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields!";
        formMessage.style.color = "red";
        return;
    }

    // Simulating email sending (you can integrate with a real backend or service like EmailJS)
    setTimeout(() => {
        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";

        // Clear the form
        document.getElementById("contact-form").reset();
    }, 1000);
});

//////////////////////////////////////////////////// F_S_JS