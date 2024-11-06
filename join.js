//join()- Non Mutating

//join()method is used to concatenate the elements of an array into a single string. 
//You can specify a separator between the elements, or if you omit it, 
//the elements are joined with a comma by default.


const fruits = ['apple', 'banana', 'cherry'];

//const result = fruits.join()
const result = fruits.join('-')
console.log(result); // apple-banana-cherry
console.log(fruits);



