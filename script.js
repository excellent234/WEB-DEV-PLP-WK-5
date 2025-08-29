// --- Part 1: JavaScript Building Blocks & Conditionals ---
// My goal here is to understand how JavaScript handles data and makes decisions,
// much like I make decisions about task priorities.

// 1.1 Variable Declarations and Data Types
// I use 'const' for values that won't change, for unwavering constants in my duties.
const stewardName = "Excellent Anjorin"; // A string: my identity.
const vesselName = "The Orderly Voyager"; // Another string, for the ship I meticulously manage.
let dailyTasksCompleted = 5; // A number: my variable daily count of completed tasks.
let isShiftActive = true; // A boolean: a simple true/false state of my work.

// console.log() is my internal log for debugging, much like my private notes.
console.log(`Steward Name: ${stewardName}`);
console.log(`Vessel: ${vesselName}`);
console.log(`Initial tasks completed: ${dailyTasksCompleted}`);
console.log(`Is shift active: ${isShiftActive}`);

// 1.2 Operators
// I use operators to perform calculations and comparisons, ensuring everything aligns precisely.
let plannedDuration = 30; // Minutes planned for a task.
let actualDuration = 28; // Minutes actually taken for the task.

// Arithmetic operator: calculating the difference.
let timeDifference = plannedDuration - actualDuration; // My variance.

// Comparison operator: checking if I was on time.
let isOnTime = actualDuration <= plannedDuration; // A boolean result.

// Logical operators: combining conditions for a more complex assessment.
let needsFollowUp = isOnTime && (timeDifference > 0); // If on time AND finished early, perhaps re-evaluate planning.

console.log(`Time difference (planned - actual): ${timeDifference} minutes`);
console.log(`Was the task on time? ${isOnTime}`);
console.log(`Does this task need follow-up for re-evaluation? ${needsFollowUp}`);

// 1.3 Conditionals (if/else) - My Decision-Making Process
// I use if/else statements to make decisions based on conditions, ensuring correct responses.
const punctualityResultElement = document.getElementById('punctualityResult');
const plannedDurationInput = document.getElementById('plannedDuration');
const actualDurationInput = document.getElementById('actualDuration');
const checkPunctualityBtn = document.getElementById('checkPunctualityBtn');

checkPunctualityBtn.addEventListener('click', () => {
    let planned = parseInt(plannedDurationInput.value); // I get the numbers from the input fields.
    let actual = parseInt(actualDurationInput.value);

    // I must ensure inputs are valid numbers before proceeding.
    if (isNaN(planned) || isNaN(actual) || planned <= 0 || actual <= 0) {
        punctualityResultElement.textContent = "Error: Please enter valid positive numbers for durations.";
        punctualityResultElement.style.color = "#dc3545"; // Red for errors.
        return; // I cease processing invalid input immediately.
    }

    let difference = planned - actual;

    if (difference > 0) {
        // If I finished early, that's efficient!
        punctualityResultElement.textContent = `Task completed ${difference} minutes early. Excellent punctuality! ✨`;
        punctualityResultElement.style.color = "#28a745"; // Green for positive results.
    } else if (difference < 0) {
        // If I was late, I must note the delay.
        punctualityResultElement.textContent = `Task was ${Math.abs(difference)} minutes late. Requires review. ⚠️`;
        punctualityResultElement.style.color = "#ffc107"; // Orange for caution.
    } else {
        // Exactly on time - perfect execution!
        punctualityResultElement.textContent = `Task completed exactly on time. Precise! ✅`;
        punctualityResultElement.style.color = "#007bff"; // Blue for precise neutrality.
    }
});


// --- Part 2: JavaScript Functions - The Heart of Reusability ---
// Functions allow me to define specific procedures that I can call upon repeatedly,
// just like my standard operating procedures.

// Custom Function 1: calculateTaskEffort()
// I use this function to calculate the 'effort' for a task, considering its duration and complexity.
function calculateTaskEffort(durationMinutes, complexityFactor = 1.0) {
    // I ensure inputs are numbers; precision is key.
    if (typeof durationMinutes !== 'number' || typeof complexityFactor !== 'number') {
        console.error("Error: Duration and complexity must be numbers.");
        return 0; // I return a neutral zero for invalid calculations.
    }
    // A simple calculation of total effort.
    const baseEffortUnits = durationMinutes * 0.5; // Each minute is half an effort unit.
    const totalEffort = baseEffortUnits * complexityFactor;
    return totalEffort; // I always return the calculated value for further use.
}

// Example usage of my calculateTaskEffort function.
let moppingEffort = calculateTaskEffort(45, 1.2); // Mopping for 45 mins, slightly complex.
let dustingEffort = calculateTaskEffort(20); // Dusting for 20 mins, default complexity.
console.log(`Mopping effort: ${moppingEffort.toFixed(2)} units`);
console.log(`Dusting effort: ${dustingEffort.toFixed(2)} units`);

// Custom Function 2: formatStewardReportEntry()
// This function meticulously formats an entry for my daily report log.
function formatStewardReportEntry(taskName, status, timestamp = new Date()) {
    // I ensure the timestamp is always correctly formatted.
    const formattedTime = timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    // I structure the report entry with utmost clarity.
    return `[${formattedTime}] Task: "${taskName}" - Status: ${status}.`;
}

// Example usage of my formatStewardReportEntry function.
let reportEntry1 = formatStewardReportEntry("Prepare breakfast service", "Completed");
let reportEntry2 = formatStewardReportEntry("Inspect cabin ventilation", "Pending review", new Date(2025, 7, 29, 14, 30)); // Specific timestamp.
console.log(reportEntry1);
console.log(reportEntry2);


