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
const url = 'https://designsbydarlene.github.io/gotsport-presentation.pdf';

let pdfDoc = null,
    pageNum = 1,
    pageRendering = false,
    pageNumPending = null,
    canvas = document.getElementById('pdf-canvas'),
    ctx = canvas.getContext('2d');

// Set worker source
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// Render a given page number
function renderPage(num) {
  pageRendering = true;
  pdfDoc.getPage(num).then(function(page) {
    const viewport = page.getViewport({ scale: 1.5 });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: ctx,
      viewport: viewport
    };
    const renderTask = page.render(renderContext);

    renderTask.promise.then(function() {
      pageRendering = false;
      if (pageNumPending !== null) {
        renderPage(pageNumPending);
        pageNumPending = null;
      }
    });
  });

  document.getElementById('page-num').textContent = num;
}

// Queue a page render
function queueRenderPage(num) {
  if (pageRendering) {
    pageNumPending = num;
  } else {
    renderPage(num);
  }
}

// Navigation
document.getElementById('prev').addEventListener('click', function() {
  if (pageNum <= 1) return;
  pageNum--;
  queueRenderPage(pageNum);
});

document.getElementById('next').addEventListener('click', function() {
  if (pageNum >= pdfDoc.numPages) return;
  pageNum++;
  queueRenderPage(pageNum);
});

// Load the PDF
pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
  pdfDoc = pdfDoc_;
  document.getElementById('page-count').textContent = pdfDoc.numPages;
  renderPage(pageNum);
});
