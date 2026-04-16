document.getElementById("gateForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Error fields
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");
    let passwordError = document.getElementById("passwordError");
    let confirmError = document.getElementById("confirmError");

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";

    let isValid = true;

    // Name validation
    let namePattern = /^[A-Za-z ]+$/;
    if (name === "" || !namePattern.test(name)) {
        nameError.textContent = "Enter valid name (letters only)";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Enter valid email";
        isValid = false;
    }

    // Phone validation
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        phoneError.textContent = "Enter valid 10-digit number";
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    // Confirm password
    if (password !== confirmPassword) {
        confirmError.textContent = "Passwords do not match";
        isValid = false;
    }

    // Success
    if (isValid) {
        alert("Registration Successful!");
        document.getElementById("gateForm").reset();
    }
});
