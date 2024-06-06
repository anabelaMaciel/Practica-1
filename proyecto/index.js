const navToggle = document.getElementById("nav-toggle");
const navMenu = document.querySelector(".nav-menu");

console.log(navToggle);
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
})
