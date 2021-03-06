const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/profile");
    } else {
      M.toast({
        html: `${response.statusText}`,
        displayLength: 2000,
        classes: "toast",
      });    
    }
  }
};


// Create a new account from signup form
const signupFormHandler = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector("#first-name").value.trim();
  const last_name = document.querySelector("#last-name").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (first_name && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ first_name, last_name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      M.toast({
        html: "Problem logging in",
        displayLength: 2000,
        classes: "toast",
      });
    }
  }
};

if (document.querySelector("#login-form")) {
  document.querySelector("#login-form").addEventListener("submit", loginFormHandler);
}

if (document.querySelector("#create-account-form")) {
  document.querySelector("#create-account-form").addEventListener("submit", signupFormHandler);
}
