// Run after the page fully loads
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio site loaded!");

  // Add a wave emoji to the main heading
  const header = document.querySelector("header h1");
  header.textContent += " 👋";

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll("header nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // prevent default jump
      const targetId = link.getAttribute("href").substring(1); // remove #
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" }); // smooth scroll
    });
  });
});

