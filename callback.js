// Callback function
// A function passed as an argument to another function

function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  greet("Alice", sayGoodbye); 

  //In this example, sayGoodbye is a callback function passed to greet. 
  //After greet logs the greeting, it calls callback(), which then logs "Goodbye!".

  

  