let menu = document.getElementById("menu-bar");
let navBar = document.querySelector(".navbar");

menu.onClick = () => {
  menu.classList.toggle("fa-times");
  // navBar.classList.toggle("active");
};

// window.onscroll = () => {
//   nav.classList.remove("fa-times");
//   navBar.classList.remove("active");
// };
