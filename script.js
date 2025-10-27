// Get elements
const menuBtn = document.getElementById('mobile_menu_btn');
const menuOverlay = document.getElementById('menu_overlay');
const body = document.body;

// Toggle menu function
function toggleMenu() {
    menuOverlay.classList.toggle('active');
    body.classList.toggle('menu-open');
}

// Open menu when button is clicked
menuBtn.addEventListener('click', toggleMenu);

// Close menu when clicking the X (using event delegation)
menuOverlay.addEventListener('click', function(e) {
    // Close if clicking the overlay itself or the pseudo-element area
    if (e.target === menuOverlay) {
        toggleMenu();
    }
});

// Close menu when clicking a link
const menuLinks = menuOverlay.querySelectorAll('.nav-link');
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        toggleMenu();
    });
});

// Close menu on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
        toggleMenu();
    }
});


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.smooth-float').forEach(el => {
    observer.observe(el);
});