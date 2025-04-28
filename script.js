const loadingScreen = document.getElementById('loadingScreen');

// Hide the loading screen once the page is fully loaded
window.addEventListener('load', () => {
    loadingScreen.style.display = 'none';
    document.body.style.opacity = '1'; // Ensure the body is visible after loading
});

// Add a fade-out effect before navigating to a new page
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.href = href;
        }, 500); // Wait for the fade-out effect to complete
    });
});