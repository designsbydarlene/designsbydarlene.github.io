document.addEventListener('DOMContentLoaded', () => {
    const recentWorksPlaceholder = document.getElementById('recent-works-placeholder');

    // Function to load recent works content and initialize drag functionality
    const loadRecentWorks = async () => {
        try {
            console.log('Loading recent works...');
            let response = await fetch('./index/recent-works.html');
            let content = await response.text();
            recentWorksPlaceholder.insertAdjacentHTML('beforeend', content);
            initDragFunctionality();
        } catch (error) {
            console.error('Error loading recent works:', error);
        }
    };

    // Function to initialize drag functionality
    const initDragFunctionality = () => {
        const scrollContainer = recentWorksPlaceholder.querySelector('.cat-scroll-container');
        if (!scrollContainer) {
            console.error('Scroll container not found!');
            return;
        }
        console.log('Scroll container found:', scrollContainer);

        let startX, isDragging = false;

        // Mouse drag functionality
        scrollContainer.addEventListener('mousedown', (event) => {
            startX = event.clientX;
            isDragging = true;
            scrollContainer.style.cursor = 'grabbing';
            event.preventDefault(); // Prevent text selection and other behaviors
        });

        scrollContainer.addEventListener('mousemove', (event) => {
            if (!isDragging) return;
            const distanceX = startX - event.clientX;
            scrollContainer.scrollLeft += distanceX;
            startX = event.clientX;
        });

        scrollContainer.addEventListener('mouseup', () => {
            isDragging = false;
            scrollContainer.style.cursor = 'grab';
        });

        scrollContainer.addEventListener('mouseleave', () => {
            isDragging = false;
            scrollContainer.style.cursor = 'grab';
        });

        // Touch drag functionality for mobile
        scrollContainer.addEventListener('touchstart', (event) => {
            startX = event.touches[0].clientX;
            isDragging = true;
        }, { passive: true });

        scrollContainer.addEventListener('touchmove', (event) => {
            if (!isDragging) return;
            const touch = event.touches[0];
            const distanceX = startX - touch.clientX;
            scrollContainer.scrollLeft += distanceX;
            startX = touch.clientX;
            event.preventDefault(); // Prevent scrolling the page during touch drag
        }, { passive: false });

        scrollContainer.addEventListener('touchend', () => {
            isDragging = false;
        });
        
        // Prevent text selection during drag
        scrollContainer.addEventListener('dragstart', (event) => {
            event.preventDefault();
        });
    };

    loadRecentWorks();
});
