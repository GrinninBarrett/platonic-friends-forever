// TO DO: change variable name
const newFormHandler = async (event) => {
  event.preventDefault();
  // TO DO: query selector for name of user
  const name = document.querySelector("#project-name").value.trim();
  // // TO DO: query selector for bio
  const needed_funding = document
    .querySelector("#project-funding")
    .value.trim();
  // TO DO: query selector for interests/tags
  const description = document.querySelector("#project-desc").value.trim();
  // TO DO: change variable names
  if (name && needed_funding && description) {
    const response = await fetch(`/api/projects`, {
      method: "POST",
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // TO DO: change variable name
    if (response.ok) {
      document.location.replace("/profile");
    } else {
      // TO DO: change alert
      alert("Failed to create project");
    }
  }
};

// TO DO: change this to delete profile
const delButtonHandler = async (event) => {
  // TO DO: change selector
  if (event.target.hasAttribute("data-id")) {
    // TO DO: change selector
    const id = event.target.getAttribute("data-id");
    // TO DO: change selector
    const response = await fetch(`/api/projects/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      // TO DO: change alert
      alert("Failed to delete project");
    }
  }
};

document
  .querySelector(".new-project-form")
  // TO DO: change function name and classes
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".project-list")
  // TO DO: change function name and classes
  .addEventListener("click", delButtonHandler);
