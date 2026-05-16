import "./css/style.css";

const mobileMenu = document.querySelector(".mobile-menu-wrapper");
const openMobileMenuBtn = document.querySelector(".open-mobile-menu-btn");
const closeMobileMenuBtn = document.querySelector(".close-mobile-menu-btn");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-href-js");
const headerButton = document.querySelectorAll(".header-button");
const headerButtonLink = document.querySelector(".header-button-link");
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTop.classList.add("is-active");
  } else {
    toTop.classList.remove("is-active");
  }
});

toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

headerButton.forEach((button) => {
  button.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    document.body.style.overflow = "visible";
  });
});

closeMobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open");
  document.body.style.overflow = "visible";
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    document.body.style.overflow = "visible";
  });
});

closeMobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open");
  document.body.style.overflow = "visible";
});
openMobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("is-open");
  document.body.style.overflow = "hidden";
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1440) {
    mobileMenu.classList.remove("is-open");
  }
});
