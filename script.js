let nav = document.querySelector("#menu_bar");
let navBar = document.querySelector(".navbar");

nav.onClick = () => {
  nav.classList.toggle("fa-times");
  navBar.classList.toggle("active");
};

window.onscroll = () => {
  nav.classList.remove("fa-times");
  navBar.classList.remove("active");
};
