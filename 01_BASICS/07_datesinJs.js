// Date is a very complex topic in individual, TC39 is working on Temporal which will be a new date API
// For now, we have to understand it as it is used nowadays

let myDate = new Date();
//console.log(myDate);
// O/P - 2024-11-12T10:27:27.820Z
// It is not in the readble form right now, but we can simplfy it by converting it to String.
//console.log(myDate.toString());
// O/P - Tue Nov 12 2024 10:29:48 GMT+0000 (Coordinated Universal Time)
// Several other methods are below :-
//console.log(myDate.toLocaleString());

// console.log(typeof(myDate));
// Type of Date in JS is Object.

// We can also provide the date in the date object that we want to print 
let myCreatedDate = new Date(2023,0,23);
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

// Here point to be noted is that month starts from 0 in JS not from 1, and we get day along 
// with the date if we use method toDateString().

// To get the time along with the date we use the below method 
myCreatedDate = new Date(2023,0,23, 5, 3);
// console.log(myCreatedDate.toLocaleString());

// We can also give the date in the form of YYYY-MM-DD, it is provided in the form of string 

myCreatedDate = new Date("2024-01-12");
// console.log(myCreatedDate.toLocaleString());

//Now, we will understand the TimeStamp in JS
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// Here we will get the value of date i miliseconds.
// O/P - 1731515835621

// We can also change the existing date into miliseconds 
// console.log(myCreatedDate.getTime());
// O/P - 1705017600000

// We do so just for the comparion of the dates.

// To convert the time into seconds rather than miliseconds .
console.log(Math.floor(Date.now()/1000));

// We use some other methods of date in JS to get month, ninutes, seconds miliseconds, day etc.

let newDate = new Date("2024-07-11");
console.log(newDate.getDay());
console.log(newDate.getMilliseconds());
console.log(newDate.getMinutes());
console.log(newDate.getMonth() + 1);
