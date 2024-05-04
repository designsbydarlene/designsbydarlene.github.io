document.addEventListener('DOMContentLoaded', function() {
    const navIcon = document.getElementById('nav-icon1');

    navIcon.addEventListener('click', function() {
        this.classList.toggle('open');
    });
});

/* web design */

function changeMainImage(element) {
    var imageUrl = element.getAttribute('src');
    var modalImage = document.getElementById('modalImage');
    var mainImage = document.getElementById('main-image').querySelector('img');

    modalImage.src = imageUrl;
    mainImage.src = imageUrl;
    mainImage.setAttribute('data-bs-toggle', 'modal');
    mainImage.setAttribute('data-bs-target', '#imageModal');
    document.querySelector('.zoom-icon').setAttribute('data-bs-toggle', 'modal');
    document.querySelector('.zoom-icon').setAttribute('data-bs-target', '#imageModal');
}

$(document).ready(function () {
    $('.gallery-img, #main-image').click(function () {
        var imageUrl = $(this).attr('src'); // Get the URL of the clicked image
        var imageAlt = $(this).attr('alt'); // Get the alt text of the clicked image
        $('#modalImage').attr('src', imageUrl); // Set the src attribute of the modal image
        $('#imageModalLabel').text(imageAlt); // Set the text content of the modal title
        $('#imageModal').modal('show'); // Show the modal
    });
});

