// Jaipur travel tip button
const showMessageBtn = document.getElementById("showMessageBtn");
const travelTip = document.getElementById("travelTip");

if (showMessageBtn) {
    showMessageBtn.addEventListener("click", () => {
        travelTip.textContent = "🌞 Travel Tip: Visit Nahargarh Fort at sunrise for a stunning view of Jaipur!";
    });
}

// Contact form behavior
const contactForm = document.getElementById("contactForm");
const formResponse = document.getElementById("formResponse");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        formResponse.textContent = "Thank you for contacting us! We’ll get back to you soon. 😊";
        contactForm.reset();
    });
}
