document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.cat-scroll-container');

    if (scrollContainer) {
        // Horizontal scrolling with mouse wheel
        scrollContainer.addEventListener('wheel', (event) => {
            event.preventDefault();
            scrollContainer.scrollLeft += event.deltaY; // Scroll horizontally using mouse wheel
        });

        // Touch scrolling for mobile
        let startX, isDragging = false;

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
            if (!isDragging) return;
            const distanceX = mouseStartX - event.clientX;
            scrollContainer.scrollLeft += distanceX;
            mouseStartX = event.clientX;
        });

        scrollContainer.addEventListener('mouseup', () => {
            isDragging = false; // End dragging
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