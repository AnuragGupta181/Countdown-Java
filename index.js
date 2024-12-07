const endDate = new Date("10 Dec, 2024 00:00:00").getTime(); // Replace with your target date
const startDate = new Date().getTime(); // Start time

let countdown = setInterval(function updateTimer() {
    const now = new Date().getTime(); // Current time
    const distancePending = endDate - now; // Time remaining

    // If countdown is complete
    if (distancePending < 0) {
        clearInterval(countdown);
        document.getElementById("progress-bar").style.width = "100%"; // Set progress bar to full
        return;
    }

    // Calculate time units
    const days = Math.floor(distancePending / (24 * 60 * 60 * 1000));
    const hrs = Math.floor((distancePending % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const min = Math.floor((distancePending % (60 * 60 * 1000)) / (60 * 1000));
    const sec = Math.floor((distancePending % (60 * 1000)) / 1000);

    // Update countdown display
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hrs;
    document.getElementById("minutes").textContent = min;
    document.getElementById("seconds").textContent = sec;

    // Calculate progress percentage
    const totalDistance = endDate - startDate; // Total time for the countdown
    const distanceCovered = now - startDate; // Time elapsed so far
    const percentDistance = Math.min((distanceCovered / totalDistance) * 100, 100); // Cap at 100%

    // Update progress bar
    document.getElementById("progress-bar").style.width = percentDistance + "%";

    console.log(`Progress: ${percentDistance}%`); // Debug in the console
}, 1000);
