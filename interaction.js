
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle scroll events
    function handleScroll() {
        const article = document.querySelector('.articleone');

        if (isInViewport(article)) {
            article.classList.add('active');
        }
    }

    // Add a scroll event listener to trigger the animation
    window.addEventListener('scroll', handleScroll);

    // Initial check in case the element is already in the viewport on page load
    handleScroll();


    
                                    
    
