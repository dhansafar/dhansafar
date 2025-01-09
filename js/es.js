// Define the URL for the API endpoint
const apiUrl = 'https://dhansafar-web-api.vercel.app/api/visitor';  // Adjust this if the API is hosted elsewhere

// Function to track a new visitor
function trackVisitor() {
  // Make the POST request using fetch without a body
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // You can still include this header
    },
  })
  .then(response => response.json())
  .then(data => {
  })
  .catch((error) => {
    // console.error('Error:', error);
  });
}

// Call the function to track the visitor
trackVisitor();

// Function to track the download when the APK link is clicked
function trackDownload() {
  // Define the URL for tracking the download
  const trackDownloadUrl = 'https://dhansafar-web-api.vercel.app/api/track-download';  // Adjust to match your backend URL
  // Make a POST request to track the download
  fetch(trackDownloadUrl, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json', // Ensure the request is in JSON format
      },
  })
      .then(response => response.json())
      .then(data => {
          // console.log('Download tracked:', data);  // Log the response for debugging
      })
      .catch((error) => {
          // console.error('Error tracking download:', error);  // Handle any errors
      });
}