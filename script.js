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
  const darkModeButton = document.getElementById("dark-mode-button");
  if (document.body.classList.contains("dark-mode")) {
    darkModeButton.classList.add("dark-mode");
  }
  darkModeButton.addEventListener("click", toggleDarkMode);
});