// --- Part 3: JavaScript Loops - Embrace the Power of Repetition! ---
// Loops are essential for automating repetitive tasks, a steward's best friend for efficiency.

// My initial array of standard tasks.
let standardTasks = ["Polish brass", "Organize linen", "Resupply amenities", "Tidy lounge"];
const dynamicScheduleList = document.getElementById('dynamicScheduleList');
const addActivityBtn = document.getElementById('addActivityBtn');
const newActivityInput = document.getElementById('newActivity');
const generateScheduleBtn = document.getElementById('generateScheduleBtn');

// Loop Example 1: `for` loop to dynamically generate a task list in the HTML.
// This function will refresh my entire schedule list.
generateScheduleBtn.addEventListener('click', () => {
    generateDynamicSchedule();
});

function generateDynamicSchedule() {
    dynamicScheduleList.innerHTML = ''; // I clear the previous list to ensure only current tasks are displayed.

    for (let i = 0; i < standardTasks.length; i++) {
        const taskItem = document.createElement('li'); // I create a new list item for each task.
        taskItem.textContent = `${i + 1}. ${standardTasks[i]}`; // I number them sequentially.
        dynamicScheduleList.appendChild(taskItem); // I meticulously append it to my schedule list.
    }
}

// DOM Interaction: Adding new activity to the array and regenerating the list.
addActivityBtn.addEventListener('click', () => {
    const activity = newActivityInput.value.trim(); // I meticulously trim any unnecessary spaces.
    if (activity) { // Only if there's actual input.
        standardTasks.push(activity); // I add the new activity to my list.
        newActivityInput.value = ''; // I clear the input field, ready for the next entry.
        generateDynamicSchedule(); // I refresh my visible schedule immediately.
    } else {
        alert("Please enter an activity to add to the schedule."); // A direct alert for missing input.
    }
});

// Loop Example 2: `while` loop for a cleaning progress countdown.
const progressBar = document.getElementById('progressBar');
const progressStatus = document.getElementById('progressStatus');
const startProgressBtn = document.getElementById('startProgressBtn');

startProgressBtn.addEventListener('click', () => {
    simulateCleaningProgress(10); // I initiate a 10-step progress.
});

function simulateCleaningProgress(totalSteps) {
    let currentStep = 0;
    progressBar.style.width = '0%'; // I reset the progress bar to zero.
    progressStatus.textContent = 'Beginning cleaning sequence...';
    startProgressBtn.disabled = true; // I disable the button to prevent double-starts.

    // I use a setInterval to simulate progress over time, one step at a time.
    const progressInterval = setInterval(() => {
        if (currentStep < totalSteps) {
            currentStep++;
            let progress = (currentStep / totalSteps) * 100;
            progressBar.style.width = `${progress}%`; // I update the visual progress bar.
            progressStatus.textContent = `Cleaning in progress: Step ${currentStep} of ${totalSteps}...`;
            if (currentStep === totalSteps) {
                clearInterval(progressInterval); // I halt the interval once all steps are complete.
                progressStatus.textContent = 'Cleaning sequence completed. All spotless! ✨';
                startProgressBtn.disabled = false; // The button is now ready for a new cleaning cycle.
            }
        }
    }, 500); // Each step takes 500 milliseconds, for a measured pace.
}


// --- Part 4: Mastering the DOM with JavaScript ---
// This is where my JavaScript directly interacts with the webpage,
// allowing me to precisely manipulate what the user sees and experiences.

// DOM Interaction 1: Toggling Content Visibility
const toggleDetailBtn = document.getElementById('toggleDetailBtn');
const detailedStatus = document.getElementById('detailedStatus');

toggleDetailBtn.addEventListener('click', () => {
    // I meticulously check the current state and toggle the 'visible' class.
    if (detailedStatus.classList.contains('visible')) {
        detailedStatus.classList.remove('visible'); // I conceal the detailed report.
        toggleDetailBtn.textContent = 'Show Detailed Status';
    } else {
        detailedStatus.classList.add('visible'); // I reveal the detailed report.
        toggleDetailBtn.textContent = 'Hide Detailed Status';
    }
});

// DOM Interaction 2: Real-time Input Update
const reportDraftInput = document.getElementById('reportDraft');
const liveReportOutput = document.getElementById('liveReportOutput');

reportDraftInput.addEventListener('input', () => {
    // As the user types, I update the display immediately, for instant feedback.
    liveReportOutput.textContent = reportDraftInput.value;
});

// DOM Interaction 3: Creating Elements Dynamically (Log Entries)
const addLogEntryBtn = document.getElementById('addLogEntryBtn');
const logList = document.getElementById('logList');

addLogEntryBtn.addEventListener('click', () => {
    const newLogEntry = document.createElement('li'); // I create a new list item for each log entry.
    // I use my custom function to format the entry, ensuring consistency.
    newLogEntry.textContent = formatStewardReportEntry("System check", "Automated log", new Date());
    logList.prepend(newLogEntry); // I add new log entries at the top, like the most recent observation.

    // To prevent the list from growing indefinitely and maintaining order,
    // I only keep the last 5 entries, removing the oldest if necessary.
    while (logList.children.length > 5) {
        logList.removeChild(logList.lastChild); // I remove the oldest entry to maintain strict limits.
    }
});


// Initial generation of the schedule when the page loads, for a complete view.
document.addEventListener('DOMContentLoaded', generateDynamicSchedule);
