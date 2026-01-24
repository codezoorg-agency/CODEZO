// Init Icons and Animations
lucide.createIcons();
AOS.init({ duration: 1000, once: true });

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

// Secure Form Logic
const form = document.getElementById("secure-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Basic Security: Sanitize
  const inputs = form.querySelectorAll("input, textarea");
  let isBot = false;

  inputs.forEach((input) => {
    if (input.value.includes("<script")) isBot = true;
  });

  if (!isBot) {
    const btn = form.querySelector("button");
    btn.innerText = "Processing...";
    setTimeout(() => {
      alert("Security Check Passed. Message Sent!");
      form.reset();
      btn.innerText = "Send Message";
    }, 1500);
  }
});
