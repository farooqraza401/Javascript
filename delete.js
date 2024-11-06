//delete Operator -

//delete operator is used to remove a property from an object or an element from an array.
//it's important to note that when used on arrays, 
//delete does not reindex the array or change its length; it only removes the value, leaving undefined in its place.

//delete can be used for both objects and arrays, it's typically better suited for object properties

//Ex 1
let person = {
    name: "Amber",
    age: 21
}

let result = delete person.age

console.log(person);// { name: 'Amber' }


//Ex 2
const arr =[1,2,3,4,5,6,7,8]

const deletedElement = delete arr[3]

console.log(arr); //[ 1, 2, 3, <1 empty item>, 5, 6, 7, 8 ]

