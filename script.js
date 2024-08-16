// DOM modification
document.addEventListener("DOMContentLoaded", function () {
  const menuBar = document.querySelector(".menu-bar");
  const closeIcon = document.querySelector(".close");
  const navList = document.querySelector(".nav-list");
  const downloadButton = document.querySelector(".cta");
  const navItems = document.getElementsByClassName("nav-item");
  const heroButtons = document.getElementsByClassName("hero-button");
  const navBar = document.querySelector(".nav-bar");
  const Logo = document.querySelector(".brand-logo");
  const brandName = document.querySelector(".brand-name");

  let checkScrollposition = () => {
    let scrollpostion = window.scrollY;

    if (scrollpostion > 50) {
      navBar.style.backgroundColor = "#026fbf";
      Array.prototype.forEach.call(navItems, (navItem) => {
        navItem.style.color = "#fff";
      });
      downloadButton.style.border = "1px solid #fff";
      downloadButton.style.color = "#fff";
      Logo.innerHTML = `<img src="assets/Jagbandhu_white_logo.svg" alt="Jagbandhu Logo" width="40rem" />`;
      brandName.style.color = "#fff";
    } else {
      navBar.style.backgroundColor = "#edf2f6";
      Array.prototype.forEach.call(navItems, (navItem) => {
        navItem.style.color = "#4b4b4b";
      });
      downloadButton.style.border = "1px solid #026fbf";
      downloadButton.style.color = "#026fbf";
      Logo.innerHTML = `<img src="assets/Jagbandhu_Logo.svg" alt="Jagbandhu Logo" width="40rem" />`;
      brandName.style.color = "#026fbf";
    }
  };

  checkScrollposition();

  window.addEventListener("scroll", checkScrollposition);

  downloadButton.addEventListener("click", function () {
    window.location.href = "https://onelink.to/9qh57b";
  });

  // Initially, display menuBar and hide closeIcon
  menuBar.style.display = "block";
  closeIcon.style.display = "none";

  menuBar.addEventListener("click", function () {
    // Hide menuBar and show closeIcon
    menuBar.style.display = "none";
    closeIcon.style.display = "block";

    // Show the navigation list and download button
    navList.classList.toggle("show");
    downloadButton.classList.toggle("visible");
  });

  closeIcon.addEventListener("click", function () {
    // Show menuBar and hide closeIcon
    menuBar.style.display = "block";
    closeIcon.style.display = "none";

    // Hide the navigation list and download button
    navList.classList.toggle("show");
    downloadButton.classList.toggle("visible");
  });
  Array.prototype.forEach.call(navItems, (navItem) => {
    navItem.addEventListener("click", function () {
      // Show menuBar and hide closeIcon
      menuBar.style.display = "block";
      closeIcon.style.display = "none";

      // Hide the navigation list and download button
      navList.classList.toggle("show");
      downloadButton.classList.toggle("visible");
    });
  });

  Array.prototype.forEach.call(heroButtons, (heroButton) => {
    heroButton.addEventListener("click", function () {
      window.location.href = "https://onelink.to/9qh57b";
    });
  });
});

// GSAP Animation
