document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const name = document.getElementById('cp-name').value;
    const phoneNumber = document.getElementById('cp-phone_number').value;
    const message = document.getElementById('cp-message').value;

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
