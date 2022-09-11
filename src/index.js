function showMenu() {
  navbarLinks.classList.toggle("menu-active");
}

let toggleButton = document.querySelector(".toggle-button");
let navbarLinks = document.querySelector("#navbar-links");
console.log(toggleButton);

toggleButton.addEventListener("click", showMenu);
