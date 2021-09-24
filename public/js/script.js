const deleteButton = document.querySelector("#confirm-user-delete");
const followButtons = document.querySelectorAll(".follow-button");
const dismissButtons = document.querySelectorAll(".dismiss-button");

const followToast = function() {
  M.toast({
    html: 'Followed user',
    displayLength: 2000,
    classes: 'toast'
  })
}

const dismissToast = function() {
  M.toast({
    html: 'Dismissed user',
    displayLength: 2000,
    classes: 'toast'
  })
}

for (let i = 0; i < followButtons.length; i++) {
  followButtons[i].addEventListener("click", followToast);
}

for (let i = 0; i < dismissButtons.length; i++) {
  dismissButtons[i].addEventListener("click", dismissToast);
}

const logOutDeletedUser = async () => {
  const response = await fetch('/api/users/logout', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }

  alert('Account successfully deleted');

}


const handleDeleteUser = (event) => {
  event.preventDefault();

  fetch(`/api/users`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  logOutDeletedUser();

}


deleteButton.addEventListener("click", handleDeleteUser);