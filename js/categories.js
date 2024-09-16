// JavaScript to enable drag and scroll functionality
const categoriesRow = document.getElementById('categoriesRow');

let isDown = false;
let startX;
let scrollLeft;

categoriesRow.addEventListener('mousedown', (e) => {
    isDown = true;
    categoriesRow.classList.add('active');
    startX = e.pageX - categoriesRow.offsetLeft;
    scrollLeft = categoriesRow.scrollLeft;
});

categoriesRow.addEventListener('mouseleave', () => {
    isDown = false;
    categoriesRow.classList.remove('active');
});

categoriesRow.addEventListener('mouseup', () => {
    isDown = false;
    categoriesRow.classList.remove('active');
});

categoriesRow.addEventListener('mousemove', (e) => {
    if (!isDown) return; // stop the fn from running
    e.preventDefault(); // prevent default behavior
    const x = e.pageX - categoriesRow.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast
    categoriesRow.scrollLeft = scrollLeft - walk;
});
