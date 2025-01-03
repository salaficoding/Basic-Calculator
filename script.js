// Button Labels
const buttonLabels = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "C", "0", "=", "+"
];

// Variables
let inputField = document.getElementById("calcInput");
let currentInput = "";

// Dynamically Create Buttons
const buttonsContainer = document.querySelector(".buttons");
buttonLabels.forEach((label) => {
    const button = document.createElement("button");
    button.textContent = label;
    button.addEventListener("click", () => handleButtonClick(label));
    buttonsContainer.appendChild(button);
});

// Handle Button Clicks
function handleButtonClick(label) {
    if (label === "=") {
        try {
            currentInput = eval(currentInput).toString();
        } catch (e) {
            currentInput = "Error";
        }
    } else if (label === "C") {
        currentInput = "";
    } else {
        currentInput += label;
    }
    inputField.value = currentInput;
}
