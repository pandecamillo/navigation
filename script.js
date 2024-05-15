let active = false;
function handleNav() {
  if (active) {
    nav.classList.remove("showNav");
    menu.src = "menu.png";
    active = false;
  } else {
    nav.classList.add("showNav");
    menu.src = "close.png";
    active = true;
  }
}

document.onscroll = function () {
  menu.src = "menu.png";
  nav.classList.remove("showNav");
};

function goToWebsite() {
  location.href = "https://camilllopande.onrender.com";
}
