const deleteButton = document.querySelector("#confirm-user-delete");
const followButton = document.querySelector("#follow-button");

const toast = function() {
  M.toast({
    html: 'Followed user',
    displayLength: 2000,
    classes: 'follow-toast'
  })
}

followButton.addEventListener("click", toast);


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