const customCursor = document.getElementById('customCursor');

// Ensure the cursor is visible on page load
customCursor.style.opacity = '1';

// Update cursor position on mouse move
document.addEventListener('mousemove', (e) => {
    customCursor.style.top = `${e.clientY}px`;
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.opacity = '1'; // Ensure the cursor is visible
});

// Hide cursor when leaving the window
document.addEventListener('mouseleave', () => {
    customCursor.style.opacity = '0';
});

// Show cursor when entering the window
document.addEventListener('mouseenter', () => {
    customCursor.style.opacity = '1';
});

// Scale cursor on hover over interactive elements
document.querySelectorAll('a, .btn, button, img').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.style.transform = 'scale(2)';
    });
    element.addEventListener('mouseleave', () => {
        customCursor.style.transform = 'scale(1)';
    });
});
