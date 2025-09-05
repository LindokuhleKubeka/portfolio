// Run code after the page fully loads
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio site loaded!");

  // ===== Typewriter Effect for Header =====
  const header = document.querySelector("header h1");
  const headerText = "Welcome to My Portfolio 👾";
  let i = 0;

  function typeWriter() {
    if (i < headerText.length) {
      header.textContent += headerText.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  header.textContent = ""; // Clear text
  typeWriter();

  // ===== Smooth Scroll & Highlight Navigation =====
  const navLinks = document.querySelectorAll("header nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      targetSection.scrollIntoView({ behavior: "smooth" });

      // Highlight clicked link
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // ===== Reveal Sections on Scroll =====
  const sections = document.querySelectorAll("section");
  const revealOnScroll = () => {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight - 100) {
        section.classList.add("visible");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run once on load

  // ===== Easter Egg: Click on Name =====
  const name = document.querySelector("#about strong");
  name.addEventListener("click", () => {
    alert("✨ Thanks for checking out my portfolio! Keep exploring 🚀");
  });
});

