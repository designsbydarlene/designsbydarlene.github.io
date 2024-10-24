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
// Access the CSS variable in JavaScript and apply it to the img src
document.addEventListener('DOMContentLoaded', () => {
    const gifElement = document.getElementById('overlay-gif');

    // Access the --gif-circle-1-index from the :root
    const rootStyles = getComputedStyle(document.documentElement);
    let gifSrc = rootStyles.getPropertyValue('--gif-circle-1-index').trim();

    // Remove "url()" part from the variable if it has it
    gifSrc = gifSrc.replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');

    // Set the img src dynamically
    gifElement.src = gifSrc;
});

    const attachHoverEvents = () => {
        const textContainers = document.querySelectorAll('.text-container');
    
        // Access the --gif-url from the :root element
        const rootStyles = getComputedStyle(document.documentElement);
        let gifSrc = rootStyles.getPropertyValue('--gif-circle-1-index').trim();
    
        // Remove the "url()" part from the variable value (if present)
        gifSrc = gifSrc.replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');
    
        // Loop through all text containers and attach hover events
        textContainers.forEach((textContainer) => {
            const gifElement = textContainer.querySelector('.overlay-gif');
            if (gifElement) {
                textContainer.addEventListener('mouseenter', function() {
                    gifElement.src = gifSrc + '?t=' + new Date().getTime(); // Reload GIF with a unique URL
                    gifElement.style.display = 'block'; // Show the GIF
                });
    
                textContainer.addEventListener('mouseleave', function() {
                    gifElement.style.display = 'none'; // Hide the GIF
                });
            }
        });
    };
    

    // Call the function to load content
    loadTitleContainers();
});
