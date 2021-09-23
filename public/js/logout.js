const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

let logoutButtons = document.querySelectorAll(".logout");

for (let i = 0; i < logoutButtons.length; i++) {
  logoutButtons[i].addEventListener("click", logout);
}