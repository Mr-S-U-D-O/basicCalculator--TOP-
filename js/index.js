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

// 1. addition(a, b)

const addition = (num1, num2) => {
  let addResult = num1 + num2;
  console.log(addResult);
  return addResult;
};

// 2. subtraction(a, b)

const subtraction = (num1, num2) => {
  let subResult = num1 - num2;
  console.log(subResult);
  return subResult;
};

// 3. multiplication(a, b)

const multiplication = (num1, num2) => {
  let multiResult = num1 * num2;
  console.log(multiResult);
  return multiResult;
};

// division(a, b)

const division = (num1, num2) => {
  let divResult = num1 / num2;
  console.log(divResult);
  return divResult;
};

// modulus(a, b)

const modulus = (num1, num2) => {
  let modResult = num1 % num2;
  console.log(modResult);
  return modResult;
};

// Exponentiation(a, b)

const exponentiation = (num1, num2) => {
  let  expoResult = num1 % num2;
  console.log(expoResult);
  return expoResult;
};

