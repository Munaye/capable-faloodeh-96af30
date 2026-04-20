const modal = document.getElementById("contactModal");
const btn = document.getElementById("hireBtn");
const closeBtn = document.getElementById("closeModal");

// Open modal
if (btn) {
  btn.onclick = function (e) {
    e.preventDefault();
    modal.style.display = "block";
  };
}

// Close modal
if (closeBtn) {
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };
}

// Click outside modal
window.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

// Menu toggle (SAFE)
function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  if (nav) {
    nav.classList.toggle("active");
  }
}