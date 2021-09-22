document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
});


const deleteButton = document.querySelector("#test6");


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