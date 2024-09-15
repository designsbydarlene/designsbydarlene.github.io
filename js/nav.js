// loadNav.js
fetch('nav.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('nav-placeholder').innerHTML = data;

        // Now that the nav HTML is loaded, we can initialize the event listeners
        initializeNav();

        // Find active link after the navigation is loaded
        findActiveLink();
    })
    .catch(error => console.error('Error loading navigation:', error));

// Function to initialize event listeners for the navigation
function initializeNav() {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const fullscreenMenu = document.getElementById('fullscreen-menu');

    if (hamburgerIcon && fullscreenMenu) {
        hamburgerIcon.addEventListener('click', function() {
            hamburgerIcon.classList.toggle('open');
            fullscreenMenu.classList.toggle('open-menu');

            if (fullscreenMenu.classList.contains('open-menu')) {
                document.body.classList.add('open-menu');
            } else {
                document.body.classList.remove('open-menu');
            }
        });
    }
}

// Function to find and highlight the active link
function findActiveLink() {
    const currentLocation = window.location.href;

    // Select all links in the fullscreen menu
    const links = document.querySelectorAll('.fullscreen-menu a');

    links.forEach(link => {
        // Get the href attribute of the link
        const linkHref = link.getAttribute('href');

        // Create an absolute URL for comparison
        const absoluteLinkHref = linkHref.startsWith('http') ? linkHref : window.location.origin + '/' + linkHref;

        // Check if current location matches the link href
        if (absoluteLinkHref === currentLocation || 
            (currentLocation === `${window.location.origin}/index.html` && linkHref === 'index.html')) {
            link.classList.add('active'); // Add active class to current link
        }
    });

    // Debugging logs
    console.log('Current Location:', currentLocation);
}

// Make sure to call findActiveLink when the navigation is injected
