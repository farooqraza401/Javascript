//for...in Loop:
// for...in Loop is generally used for objects
//The for...in loop iterates over the indexes (or keys) of an object.
//Since arrays are just objects with numeric keys (indexes),
//for...in will loop over those indexes.

let arr = [1, 2, 3, 4];

//console.log(typeof arr); // return object

for (let elem in arr) {
  console.log(elem);
}


//Explanation
// The array arrz is defined as [1, 2, 3, 4],
//which means it has four elements at indexes 0, 1, 2, and 3.

//for...in Loop:
//The for...in loop iterates over the indexes (or keys) of an object.
//Since arrays are just objects with numeric keys (indexes),
//for...in will loop over those indexes.

//for...of Loop
//for...of iterates over the values of arrays. For arrays,
//for...of is the preferred loop to access the values directly.