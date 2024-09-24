document.addEventListener('DOMContentLoaded', () => {
    const titlePlaceholder = document.getElementById('title-placeholder');

    // Function to load title container content
    const loadTitleContainers = async () => {
        try {
            // Load the second title container
            let response2 = await fetch('./index/title.html');
            let content2 = await response2.text();
            titlePlaceholder.insertAdjacentHTML('beforeend', content2);

            // Call the function to attach hover events after content has been loaded
            attachHoverEvents();
        } catch (error) {
            console.error('Error loading title containers:', error);
        }
    };

    const attachHoverEvents = () => {
        const textContainer = document.querySelector('.text-container');
        const gifElement = document.getElementById('overlay-gif');
        const gifSrc = 'https://designsbydarlene.github.io/images/circle-3.gif'; // Your GIF URL

        if (textContainer && gifElement) {
            textContainer.addEventListener('mouseenter', function() {
                gifElement.src = gifSrc + '?t=' + new Date().getTime(); // Reload GIF with a unique URL
                gifElement.style.display = 'block'; // Show the GIF
            });

            textContainer.addEventListener('mouseleave', function() {
                gifElement.style.display = 'none'; // Hide the GIF
            });
        }
    };

    // Call the function to load content
    loadTitleContainers();
});
