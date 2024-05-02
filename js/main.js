document.addEventListener('DOMContentLoaded', function() {
    const navIcon = document.getElementById('nav-icon1');

    navIcon.addEventListener('click', function() {
        this.classList.toggle('open');
    });
});
