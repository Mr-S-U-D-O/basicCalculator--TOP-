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
  const result = operation(num1, num2);
  console.log(result);
  return result;
};

// 1. addition(a, b)

const addition = (num1, num2) => runOperation(num1, num2, (a, b) => a + b);

// 2. subtraction(a, b)

const subtraction = (num1, num2) => runOperation(num1, num2, (a, b) => a - b);

// 3. multiplication(a, b)

const multiplication = (num1, num2) =>
  runOperation(num1, num2, (a, b) => a * b);

// =========================
// Division + Remainder
// =========================

// division(a, b)

const division = (num1, num2) => runOperation(num1, num2, (a, b) => a / b);

// modulus(a, b)

const modulus = (num1, num2) => runOperation(num1, num2, (a, b) => a % b);

// =========================
// Advanced Operations
// =========================

// Exponentiation(a, b)

const exponentiation = (num1, num2) =>
  runOperation(num1, num2, (a, b) => a % b);

/*=================================================*/

const numberBtnContainer = document.querySelector(".numberpad-container");

numberBtnContainer.addEventListener("click", (event) => {
  // Find the nearest button from where the click happened
  const selectedBtnContainer = event.target.closest("button");

  // If the click wasn't on or inside a button, ignore it
  if (!selectedBtnContainer) return;

  // Use the class name or a data-attribute to decide what to do
  if (selectedBtnContainer.classList.contains("one")) {
    let selectedBtn = document.querySelector(".one");
    let theClikedNumber = parseInt(selectedBtn.textContent);
    console.log(typeof theClikedNumber);
    console.log(theClikedNumber);
    console.log("you clicked on btn 1");
  } else if (selectedBtnContainer.classList.contains("two")) {
    console.log("you clicked on btn 2");
  } else if (selectedBtnContainer.classList.contains("three")) {
    console.log("you clicked on btn 3");
  } else if (selectedBtnContainer.classList.contains("four")) {
    console.log("you clicked on btn 4");
  } else if (selectedBtnContainer.classList.contains("five")) {
    console.log("you clicked on btn 5");
  } else if (selectedBtnContainer.classList.contains("six")) {
    console.log("Action for button 6");
  } else if (selectedBtnContainer.classList.contains("seven")) {
    console.log("Action for button 7");
  } else if (selectedBtnContainer.classList.contains("eight")) {
    console.log("Action for button 8");
  } else if (selectedBtnContainer.classList.contains("nine")) {
    console.log("Action for button 9");
  }
});
