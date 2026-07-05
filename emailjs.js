emailjs.init({
    publicKey: "s8uU_TnZjj8S_DG8d",
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const btn = form.querySelector("button");
    btn.disabled = true;
    btn.innerText = "Sending...";

    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };

    emailjs
        .send("service_u2t423h", "template_3bbu9ak", params)
        .then(() => {
            alert("Message sent successfully!");
            form.reset();
        })
        .catch((error) => {
            console.error(error);
            alert("Failed to send message.");
        })
        .finally(() => {
            btn.disabled = false;
            btn.innerText = "Send Message";
        });
});