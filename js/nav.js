/* Fullscreen nav */
crossorigin="use-credentials"
const hamburgerIcon = document.getElementById('hamburger-icon');
    const fullscreenMenu = document.getElementById('fullscreen-menu');

    hamburgerIcon.addEventListener('click', function() {
        // Toggle classes for the hamburger icon and fullscreen menu
        hamburgerIcon.classList.toggle('open');
        fullscreenMenu.classList.toggle('open-menu');

        // Add or remove the open-menu class to the body for styling changes
        if (fullscreenMenu.classList.contains('open-menu')) {
            document.body.classList.add('open-menu');
        } else {
            document.body.classList.remove('open-menu');
        }
    });
    