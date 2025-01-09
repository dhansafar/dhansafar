// Add the CSS directly in the JavaScript file
const style = document.createElement('style');
style.innerHTML = `
/* Style for the Go to Top button */
.scroll-to-top-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #502D8A; /* Dark purple background */
    color: white;
    border: none;
    border-radius: 50%;
    padding: 15px;
    font-size: 18px;
    cursor: pointer;
    display: none; /* Initially hidden */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    transition: background-color 0.3s ease;
}

/* Hover effect for the button */
.scroll-to-top-btn:hover {
    background-color: #3e2370; /* Darker purple on hover */
}

/* FontAwesome Icon style */
.scroll-to-top-btn i {
    font-size: 18px;
}
`;
document.head.appendChild(style);

// Create the button element
let scrollToTopBtn = document.createElement('button');
scrollToTopBtn.classList.add('scroll-to-top-btn');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';  // FontAwesome Icon for the button

// Append the button to the body
document.body.appendChild(scrollToTopBtn);

// Show or hide the button based on scroll position
window.onscroll = function() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        scrollToTopBtn.style.display = "block";  // Show button when scrolled down 100px
    } else {
        scrollToTopBtn.style.display = "none";  // Hide button when at the top
    }
};

// Scroll smoothly to the top when the button is clicked
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Smooth scrolling
    });
});
