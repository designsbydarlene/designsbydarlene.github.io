/* Fullscreen nav */
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
    
/* Dynamically Load Nav */
// Function to load an HTML file into a specified element
function loadNav() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'nav.html', true); // 'nav.html' is the external navigation file
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('nav-placeholder').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

// Call the function to load the navigation
loadNav();
