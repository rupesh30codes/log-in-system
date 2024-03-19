const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const rememberMeCheckbox = document.getElementById("rememberMe");
const loginButton = document.getElementById("login");
const fbLoginButton = document.getElementById("fb-login");

loginButton.addEventListener("click", function(event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const rememberMe = rememberMeCheckbox.checked;

  if (email === "") {
    alert("Please enter your email.");
    return;
  }
  if (password === "") {
    alert("Please enter your password.");
    return;
  }

  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Remember Me:", rememberMe);

  emailInput.value = "";
  passwordInput.value = "";
  rememberMeCheckbox.checked = false;
});

fbLoginButton.addEventListener("click", function() {
  alert("Google login functionality is yet to be added.");
});
function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const icon = document.querySelector(".toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}
