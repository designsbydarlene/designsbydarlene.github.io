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

