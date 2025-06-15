//Datatypes are primarily of 2 types: Primitive and Non-Primitive
// The difference between the two is that primitive data types are passed by value while non-primitive data types are passed by reference.

// Primitive: String, Number, BigInt, Boolean, null, undefined, Symbol 

//Symbol is a datatype which is used to create unique identifiers
let id = Symbol('1001');
let id2 = Symbol('1001');
console.log(id === id2); //false

// Non-Primitive: Object, Array, Function

//Array
let arr = [1, 2, 3];

//Object
let obj = {
    name: 'TheCodingThread',
    age: 20
}

//Function
let func = function greet(){
    console.log('Hello World');
}