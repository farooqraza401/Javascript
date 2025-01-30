// concat()- Non Mutating 

//The concat() method in JavaScript is used to merge two or more arrays or strings. 
//It does not modify the original array or string; instead, it returns a new one with the combined values

//1. concat() with Arrays
//The concat() method can combine multiple arrays into one. It does not modify the original arrays but returns a new array.

//Syntax:  let newArray = array1.concat(array2, array3, ...);

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [7, 8]

let newArr = arr1.concat(arr2,arr3)

//console.log(newArr); //  [1, 2, 3, 4, 5, 6, 7, 8]

//2. concat() with Strings
//The concat() method can also be used to join multiple strings. Like with arrays, concat() returns a new string and does not modify the original strings.

//Syntax:  let newString = string1.concat(string2, string3, ...);

let str1 = "Hello";
let str2 = " ";
let str3 = "World!";

let result = str1.concat(str2, str3); // "Hello World!"
console.log(result);
//console.log(str1); // str1 no modified 

//Key Points
//concat() does not modify the original array or string.
//For arrays, it concatenates all elements into a single array.
//For strings, it joins the strings into one continuous string.


