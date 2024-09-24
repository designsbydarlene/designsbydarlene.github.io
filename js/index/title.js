document.addEventListener('DOMContentLoaded', () => {
    const titlePlaceholder = document.getElementById('title-placeholder');

    // Function to load title container content
    const loadTitleContainers = async () => {
        try {
            // Load the second title container
            let response2 = await fetch('./index/title.html');
            let content2 = await response2.text();
            titlePlaceholder.insertAdjacentHTML('beforeend', content2);
        } catch (error) {
            console.error('Error loading title containers:', error);
        }
    };

    // Call the function to load content
    loadTitleContainers();
});
document.addEventListener('DOMContentLoaded', function() {
    const gifElement = document.getElementById('hover-gif');
    
    gifElement.addEventListener('mouseenter', function() {
        const currentSrc = '../images/circle.gif'; // Your original GIF source
        const newSrc = currentSrc + '?t=' + new Date().getTime(); // Append a timestamp to force reload
        gifElement.src = newSrc; // Reset the src with a unique URL to reload the GIF
    });
});