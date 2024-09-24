document.addEventListener('DOMContentLoaded', () => {
    const categoriesContainer = document.getElementById('categories');
    if (categoriesContainer) {
        fetch('./index/categories.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                categoriesContainer.innerHTML = html; // Insert the fetched HTML
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    } else {
        console.error('Categories container not found');
    }
});

// JavaScript to enable drag and scroll functionality
document.addEventListener('DOMContentLoaded', () => {
    const categoriesContainer = document.getElementById('categories');
    if (categoriesContainer) {
        fetch('./index/categories.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                categoriesContainer.innerHTML = html; // Insert the fetched HTML

                // After the HTML is inserted, initialize the drag functionality
                const categoriesRow = document.getElementById('categoriesRow');
                if (categoriesRow) {
                    initDragFunctionality(categoriesRow);
                } else {
                    console.error('Categories row not found after HTML insertion');
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    } else {
        console.error('Categories container not found');
    }
});

// Function to initialize drag and scroll functionality
function initDragFunctionality(categoriesRow) {
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
        if (!isDown) return; // stop the function from running if not dragging
        e.preventDefault(); // prevent default behavior
        const x = e.pageX - categoriesRow.offsetLeft;
        const walk = (x - startX) * 2; // scroll faster
        categoriesRow.scrollLeft = scrollLeft - walk;
    });
}
