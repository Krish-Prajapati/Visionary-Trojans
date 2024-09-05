// Function to open the sidebar
function openSidebar() {
    document.getElementById("mySidebar").style.width = "250px";
    document.body.classList.add("active-sidebar");
}

// Function to close the sidebar
function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
    document.body.classList.remove("active-sidebar");
}

// Function to handle active class switching
const links = document.querySelectorAll('.sidebar a');

links.forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'active' class from all links
        links.forEach(link => link.classList.remove('active'));

        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});
//Time Tracker
let timerInterval;
let seconds = 0;
let isPaused = true;

function startTimer() {
    if (isPaused) {
        isPaused = false;
        timerInterval = setInterval(updateTimer, 1000);
    }
}

function pauseTimer() {
    isPaused = true;
    clearInterval(timerInterval);
}

function updateTimer() {
    seconds++;
    const minutes = Math.floor(seconds / 60);
    const displaySeconds = seconds % 60;

    document.getElementById('timer').innerText =
        (minutes < 10 ? '0' : '') + minutes + ':' + (displaySeconds < 10 ? '0' : '') + displaySeconds;

    // Update the progress bar (this is just a basic simulation)
    const progressBar = document.getElementById('progressBar');
    progressBar.value = (seconds % 100); // Loops progress bar after 100 seconds
}
