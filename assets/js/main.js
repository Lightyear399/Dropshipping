// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');
            
            // Toggle answer visibility
            answer.classList.toggle('hidden');
            
            // Rotate icon
            icon.classList.toggle('transform');
            icon.classList.toggle('rotate-180');
        });
    });
    
    // Initialize Snipcart if on products page
    if (window.location.pathname.includes('products.html')) {
        // Snipcart will auto-initialize from their script
        console.log('Products page loaded - Snipcart ready');
    }
});

// Simple form validation
function validateForm(form) {
    const email = form.querySelector('input[type="email"]');
    if (email && !email.value.includes('@')) {
        alert('Please enter a valid email address');
        return false;
    }
    return true;
}