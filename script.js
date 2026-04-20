const modal = document.getElementById("contactModal");
const btn = document.getElementById("hireBtn");
const closeBtn = document.getElementById("closeModal");

// Open modal when clicking the Hire Me button
btn.onclick = function (e) {
  e.preventDefault();
  modal.style.display = "block";
};

// Close modal when clicking the X
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Close modal when clicking outside the modal box
window.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

// Mobile menu toggle
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}