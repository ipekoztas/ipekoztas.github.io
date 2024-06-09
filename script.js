function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Close the popup when the user clicks outside of it
window.onclick = function(event) {
  var popup = document.getElementById("popup");
  if (event.target == popup) {
    popup.style.display = "none";
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Initialize dark mode state based on current state
document.addEventListener("DOMContentLoaded", () => {
  if (document.body.classList.contains("dark-mode")) {
    document.querySelector(".switch").classList.add("dark-mode");
  }
});

document.getElementById("dark-mode-button").addEventListener("click", toggleDarkMode);
