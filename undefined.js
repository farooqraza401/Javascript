//undefined in JavaScript
//In JavaScript, undefined means a variable has been declared but has not been assigned a value.
//undefined is also the default return value for functions or object properties that do not exist.

//Q.When Does undefined Occur?
//(A) Uninitialized Variable
let x;
//console.log(x); // Output: undefined

//(B) Function Without return
function greet() {
  console.log("Hello!");
}
console.log(greet()); // Output: "Hello!" (from function) + undefined (because no return)

//(C) Accessing a Non-Existent Object Property
const user = { name: "Alice" };
//console.log(user.age); // Output: undefined (because 'age' is not defined in the object)

//(D) Accessing Out-of-Bounds Array Index
const arr = [1, 2, 3];
//console.log(arr[5]); // Output: undefined (index 5 does not exist)

//(E) Missing Function Arguments
function sum(a, b) {
  console.log(a, b); // Output: 10 undefined (since b is not passed)
}
//sum(10,4); //10 4
//sum(10,);  

const arr1 =[1,2]
console.log(arr1[1])



