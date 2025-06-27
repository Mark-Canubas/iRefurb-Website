
// Page Navigation
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    // Show page function
    function showPage(pageId) {
        pages.forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(pageId).classList.add('active');

        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === pageId) {
                link.classList.add('active');
            }
        });

        // Close mobile menu
        navLinksContainer.classList.remove('active');
    }

    // Navigation click handler
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            showPage(this.dataset.page);
            window.scrollTo(0, 0);
        });
    });

    // Mobile menu toggle
    mobileToggle.addEventListener('click', function () {
        navLinksContainer.classList.toggle('active');
    });

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Button page navigation
    const pageButtons = document.querySelectorAll('[data-page]');
    pageButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (this.dataset.page) {
                showPage(this.dataset.page);
                window.scrollTo(0, 0);
            }
        });
    });
});
