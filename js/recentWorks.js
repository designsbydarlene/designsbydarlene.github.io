// Drag effect
document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.cat-scroll-container');

    if (scrollContainer) {
        // Variables for drag functionality
        let startX, isDragging = false;

        // Touch dragging for mobile
        scrollContainer.addEventListener('touchstart', (event) => {
            startX = event.touches[0].clientX;
            isDragging = true; // Start dragging
        });

        scrollContainer.addEventListener('touchmove', (event) => {
            if (!isDragging) return;
            const touch = event.touches[0];
            const distanceX = startX - touch.clientX;
            scrollContainer.scrollLeft += distanceX;
            startX = touch.clientX;
        });

        scrollContainer.addEventListener('touchend', () => {
            isDragging = false; // End dragging
        });

        // Mouse drag scrolling for desktop
        let mouseStartX;

        scrollContainer.addEventListener('mousedown', (event) => {
            mouseStartX = event.clientX;
            isDragging = true; // Start dragging
            scrollContainer.style.cursor = 'grabbing'; // Change cursor to grabbing
        });

        scrollContainer.addEventListener('mousemove', (event) => {
            if (!isDragging) return; // Prevent dragging if not clicked
            const distanceX = mouseStartX - event.clientX;
            scrollContainer.scrollLeft += distanceX;
            mouseStartX = event.clientX;
        });

        scrollContainer.addEventListener('mouseup', () => {
            isDragging = false; // End dragging
            scrollContainer.style.cursor = 'grab'; // Change cursor back
        });

        scrollContainer.addEventListener('mouseleave', () => {
            isDragging = false; // End dragging if mouse leaves the container
            scrollContainer.style.cursor = 'grab'; // Change cursor back
        });

        // Prevent text selection during drag
        scrollContainer.addEventListener('dragstart', (event) => {
            event.preventDefault();
        });

        // Set cursor style for better UX
        scrollContainer.style.cursor = 'grab';
    }
});

// Image hover effect
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.cat-image');

    images.forEach(image => {
        image.addEventListener('mouseenter', function () {
            image.style.transform = 'scale(1.1)'; // Scale the image up
        });

        image.addEventListener('mouseleave', function () {
            image.style.transform = 'scale(1)'; // Scale the image back down
        });
    });
});

// HTML snippet to be dynamically loaded
const recentWorksHTML = `
    <!-- Recent Work -->
    <div class="cat-scroll-container-header hide-desktop-tablet">
        <div class="cat-column-mobile">
            <h1 class="font-50">RECENT WORKS.</h1>
            <p class="font-30">Latest design projects -- web, graphics, and more.</p>
            <p>Drag or scroll to navigate.</p>
        </div>
    </div>
    <div class="cat-scroll-container">
        <div class="cat-column border-right">
            <a href="#">
                <div class="image-container">
                    <img src="./images/categories/web-thumbnail-4.webp" alt="Image description" class="scale-image">
                </div>
                <div class="text-content">
                    <h3 class="font-40">PATRICK FURNITURE & MATTRESS</h3>
                    <p>New contemporary style, color scheme, quality images.</p>
                </div>
            </a>
        </div>
        <div class="cat-column-first hide-mobile mr-20">
            <h1 class="font-50">RECENT WORKS.</h1>
            <p class="font-30">Latest design projects -- web, graphics, and more.</p>
            <p>Drag or scroll to navigate.</p>
        </div>
        <div class="cat-column border-left">
            <a href="#">
                <div class="image-container">
                    <img src="./images/categories/web-thumbnail.webp" alt="Image description" class="scale-image">
                </div>
                <div class="text-content">
                    <h3 class="font-40">AMERICAN HOME APPLIANCE</h3>
                    <p class="cat-p">New logo design, enhanced color scheme, improved user-experience.</p>
                </div>
            </a>
        </div>
        <div class="cat-column">
            <a href="#">
                <div class="image-container">
                    <img src="./images/categories/web-thumbnail-2.webp" alt="Image description" class="scale-image">
                </div>
                <div class="text-content">
                    <h3 class="font-40">MATTRESS CITY</h3>
                    <p class="cat-p">Establishing brand, new logo, custom icons, ease-of-use shopping experience.</p>
                </div>
            </a>
        </div>
        <div class="cat-column">
            <a href="#">
                <div class="image-container">
                    <img src="./images/categories/web-thumbnail-3.webp" alt="Image description" class="scale-image">
                </div>
                <div class="text-content">
                    <h3 class="font-40">WESTON'S APPLIANCE</h3>
                    <p class="cat-p">Reimagining current website, improve usability, adding CTAs.</p>
                </div>
            </a>
        </div>
    </div>
`;

// Function to load the recent works into the container
function loadRecentWorks() {
    const container = document.getElementById('recent-works-container');
    container.innerHTML = recentWorksHTML; // Set the HTML of the container
}

// Call the function to load recent works
loadRecentWorks();
