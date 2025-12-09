document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", function (e) {

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const nameRegex = /^[A-Za-z]+$/;

        if (!nameRegex.test(username)) {
            alert("Username must contain alphabetic letters only.");
            e.preventDefault();
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            e.preventDefault();
            return;
        }
    });
});
