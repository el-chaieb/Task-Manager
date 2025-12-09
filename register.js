document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("registerForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    form.addEventListener("submit", function (e) {

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        const nameRegex = /^[A-Za-z]+$/;
        if (!nameRegex.test(name)) {
            alert("Name must contain alphabetic letters only.");
            e.preventDefault();
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Enter a valid email address.");
            e.preventDefault();
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            e.preventDefault();
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            e.preventDefault();
            return;
        }

    });

});
