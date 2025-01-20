let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let intervalId = null;  // Initialize intervalId with null

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function startGeneratingColors() {
    if (!intervalId) {  // Only start if no interval is running
        intervalId = setInterval(() => {
            let color = getRandomColor();
            document.body.style.backgroundColor = color; // Set generated color as background color
        }, 500); // Change color every 500ms
    }
}

function stopGeneratingColors() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;  // Reset intervalId to null
    }
}

startBtn.addEventListener("click", startGeneratingColors);
stopBtn.addEventListener("click", stopGeneratingColors);
