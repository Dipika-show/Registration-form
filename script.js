const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

function validateLogin() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email.trim() === "" || password.trim() === "") {
        alert("Please fill in all fields");
        return false;
    }
    alert("Login successful!");
    return true;
}

function validateRegister() {
    let name = document.getElementById("regName").value;
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;
    let confirm = document.getElementById("regConfirm").value;

    if (name.trim() === "" || email.trim() === "" || password.trim() === "" || confirm.trim() === "") {
        alert("Please fill in all fields");
        return false;
    }
    if (password !== confirm) {
        alert("Passwords do not match!");
        return false;
    }
    alert("Registration successful!");
    return true;
}
