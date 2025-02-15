// Add scroll event listener to change navbar style
window.addEventListener('scroll', function() {
    const header = document.getElementById('navbar');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    this.reset();
});

// Toggle Mobile Menu
const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('.nav-list');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active'); 
    navList.classList.toggle('active');
});

// Close Menu on Click Outside
document.addEventListener('click', (e) => {
    if (!menuIcon.contains(e.target) && !navList.contains(e.target)) {
        menuIcon.classList.remove('active'); 
        navList.classList.remove('active');
    }
});
