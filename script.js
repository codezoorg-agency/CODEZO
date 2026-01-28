// Init Icons and Animations
lucide.createIcons();
AOS.init({ duration: 1000, once: true, startEvent: "DOMContentLoaded" });

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

// Whatapp button logic code
const whatsappbtn = document.getElementById("whatsapp-btn");

whatsappbtn.addEventListener("click", () => {
  const message = "Hi, I want a website. Can you help?";
  whatsappbtn.href = "https://wa.me/917814697139?text=" + encodeURIComponent(message);

  // toggleMenu()
});
