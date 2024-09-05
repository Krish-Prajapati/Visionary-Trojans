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

    // // Update the progress bar (this is just a basic simulation)
    // const progressBar = document.getElementById('progressBar');
    // progressBar.value = (seconds % 100); // Loops progress bar after 100 seconds
}
// const tasks = ["Task 1", "Task 2", "Task 3"]; // Example tasks array
//     const taskList = document.getElementById('task-list');
//     const noTasksMessage = document.getElementById('no-tasks');

//     function displayTasks() {
//         taskList.innerHTML = ''; // Clear existing tasks
//         if (tasks.length === 0) {
//             noTasksMessage.style.display = 'block'; // Show the 'well done' message
//         } else {
//             noTasksMessage.style.display = 'none'; // Hide the 'well done' message
//             tasks.forEach((task, index) => {
//                 const taskElement = document.createElement('div');
//                 taskElement.className = 'task';
//                 taskElement.innerText = task;
//                 taskList.appendChild(taskElement);
//             });
//         }
//     }

//     document.getElementById('pull-button').addEventListener('click', function() {
//         tasks.pop(); // Simulate task completion
//         displayTasks();
//     });

//     displayTasks(); // Initial display of tasks
