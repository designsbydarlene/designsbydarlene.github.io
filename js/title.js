// Function to resize font based on the parent container's width
function resizeFont() {
    const leftColumn = document.querySelector('.title-left-column');
    const responsiveText = leftColumn.querySelector('.responsive-text');
    const fontLarger = leftColumn.querySelector('.font-larger');

    // Get the width of the left column
    const leftColumnWidth = leftColumn.offsetWidth;

    // Set the font size to fit the width of the left column
    // Using a ratio to determine the font size
    const fontSize = leftColumnWidth * 0.1; // Adjust this multiplier as needed

    // Apply the calculated font size
    responsiveText.style.fontSize = `${fontSize}px`;
    fontLarger.style.fontSize = `${fontSize}px`; // You can adjust this if you want a different size
}

// Initial call to set font size
resizeFont();

// Add event listener for window resize to adjust font size dynamically
window.addEventListener('resize', resizeFont);
