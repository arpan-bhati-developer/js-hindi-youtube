// Primitive 

// 7 types: Number, Boolean, String, Undefined, Null, Symbol, BigInt
 
const num = 100;
const bool = true;
const str = "Arpan";
let primaryMail = undefined;
// if we don't provided any value to a variable then by default it will contain undefined.
const val = null;

const id = Symbol('123');
const anotherId = Symbol('123');
// Both the symbols have the same value but if we compare them then the result will be false.
// Datatypr of the above variables will be symbol.

// console.log(id == anotherId);

const bigNumber = 3456789345678889677885545;

// BigInt conatains a veryu large number that is not contained by the Number type.

// Non-primitive Datatypes (Reference)

// Array, Objects, Functions 

// 1.Array
// It contains the multiple values or list of vlues of similar type.
const heros = ["Shaktiman","Naagraj","Doga"];

// 2.Object 
// In Objects we provide values in key value pairs, dataype of key values can be anything as number ,string,function as well as another object and array.
let myObj = {
    name : "Arpan",
    age : 24,
}

// 3. Function 
const myFunction = function(){
    console.log("Hello World");
}


// console.log(typeof (myObj));
// datatype of a function is function but vebally it is called as object function.

// datatype of both array and object is object.

//++++++++++++++++++++++++++++++++STACK AND HEAP MEMORY IN JS+++++++++++++++++++++++++++++

// Stack memory is used in Primitive datatypes, Heap is used in Non-Primitive Datatypes.
// Stack -------
let myChannel = "hiteshchaudharydotcom";
let anotherChannel = myChannel;
anotherChannel = "chai or code";

// console.log(myChannel);
// console.log(anotherChannel);

// here the value is not changed as primitive datatype uses stavk memory whoch just uses the copy of one variable to another variable.

//Heap ----------------
let userOne = {
    email : "arpan@google.com",
    upi : "user@ybl"
}

let userTwo = userOne;

userTwo.email = "arpan@infozech.com";

console.log(userOne.email);
console.log(userTwo.email);

// Here both the email are uptaed and became "arpan@infozech.com" as Non-Primitive data types uses Heap memory where the we gave the actual reference not only  the value.
