document.addEventListener("DOMContentLoaded", function () {
		const toggles = document.querySelectorAll(".dropdown-toggle");

		toggles.forEach(toggle => {
			toggle.addEventListener("click", function (e) {
				e.preventDefault(); // Prevent page jump
				const dropdown = this.closest(".dropdown");
				dropdown.classList.toggle("open");
			});
		});
    });
document.querySelector('.portfolio-trigger').addEventListener('click', function(e) {
  e.preventDefault(); // prevent page jump
  e.stopPropagation();
  this.parentElement.classList.toggle('active');
});

/* modals */
// Open modal
document.querySelectorAll('.open-modal').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    const modalId = this.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
});

// Close modal
document.querySelectorAll('.modal .close').forEach(button => {
  button.addEventListener('click', function () {
    this.closest('.modal').style.display = 'none';
  });
});

// Close modal when clicking outside
window.addEventListener('click', function (event) {
  document.querySelectorAll('.modal').forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// Image switching logic per modal
document.querySelectorAll('.modal-thumbnail-grid .thumb').forEach(thumb => {
  thumb.addEventListener('click', function () {
    const targetId = this.getAttribute('data-target');
    const mainImg = document.getElementById(targetId);
    if (mainImg) {
      mainImg.src = this.src;
      mainImg.alt = this.alt;
    }
  });
});

