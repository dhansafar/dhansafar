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
