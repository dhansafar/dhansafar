// Function to open the popup
function openPopup() {
    document.getElementById('popup').style.display = 'flex'; // Display popup
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none'; // Hide popup
}

// Event listener for the close button
document.addEventListener('DOMContentLoaded', function () {
    // Make sure the button exists before attaching event listener
    const closeButton = document.getElementById('close-btn');
    if (closeButton) {
        closeButton.addEventListener('click', function () {
            closePopup(); // Close popup when close button is clicked
        });
    }

    // Simulating the opening of the popup after a delay
    setTimeout(function () {
        openPopup(); // Open popup after 1 second
    }, 1000);
});

// =================
// Countdown Timer Logic
const targetDate = new Date("January 10, 2025 17:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown-timer").innerHTML = "<h2>We have launched!</h2>";
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        updateNumber("days", days);
        updateNumber("hours", hours);
        updateNumber("minutes", minutes);
        updateNumber("seconds", seconds);
    }
}

function updateNumber(unit, value) {
    const unitElement = document.getElementById(`${unit}-number`);

    // Check if the element exists
    if (unitElement) {
        const formattedValue = formatTime(value);

        if (unitElement.textContent !== formattedValue) {
            unitElement.textContent = formattedValue;
            unitElement.classList.add("flip");

            // Remove flip class after animation ends
            setTimeout(() => {
                unitElement.classList.remove("flip");
            }, 500);
        }
    }
}


function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();  // Call once to set initial values
