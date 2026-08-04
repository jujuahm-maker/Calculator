const welcomeScreen = document.getElementById("welcome-screen");
const calculatorScreen = document.getElementById("calculator-screen");

setTimeout(() => {
    welcomeScreen.style.display = "none";
    calculatorScreen.style.display = "flex";
}, 3000);

const display = document.querySelector(".display");

const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;

        if (value === "C") {

            currentInput = "";

            display.textContent = "0";

        } 

        

        else if (value === "=") {

            try {

                currentInput = eval(currentInput);

                display.textContent = currentInput;

            } catch {

                display.textContent = "Error";

                currentInput = "";

            }

        } 

        

        else {

            currentInput += value;

            display.textContent = currentInput;

        }

    });

});