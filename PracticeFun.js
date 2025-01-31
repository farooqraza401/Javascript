// A function is a block of code that performs a specific task and reusable means, functions called multiple
// times in a programe

function sum(x, y) {
  return console.log(x + y);
}
//sum(2,100)

const sm = (a, b) => {
  return a + b;
};

//console.log(sm(100, 200)); // 300

let add = (a, b) => {
  console.log(a + b);
};

//add(3, 5);
//------------------------

function Division(a, b) {
  return console.log(a % b === 0);
}

//Division(10,5) // true
//Division(3,5) // false

let Divide = (j, k) => {
  console.log(j % k === 0);
};

//Divide(16, 8); // true

//--------------------------

// multiply
function product(a, b) {
  return console.log(a * b);
}

//product(3,9) //27

const prodct = (a, b) => {
  return console.log(a * b);
};

//prodct(5, 8); //40

// subtraction
function sub(a, b) {
  return console.log(a - b);
}

//sub(4,3) //1
//sub(3,4) // -1

//-------------------------
//check if a number is even or odd using if else

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log(number + " is Even");
  } else {
    console.log(number + " is Odd");
  }
}

//checkEvenOdd(3)

// Using a Function with Return Value
// function chkEvenOdd(num) {
//   return num % 2 === 0 ? "Even" : "Odd";
// }

// console.log(chkEvenOdd(3))
// console.log(chkEvenOdd(4))

function chkEvenOdd(num) {
  return console.log(num % 2 === 0 ? "Even" : "Odd");
}

//chkEvenOdd(3) // Odd
//chkEvenOdd(4) // Even
//---------------------------

//print 1-10 odd numbers
function printOdd() {
  for (i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

//printOdd();

////print 1-10 Even numbers using Arrow functin
const printEven = () => {
  for (i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

//printEven();
//=========================================

//square root of 2 in js using function and cube root also
// function squareRoot(num) {
//     return Math.sqrt(num);
// }

// function cubeRoot(num) {
//     return Math.cbrt(num);
// }

//console.log("Square root of 2:", squareRoot(2)); // Output: 1.4142135623730951
//console.log("Cube root of 2:", cubeRoot(2));     // Output: 1.2599210498948732

//Using Exponentiation Operator **
function squareRoot(num) {
    return num ** 0.5; // Same as Math.sqrt(num)
}

function cubeRoot(num) {
    return num ** (1 / 3); // Same as Math.cbrt(num)
}

//console.log("Square root of 2:", squareRoot(2)); 
//console.log("Cube root of 2:", cubeRoot(2));     


//----------------
//Prime number
//A prime number is a natural number greater than 1
// that has exactly two distinct positive divisors: 1 and itself.

//  A number n is prime if:
//  n>1 and the only divisors of n are 1 and n.
