window.addEventListener("load", () => {});

let respose = JSON.parse(localStorage.getItem("response"));
let mainContainer = document.getElementById("mainContainer");

let div = document.createElement("div");
div.innerHTML = `<h2>Thank you. Your QR code will be sent to your registered email id.</h2>`;
mainContainer.append(div);

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navbarContent = document.querySelector(
    ".navbarTwo .navbar-content"
  );

  hamburgerMenu.addEventListener("click", function () {
    navbarContent.classList.toggle("active");
    if (navbarContent.classList.contains("active")) {
      hamburgerMenu.innerHTML = '<i class="fa-solid fa-times"></i>';
    } else {
      hamburgerMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });
});
