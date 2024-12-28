// In thie we will see the concept of Object singleton

//const tinderUSer = new Object();

//console.log(tinderUSer);
//Its output will be an empty Object {}

//We can also declare the object as 
const tinderUSer = {};
//console.log(tinderUSer);
//Its output will also be an empty Object {}

// Now we will provide the values to this object

tinderUSer.id = "123abc";
tinderUSer.name = "Sammy";
tinderUSer.isLoggedIn = false;

//console.log(tinderUSer);

// If we want to use objects inside the objects, then we have to use the below method:
const regularUser = {
    email : "some@gmail.com",
    fullname:{
        userfullname:{
            firstname : "Arpan",
            lastname : "Bhati"
        }
    }
}

// We can make object in objects as in above object, we can do any no of nesting as we want, now
// if we want to access the key of the object which is inside the other object, then we can do as:

//console.log(regularUser.fullname);
// Here fullname object will be completely printed 
// O/P :- {userfullname : {firstname: 'Arpan', lastname : 'Bhati'}}

//console.log(regularUser.fullname.userfullname);
// Here only the data inside the object userfullname will be printed
// O/P :- {firstname: 'Arpan', lastname : 'Bhati'}

//console.log(regularUser.fullname.userfullname.firstname);
// Here only the last name key of the object userfullnamwe will be printed.
// O/P :- Arpan

//Merging two or more objects

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

//const obj3 = Object.assign(obj1, obj2, obj4);

//console.log(obj3);

// In the above case the output is correct but, the same value is which is of obj3 will assigne to 
// obj1, means obj3 === obj1

// If we want to print the same output but does not want that obj1 should update then we use below
// method to merge objects

//const obj3 = Object.assign({},obj1, obj2, obj4);

//console.log(obj3);

// Now we will see the spread method to merge two or more objects

const obj3 = {...obj1,...obj2,...obj4};

//console.log(obj3);

// If we want to have the keys and values in output of an object the we can do that as:

//console.log(Object.keys(tinderUSer));
//console.log(Object.values(tinderUSer));

// Output :- [ 'id' , 'name' , 'isLoggedIn'] and ['123abcc' , 'Sammy' , false]

// We can see that output are th e arrays of the values of Keys and their Values of the object.

// If want to get the all key value pairs of the object then we can do as:

//console.log(Object.entries(tinderUSer));

// If we want to check that the object contains the particular keys or not then we can do that as
// below 
console.log(tinderUSer.hasOwnProperty('isLoggedIn'));
//O/P :- true

console.log(tinderUSer.hasOwnProperty('isLogged'));
//O/P :- false

// as isLoggedIn is a key of object so it will return true and isLogged in not the key, so it will
// return false.