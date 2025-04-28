// Function to toggle the CSS file
function toggleTheme() {
    const linkElement = document.querySelector('link[rel="stylesheet"]');
    if (linkElement) {
        linkElement.href = linkElement.href.includes('spring.css') ? 'style.css' : 'spring.css';
    }
}

// Add event listener to the toggle button
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('themeToggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleTheme);
    }
});
