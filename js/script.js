// Mobile menu toggle functionality
document.getElementById('mobile-menu').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('active');
});
// Close mobile menu when any navigation link is clicked
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove the active class to close the menu
        document.querySelector('nav').classList.remove('active');
    });
});


// const images = document.querySelectorAll('.screenshot-image');
// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');
// let currentIndex = 0;

// // Function to update the slider and apply active class
// function updateSlider() {
//     images.forEach((img, index) => {
//         img.classList.remove('active', 'inactive');
//         if (index === currentIndex) {
//             img.classList.add('active');
//         } else {
//             img.classList.add('inactive');
//         }
//     });
//     document.querySelector('.slider-images').style.transform = `translateX(-${currentIndex * 330}px)`;
// }

// // Event listener for previous button
// prevBtn.addEventListener('click', () => {
//     if (currentIndex > 0) {
//         currentIndex--;
//     } else {
//         currentIndex = images.length - 1;
//     }
//     updateSlider();
// });

// // Event listener for next button
// nextBtn.addEventListener('click', () => {
//     if (currentIndex < images.length - 1) {
//         currentIndex++;
//     } else {
//         currentIndex = 0;
//     }
//     updateSlider();
// });

// // Initialize the slider
// updateSlider();

// Automatic slider
// setInterval(() => {
//     if (currentIndex < images.length - 1) {
//         currentIndex++;
//     } else {
//         currentIndex = 0;
//     }
//     updateSlider();
// }, 5000); // Change image every 5 seconds

// =================


function toggleAnswer(faqId) {
    const answerElement = document.getElementById(`faq-answer-${faqId}`);
    const iconElement = answerElement.previousElementSibling.querySelector('.faq-icon');

    // Toggle the answer visibility
    answerElement.classList.toggle('show');

    // Toggle the icon between plus and minus
    if (answerElement.classList.contains('show')) {
        iconElement.textContent = '-';
    } else {
        iconElement.textContent = '+';
    }
}
// =================

document.getElementById("newsletterForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("nw-email").value;
    // const name = document.getElementById("name").value;
    // const phoneNumber = document.getElementById("phone_number").value;
    // Validate required fields
    if (!email) {
        alert("Please fill out the email.");
        return;
    }

    // Prepare the data to be sent in the request
    const formData = {
        email: email,
    };

    try {
        // Send a POST request to the newsletter subscription API
        const response = await fetch('https://dhansafar-web-api.vercel.app/api/newsletter/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        // Handle the response from the API
        const data = await response.json();

        if (response.ok) {
            // Success: display a success message
            alert('You have successfully subscribed to the newsletter!');
            document.getElementById('newsletterForm').reset(); // Reset the form
        } else {
            // Error: display the error message from the API response
            alert(`Error: ${data.error || 'An error occurred. Please try again later.'}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while subscribing. Please try again later.');
    }

    // // Placeholder for API integration
    // fetch("https://dhansafar-user-api.vercel.app/api/inquiries", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         name: name,
    //         phone_number: phoneNumber,
    //     }),
    // })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         alert("Thank you for subscribing!");
    //         // Clear form inputs
    //         document.getElementById("newsletterForm").reset();
    //     })
    //     .catch((error) => {
    //         console.error("Error:", error);
    //         alert("Something went wrong. Please try again later.");
    //     });
});

// ========

document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("co-name").value;
    const phoneNumber = document.getElementById("co-phone_number").value;
    const message = document.getElementById("co-message").value;
    // Placeholder for API integration

    // Validate required fields
    if (!name || !phoneNumber) {
        alert("Please fill out all required fields.");
        return;
    }

    // Create an object to hold the form data
    const formData = {
        name: name,
        phone_number: phoneNumber,
        message: message
    };
    // API endpoint to send the form data to
    const apiUrl = 'https://dhansafar-web-api.vercel.app/api/contacts'; // Replace with your actual API endpoint

    try {
        // Send a POST request to the API (Replace '/contacts' with the correct API endpoint if needed)
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        // Handle the response from the API
        const data = await response.json();

        if (response.ok) {
            // Success: display a success message
            alert('Your message has been sent successfully!');
            document.getElementById('contactForm').reset(); // Reset the form
        } else {
            // Error: display the error message from the API response
            alert(`Error: ${data.error || 'An error occurred. Please try again later.'}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while sending your message. Please try again later.');
    }
});

