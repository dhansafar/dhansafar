// JavaScript for the animated download counter
let downloadCount = document.getElementById('downloadCount');
let count = 0;
let target = 200; // Target number (can be dynamic if needed)

function animateCounter() {
    let interval = setInterval(function() {
        if (count < target) {
            count++;
            downloadCount.textContent = count;
        } else {
            clearInterval(interval);
        }
    }, 5); // Adjust speed of increment (in ms)
}

// Start the counter animation on page load
window.onload = animateCounter;


// Define the URL for tracking the download
const trackDownloadUrl = 'https://dhansafar-web-api.vercel.app/api/track-download';  // Adjust to match your backend URL

// Function to track the download when the APK link is clicked
function trackDownload() {
    // Make a POST request to track the download
    fetch(trackDownloadUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Ensure the request is in JSON format
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log('Download tracked:', data);  // Log the response for debugging
    })
    .catch((error) => {
        console.error('Error tracking download:', error);  // Handle any errors
    });
}
