function updateClock() {
    const timerElement = document.getElementById('timer');
    const now = new Date();

    // Format the date and time as a string
    const dateTimeString = now.toLocaleString();

    // Update the timer element with the current date and time
    timerElement.textContent = dateTimeString;
}

// Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);
