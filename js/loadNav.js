function loadNav() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'nav.html', true); // Ensure 'nav.html' path is correct
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                document.getElementById('nav-placeholder').innerHTML = xhr.responseText;
            } else {
                console.error("Error loading navigation: " + xhr.status);
                document.getElementById('nav-placeholder').innerHTML = "<p>Navigation could not be loaded.</p>";
            }
        }
    };
    xhr.send();
}

loadNav();
