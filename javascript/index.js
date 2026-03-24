/**
==============================================================
FEAT : Create 4 functions 
==============================================================
1. addition(a, b)               --->  5 + 5 = 10;   (DONE)
2. subtraction(a, b)            --->  15 - 7 = 8;   (DONE)
3. multiplication(a, b)         --->  2 * 2  = 4;   (DONE)
4. division(a, b)               --->  20 / 4 = 5;   (DONE)
5. Modulus(a, b)                --->  20 % 2 = 0;   (DONE)
6. Exponentiation(a, b)         ---> 5 ** 2 = 25;   (DONE)
===============================================================
**/

// =========================
// Arithmetic Operations
// =========================

const runOperation = (num1, num2, operation) => {
  // Centralized executor so each math function only provides its formula.
  const result = operation(num1, num2);
  console.log(result);
  return result;
};
// 1. addition(a, b)

const addition = (num1, num2) => runOperation(num1, num2, (a, b) => a + b);
// 2. subtraction(a, b)
const subtraction = (num1, num2) => runOperation(num1, num2, (a, b) => a - b);
// 3. multiplication(a, b)
const multiplication = (num1, num2) => runOperation(num1, num2, (a, b) => a * b);
// division(a, b)
const division = (num1, num2) => runOperation(num1, num2, (a, b) => a / b);
// modulus(a, b)
const modulus = (num1, num2) => runOperation(num1, num2, (a, b) => a % b);
// Exponentiation(a, b)
const exponentiation = (num1, num2) => runOperation(num1, num2, (a, b) => a % b);
/*=================================================*/

const numberBtnContainer = document.querySelector(".numberpad-container");

// Event delegation: one listener handles all number buttons inside the container.
numberBtnContainer.addEventListener("click", (event) => {
  // Find the nearest button from where the click happened
  const selectedBtnContainer = event.target.closest("button");

  // If the click wasn't on or inside a button, ignore it
  if (!selectedBtnContainer) return;

  // Use the class name or a data-attribute to decide what to do
  if (selectedBtnContainer.classList.contains("one")) {
    // Read the visible label and convert it into a number value.
    let theClikedNumber = parseInt(selectedBtnContainer.textContent);
    console.log(typeof theClikedNumber);
    console.log(theClikedNumber);
    return theClikedNumber;
    console.log("you clicked on btn 1");
  } else if (selectedBtnContainer.classList.contains("two")) {
    let theClikedNumber = parseInt(selectedBtnContainer.textContent);
    console.log(typeof theClikedNumber);
    console.log(theClikedNumber);
    console.log("you clicked on btn 2");
  } else if (selectedBtnContainer.classList.contains("three")) {
    let theClikedNumber = parseInt(selectedBtnContainer.textContent);
    console.log(typeof theClikedNumber);
    console.log(theClikedNumber);
    console.log("you clicked on btn 3");
  } else if (selectedBtnContainer.classList.contains("four")) {
    let theClikedNumber = parseInt(selectedBtnContainer.textContent);
    console.log(typeof theClikedNumber);
    console.log(theClikedNumber);
    console.log("you clicked on btn 4");
  } else if (selectedBtnContainer.classList.contains("five")) {
    let theClikedNumber = parseInt(selectedBtnContainer.textContent);
    console.log(typeof theClikedNumber);
    console.log(theClikedNumber);
    console.log("you clicked on btn 5");
  } else if (selectedBtnContainer.classList.contains("six")) {
    let theClikedNumber = parseInt(selectedBtnContainer.textContent);
    console.log(typeof theClikedNumber);
    console.log(theClikedNumber);
    console.log("Action for button 6");
  } else if (selectedBtnContainer.classList.contains("seven")) {
    let theClikedNumber = parseInt(selectedBtnContainer.textContent);
    console.log(typeof theClikedNumber);
    console.log(theClikedNumber);
    console.log("Action for button 7");
  } else if (selectedBtnContainer.classList.contains("eight")) {
    let theClikedNumber = parseInt(selectedBtnContainer.textContent);
    console.log(typeof theClikedNumber);
    console.log(theClikedNumber);
    console.log("Action for button 8");
  } else if (selectedBtnContainer.classList.contains("nine")) {
    let theClikedNumber = parseInt(selectedBtnContainer.textContent);
    console.log(typeof theClikedNumber);
    console.log(theClikedNumber);
    console.log("Action for button 9");
  }
});

let firstDisplayedNumber = document.querySelector(".firstNumberInDisplay").textContent;
console.log(firstDisplayedNumber);


let clearBtn = document.querySelector(".clearBtn");

clearBtn.addEventListener("click", ()  => {
  // clears the numbers, but where are the numbers , right .
} )
