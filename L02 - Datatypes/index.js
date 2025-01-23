// Datatypes

// Javascript is Dynamic Typing

// Primitive and Object Type

//-----------------------------------------Primitive Data Types---------------------------------------

//1.Number - Represents both integer and floating-point numbers.

let age = 25;
console.log(age);
console.log(typeof age);

//2.String - Represents a sequence of characters.

let message = "hi shyam";
console.log(message);
console.log(typeof message);

//3.Boolean - Represents a logical entity and can have two values: true or false.

let isActive = true;
console.log(isActive);

//4.Undefined - A variable that has been declared but not assigned a value.

let uninitialized;
console.log(uninitialized);

//5.Null - Represents the intentional absence of any object value.

let box = null;
console.log(box);

//6.Symbol - Represents a unique and immutable value, often used as object property keys.

// let unique = symbol("key");
// console.log(unique);

//7.BigInt - Represents whole numbers larger than 2^53 - 1 (the largest number JavaScript can reliably represent with the Number type).

let largerNumber = 9080878948n;
console.log(largerNumber);

//------------------------------------------Non-Primitive Data Types--------------------------------
//1.Object
/*Represents a collection of properties, each consisting of a key (usually a string) 
and a value (which can be any data type, including another object).*/


let person = {
    name: 'shyam', // Corrected: changed ':' to ','
    age: 21,
    isEmployed: true,
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.isEmployed);






//2.Array
//A special type of object used for storing ordered collections of values.


let numbers=[1,2,3,4,5,6,7];
console.log(numbers);


//mixed diff data types int,array,true,null


let mixedData=[2,'shyam',false,null];
console.log(mixedData);


//3.Function
//A special type of object that is callable and can perform an action.

function invite(){
    console.log("you are invited");
    
}
invite();



//4.Date - A built-in object for handling dates and times.

let now=new Date();
console.log(now);
