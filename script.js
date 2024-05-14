let showing = false;
function handleNav() {
  if (showing) {
    menu.src = "close.png";
    nav.classList.add("showNav");
  } else {
    menu.src = "menu.png";
    nav.classList.remove("showNav");
  }
  showing = !showing;
}

document.onscroll = function () {
  menu.src = "menu.png";
  nav.classList.remove("showNav");
};

function goToWhatsapp() {
  location.href = "https://wa.me/+243893196755";
}
