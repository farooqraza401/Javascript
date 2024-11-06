//unshift()-Mutating

//unshift() method is used to add one or more elements to the beginning of an array 
//and returns the new length of the array.

//The method modifies the original array by inserting new elements at the beginning.
//It returns the new length of the array after the elements are added.

const arr = ['Amber','Siddiq','Farooq','Fata','Shahida']

const result = arr.unshift('Shamshad','Asmat')

console.log(result); // 7

console.log(arr); //  ['Shamshad', 'Asmat','Amber','Siddiq','Farooq','Fata','Shahida']

