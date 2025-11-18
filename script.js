import { sleep, highlight, updateHeight } from "./Utils/ui.js";
import { bubbleSort } from "./Algorithms/bubbleSort.js";

let array = []; // global array
let arraySize = 50; // default size
let speed = 150; // default speed

// Select elements
const barsContainer = document.getElementById("bars");
const sizeSlider = document.getElementById("sizeSlider");
const speedSlider = document.getElementById("speedSlider");

// Generate a new random array
function generateArray(size = arraySize) {
    array = [];
    barsContainer.innerHTML = ""; // clear old bars

    for (let i = 0; i < size; i++) {
        let value = Math.floor(Math.random() * 300) + 10; // bar height

        array.push(value);

        // Create bar element
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value}px`;

        barsContainer.appendChild(bar);
    }
}

// Handle size change
sizeSlider.addEventListener("input", e => {
    arraySize = e.target.value;
    generateArray(arraySize);
});

// Handle speed change
speedSlider.addEventListener("input", e => {
    speed = 310 - e.target.value; // lower = fast, higher = slow
});

// Wrapper for sleep with speed
async function wait() {
    await sleep(speed);
}

// Button: Generate Array
document.getElementById("generateBtn").addEventListener("click", () => {
    generateArray(arraySize);
});

// Button: Start Sorting (Bubble Sort)
document.getElementById("startBtn").addEventListener("click", async () => {
    const algo = document.getElementById("algoSelect").value;

    if (algo === "bubble") {
        await bubbleSort(array, speed);
    } else {
        alert("This algorithm is not implemented yet!");
    }
});

// Initial load
generateArray(arraySize);
