// Object Literals
const myKey = Symbol("Key1");

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [myKey]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// To access the object we use the below methods
// console.log(JsUser.age);

//Another way to access the object's key is as below
// console.log(JsUser["email"]);

// We have to know the above method of accessing the objet as we have a case of declaring a key as string, as it is
// stored as a string in the system's memory.
// If we try to access the full name key, then it can only be accessible by below mwthod only
// console.log(JsUser["full name"]);

// If we want to use a symbol as key in as a key of an object then, first of all we have to declare the symbol, then we
// have to use it inside our object, as we have used in the above code (myKey)

// But if we want to access the symbol then the only way to access the symbol is defined below
// console.log(JsUser[myKey]);

// We can notice that we haven't provided the symbol name name as string inside the square bracktes as we have used before
// to acces the other keys of the object.

// If we wnat to change or update any key of the object then this can be done as below
JsUser.email = "hitesh@chatgpt.com";

// console.log(JsUser["email"]);

// If we want ti freeze our object, means we want that if we change any key, then change must not happen then we 
// use below mwthod

// Object.freeze(JsUser);

// If we try to change any key further then this will not happen.

JsUser.email = "hitesh@microsoft.com";

// console.log(JsUser);

//In the output of above console we will se that email's value is not changed this time as we have freezed the object.

// Now, we will see how we can add a key as a function inside the object

JsUser.greeting = function () {
    console.log("Hello JS User");
}

// If we want to access the function key then we can access as below
console.log(JsUser.greeting());

// Now, if want to use the object's key in the function, then we can do that with thw help of string iterpolation
// and using this keyword.
// String Interpolation is to use backticks(``) instead of ("") so that we can provide the reference to any key of the
// object, this keyword is used to prvide the reference of the key from the Object.

JsUser.greetingTwo = function () {
    console.log(`Hello JS User,${this.name}`);
}

console.log(JsUser.greetingTwo());
