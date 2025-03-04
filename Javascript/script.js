function checkResolution() {
    var column3 = document.getElementById('column3');
    var avatar = document.getElementById('avatar');

    if (window.innerWidth <= 768) {
        column3.style.display = 'none';
    } else {
        column3.style.display = 'block';
    }
}

// Check resolution on load and resize
window.addEventListener('resize', checkResolution);
window.addEventListener('load', checkResolution);

// Add to your script.js
document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navMenu = document.querySelector('.navigationbar');
    const navItems = document.querySelectorAll('.navigationbar li');

    // Toggle menu
    burgerMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        burgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu
    function closeMenu() {
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
    }

    // Click outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !burgerMenu.contains(e.target)) {
            closeMenu();
        }
    });

    // Click on nav items
    navItems.forEach(item => {
        item.addEventListener('click', closeMenu);
    });

    // Resize handler
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) closeMenu();
    });
});