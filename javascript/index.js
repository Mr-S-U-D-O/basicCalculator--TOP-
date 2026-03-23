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
