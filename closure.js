//closure
//A closure allows a function to access variables from its outer (enclosing) function
//even after that function has finished executing

// Ex1

// function Counter() {
//   let count = 0; // Private variable

//   return {
//     increment: function () {
//       count++;
//       return count;
//     },
//     decrement: function () {
//       count--;
//       return count;
//     },
//   };
// }

// const counter = Counter();
// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// console.log(counter.decrement()); // 1

// function dCounter() {
//   let vv = 0;

//   return {
//     increment1: function () {
//       vv++;
//       return vv;
//     },
//     decrement1: function () {
//       vv--;
//       return vv;
//     },
//   };
// }

// const counter1 = dCounter();
// console.log(counter1.increment1()); // 1
// console.log(counter1.increment1()); // 2
// console.log(counter1.decrement1()); // 1

//--------------------------

// Ex2

// function outerFunction(outerVariable) {
//   return function innerFunction(innerVariable) {
//     console.log(`Outer Variable: ${outerVariable}`);
//     console.log(`Inner Variable: ${innerVariable}`);
//   };
// }

// const newFunction = outerFunction("Hello");
// newFunction("World");
// Output:
// Outer Variable: Hello
// Inner Variable: World

//1
// for(let i=0;i<5;i++){
//   setTimeout(()=>{
//     console.log(i)
//   },i*1000)
// }

for (let i = 0; i < 7; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 2000);
}

//2
// for (var i = 0; i < 5; i++) {
//   (function (j) {
//     setTimeout(() => {
//       console.log(5);
//     }, j * 1000);
//   })(i);
// }

//3
// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 3000);
// }

// When var is used, 
// the variable i is shared across all iterations of the loop because var is not block-scoped (unlike let).

//4
// for (var i = 0; i < 5; i++) {
//   (function (j) {
//     setTimeout(() => {
//       console.log(j);
//     }, 3000);
//   })(i);
// }

//The IIFE creates a new scope for each iteration.
//The current value of i is passed as j to the IIFE, and the callback uses j instead of i.
