// object:

// What is an object in JavaScript?

// An object is a complex data structure that allows we to store collections of data.
// It is used to group related data and functionality together,
// consisting of properties (key-value pairs) and methods (functions).

// How do we create an object in JavaScript?

// we can create an object using object literals, the new Object() syntax,
// or by using constructor functions and classes.

// What is an object literal?

// An object literal is a comma-separated list of key-value pairs wrapped in curly braces.
// It is the most common way to create objects.

// How do we access object properties?

// we can access object properties using dot notation or bracket notation.
// Dot notation is typically used when you know the exact name of the property,
// while bracket notation is useful when the property name is dynamic or not a valid identifier.

// How do we add or modify properties in an object?

// we can add or modify properties using dot notation or bracket notation.
// Assign the new value to the property, whether it exists or not.

// How do we delete properties from an object?

// we can delete properties using the delete operator, which removes the property from the object.

const obj1 = {
  username: "farooq",
  email: "farooq123@gmail.com",
  pass: 123,
};

//console.log(obj1) // { username: 'farooq', email: 'farooq123@gmail.com', pass: 123 }

// console.log(obj1.username) // farooq
// console.log(obj1.email) // farooq123@gmail.com
// console.log(obj1.pass) // 123

// obj1.username ='siddiq Raza'
// obj1.email ='sidd123@gmail.com'
// obj1.pass ='12345'
// console.log(obj1) // { username: 'siddiq Raza', email: 'sidd123@gmail.com', pass: '12345' }

//practice :

let myObj = {
  // Integer Property.
  int_prop: 5,

  // String Property.
  str_prop: "GeeksforGeeks",

  // Object Property (Date).
  obj_prop: new Date(),

  // Object Property.
  inner_obj: {
    int_prop: 6,
  },

  // Function Property.
  func_prop: function () {
    console.log("Welcome to GeeksforGeeks!");
  },
};

//console.log(myObj.int_prop); //5
//console.log(myObj.str_prop); //GeeksforGeeks
//console.log(myObj.obj_prop.toLocaleTimeString()); //1:44:27 pm
//console.log(myObj.inner_obj.int_prop); //6
//myObj.func_prop(); // Welcome to GeeksforGeeks!
//---------------------------------------------------------------

// As per conventions, functions associated with an object are known as methods.
// This is considered to be a small difference between a function and a method.
// A function is an independent sequence of a bunch of statements
// whereas a method is associated with an object and is generally referenced by this keyword.
let obj = {
  name: "farooq",
  age: 27,
  address: "wer",
  //function prop
  funcA: function () {
    console.log("Welcome Sonu !");
  },
  funcB: function () {
    this.funcA();
    console.log("Welcome Farhan!");
  },
};

//  console.log(obj.name)
//  console.log(obj.age)
//  console.log(obj.address)
//  obj.funcB()
//--------------------------------------------

// Define Function Explicitly.
function Greet() {
  console.log("Hello Farooqqqq!");
}

let obje = {
  // Mention Function-Name as Value.
  greet: Greet,
  // Define Function implicitly.
  byWhom: function () {
    console.log("welcome sir");
  },
};

//obje.greet();
//obje.byWhom();

//---------------------------------------------
// 1. Access object properties using Dot Notation (.):
let biodata = {
  name: "shubha Biswal",
  age: 23,
  city: "Delhi",
};
//const keys='city'
//console.log(biodata.keys) // undefined ,'Note-Dynamic Access is not supported'
//console.log(biodata.name)
//console.log(biodata.age)
//console.log(biodata.city)

// 2. Access object properties using Bracket Notation ([]):
let p = {
  name: "khurana",
  age: 27,
  city: "Bareilly",
};
//console.log(p["name"]);
//console.log(p["age"]);

//using variable
//const key = "city";
//console.log(p[key]); //Bareilly, 'Note-Dynamic Access supported'
//---------------------------------------------

// Adding a property to an object in JavaScript is simple and can be done
// using either dot notation or bracket notation.

// 1.Using Dot Notation
// Dot notation is the most common and straightforward way to add a property to an object.

// Syntax:
// object.propertyName = value;

// First create an empty object
const objj = {};
// Add properties using dot notation
objj.name = "Amber";
objj.age = 22;
objj.city = "budaun";
//console.log(objj) // { name: 'Amber', age: 22, city: 'budaun' }

// 2. Using Bracket Notation
// Bracket notation is used when the property name is dynamic (e.g., stored in a variable) or
// contains special characters.

// Syntax:
// object["propertyName"] = value;

const car = {}; // Create an empty object

// Add properties using bracket notation
car["make"] = "Toyota";
car["model"] = "Corolla";

// Add a property with spaces or special characters
car["year of manufacture"] = 2021;

//console.log(car);
// Output: { make: "Toyota", model: "Corolla", "year of manufacture": 2021 }

// EX
// Bracket notation allows we to use variables as property names.
const key = "color";
const value = "green";

const apple = {}; // create an empty obj
apple["key"] = value;

//console.log(apple) // { key: 'green' }

// EX
const objjj = {};

// Using reserved keyword with dot notation (not allowed) , its confusing
objjj.for = "loop"; // Error in strict mode
console.log(objjj); // { for: 'loop' } 'just because of return "{ for: 'loop' }" '

// Using bracket notation (allowed)
//objjj["for"] = "loop";
//console.log(objjj); // Output: { for: "loop" }

//Key Points to Remember
//Use dot notation for simplicity when property names are valid identifiers.
//Use bracket notation for dynamic keys, special characters, or reserved words.
//Properties added dynamically are enumerable and can be iterated over unless specifically set as non-enumerable.

//---------------------------------------------

// Create string primitive.
let strPrimitive = "GeeksforGeeks";
//typeof strPrimitive;  // "string"
//console.log(typeof(strPrimitive)) // "string"
//strPrimitive instanceof String; // false
//console.log(strPrimitive instanceof String) // false

// Use the Built-in String Function as Constructor.
let strObject = new String("GeeksforGeeks");
//typeof strObject; // "object"
//console.log(typeof(strObject))
//strObject instanceof String; // true
//console.log(strObject instanceof String)

let strObj = new String("Farooq");
//console.log(strObj) // [String: 'Farooq']
//console.log(typeof(strObj)) // object
//console.log(strObj instanceof String) //true
//console.log(Object.prototype.toString.call(strObj)) // [object String]

// inspect the object sub-type
//Object.prototype.toString.call( strObject ); // [object String]
//console.log(Object.prototype.toString.call(strObject)) // [object String]
//==========================================================================

// In JavaScript, objects can be traversed using various loop structures.
// Objects do not have a numerical index like arrays,
// so looping through them involves iterating over their keys or key-value pairs.

// Key Behavior of Enumerable Properties
// Default: Properties added directly to an object (using dot or bracket notation) are enumerable by default.
// Non-enumerable properties: These are properties that do not appear in for...in loops or methods like Object.keys().

//-----------------------------------------------------------------

// A function return current date

const getCurrentdate = function () {
  return console.log(new Date());
};

//getCurrentdate(); // 2025-01-30T06:47:01.679Z

// A function return current date only

const onlyDate=()=>{
  const date = new Date()
  const year= date.getFullYear()
  const month = String(date.getMonth()+1).padStart('2','0')
  const day = date.getDate()

  return console.log(`${day}-${month}-${year}`)
}

//onlyDate() // 30-01-2025
