const loginForm = document.getElementById("login-form");
const passwordInput = document.getElementById("password");
const loginStatus = document.getElementById("login-status");

function openProtectedPage(event) {
  event.preventDefault();

  const password = passwordInput.value.trim();

  if (password === "") {
    loginStatus.textContent = "Please enter a password.";
    passwordInput.focus();
    return;
  }

  loginStatus.textContent = "Opening the requested page...";

  window.location.href = password + ".html";
}

loginForm.addEventListener("submit", openProtectedPage);