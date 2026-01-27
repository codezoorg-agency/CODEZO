// Init Icons and Animations
lucide.createIcons();
AOS.init({
  duration: 1000,
  once: true,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 50,
});

// Shutter Menu Navigation
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu");

function toggleMenu() {
  mobileMenu.classList.toggle("open");
  // Lock scroll when menu is open
  document.body.style.overflow = mobileMenu.classList.contains("open")
    ? "hidden"
    : "auto";
}

menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

// Accordion Logic for Plans
document.querySelectorAll(".toggle-details").forEach((button) => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    const icon = button.querySelector(".rotate-icon");

    details.classList.toggle("active");
    icon.style.transform = details.classList.contains("active")
      ? "rotate(180deg)"
      : "rotate(0deg)";

    button.querySelector("span")?.remove(); // Cleanup if span existed
    button.firstChild.textContent = details.classList.contains("active")
      ? "Hide Features "
      : "Show All Features ";
  });
});

const contactform = document.getElementById("secure-form");

contactform.addEventListener("submit", (form) => {
  // form.preventDefault();
  setTimeout(() => {
    form.target.reset();
  }, 1500);
});
