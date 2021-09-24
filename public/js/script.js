const deleteButton = document.querySelector("#confirm-user-delete");

const followButtons = document.querySelectorAll(".follow-button");
const dismissButtons = document.querySelectorAll(".dismiss-button");

// Declare elements from the form to edit user information
const updateFirstNameEl = document.querySelector("#edit-first-name");
const updateLastNameEl = document.querySelector("#edit-last-name");
const updateCityEl = document.querySelector("#edit-city");
const updateStateEl = document.querySelector("#edit-state");
const updateBioEl = document.querySelector("#edit-bio");
const updatePasswordEl = document.querySelector("#edit-password");

// Toast to show when following a user
const followToast = function() {
  M.toast({
    html: 'Followed user',
    displayLength: 2000,
    classes: 'toast'
  })
}

// Toast to show when dismissing a user
const dismissToast = function() {
  M.toast({
    html: 'Dismissed user',
    displayLength: 2000,
    classes: 'toast'
  })
}

// Add event listeners to all buttons to initiate toasts
for (let i = 0; i < followButtons.length; i++) {
  followButtons[i].addEventListener("click", followToast);
}

for (let i = 0; i < dismissButtons.length; i++) {
  dismissButtons[i].addEventListener("click", dismissToast);
}


// After a user is deleted, log them out as well, returning to the homepage
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

// Fetch request to delete a user
const handleDeleteUser = (event) => {
  event.preventDefault();

  fetch(`/api/users`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  logOutDeletedUser();

}

// Event listener to delete user
deleteButton.addEventListener("click", handleDeleteUser);



// Allow a user to edit their profile information
const handleUpdateUser = async (event) => {
  event.preventDefault();

  const first_name = updateFirstNameEl.value.trim();
  const last_name = updateLastNameEl.value.trim();
  const city = updateCityEl.value.trim();
  const state = updateStateEl.value.trim()
  const bio = updateBioEl.value.trim();

  // Exit function if no fields have any text in them
  if (!(first_name || last_name || city || state || bio)) {
    return;
  }

  // const userData = await fetch('api/users/edit', {
  //   method: "GET",
  //   headers: { "Content-Type": "application/json" },
  // })

  // let userID = userData.id;

  const response = await fetch('/api/users', {
    method: "PUT",
    body: JSON.stringify({ first_name, last_name, city, state, bio }),
    headers: { "Content-Type": "application/json" },
  })

  if (response.ok) {
    document.location.replace("/profile");
  } else {
    alert(response.statusText);
  }

}