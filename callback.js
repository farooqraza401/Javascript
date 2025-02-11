// Callback function
//Definition
// 1.A function passed as an argument to another function
// 2.A callback function is a function that is passed as an argument to another function and is executed later
// 3.A function passed as an argument to another function and is executed after some operation has been completed.

//Concept	                        Explanation
//Callback Function	              A function passed as an argument and executed later.
//Asynchronous Callbacks	        Used in operations like API calls and timers.
//Built-in Callbacks	            map(), filter(), forEach(), etc.
//Error Handling	                Callbacks can handle both success and errors.
//Callback Hell	                  Nested callbacks make code hard to read (use Promises instead).

// Note - Callbacks are essential for handling asynchronous code in JavaScript!

function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

// Passing 'sayGoodbye' as a callback
//greet("Alice", sayGoodbye);

//-------------------------------------------------

function goodMorning(name, func) {
  console.log(`Good mornning ${name}`);
  func();
}

function verygoodMorning() {
  console.log(`Very good morning`);
}
// Passing 'verygoodMorning' as a callback
goodMorning("Farooq", verygoodMorning);
