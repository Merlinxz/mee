document.addEventListener("DOMContentLoaded", function() {
    // Date from the past
    const pastDate = new Date(2008, 5, 23); // Set

    // Current date
    const currentDate = new Date();

    // Calculate time and days
    const timeDiff = currentDate - pastDate;
    const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // Calculate age
    const age = Math.floor(dayDiff / 365);

    // Display on the web page
    document.getElementById("daysPassed").innerText = `${dayDiff} days`;
    document.getElementById("age").innerText = `${age}`;
});