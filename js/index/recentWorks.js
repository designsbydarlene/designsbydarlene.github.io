document.addEventListener('DOMContentLoaded', () => {
    const titlePlaceholder = document.getElementById('recent-works-placeholder');

    // Function to load title container content
    const loadTitleContainers = async () => {
        try {
            // Load the second title container
            let response2 = await fetch('./index/recent-works.html');
            let content2 = await response2.text();
            titlePlaceholder.insertAdjacentHTML('beforeend', content2);
        } catch (error) {
            console.error('Error loading title containers:', error);
        }
    };

    // Call the function to load content
    loadTitleContainers();
});

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



// Function to load the recent works into the container
function loadRecentWorks() {
    const container = document.getElementById('recent-works-container');
    container.innerHTML = recentWorksHTML; // Set the HTML of the container
}

// Call the function to load recent works
loadRecentWorks();
