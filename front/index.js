
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        message.style.color = "#67e8f9";
        message.textContent = "Form submitted successfully!";
    }
});

document.getElementById("forgotPassword").addEventListener("click", function (event) {
    event.preventDefault();
    message.style.color = "#67e8f9";
    message.textContent = "Password reset is not configured yet.";
});

document.getElementById("signupLink").addEventListener("click", function (event) {
    event.preventDefault();
    message.style.color = "#67e8f9";
    message.textContent = "Registration is not configured yet.";
});
