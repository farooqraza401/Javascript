//The lastIndexOf() method in JavaScript is used to find the last occurrence of a specified element in an array. 
//It returns the index of the element if it’s found, or -1 if the element is not present in the array.
////And it searches from right to left


//Syntax
//array.lastIndexOf(searchElement, fromIndex);

//searchElement: The element to locate in the array.
//fromIndex (Optional): The index to start searching backwards from. Defaults to array.length - 1 (the last element). 
//If negative, it counts backwards from the end of the array.

//Summary
//lastIndexOf() returns the last index of an element or -1 if it isn’t found.
//It searches backward through the array, optionally starting from fromIndex.
//It’s case-sensitive and performs a strict equality check.
//Negative start values counts from the last element(but still searches from right to left)

//For strings:
//string.lastIndexOf(searchElement, fromIndex);

const numbers = [1, 2, 3, 2, 4, 2, 5];
let element = ['laptop','gg','ff','headset','mobile','ff','router','ff','headset','router','ff']

console.log(element.lastIndexOf('router'));       // Output: 5 (last occurrence of 2)
//console.log(numbers.lastIndexOf(2, 4));    // Output: 3 (searches up to index 4)
//console.log(numbers.lastIndexOf(6));       // Output: -1 (6 is not found in the array)




