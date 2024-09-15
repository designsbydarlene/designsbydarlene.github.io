// loadNav.js
fetch('nav.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav-placeholder').innerHTML = data;

        // Now that the nav HTML is loaded, we can initialize the event listeners
        initializeNav();
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
