



//--------------------------- Functions-----------------------------------
// Functions are pieces of code that we can reuse again and again in our code
// they help in organizing code,avoiding repetion and improving readability and maintainability


// Types of function

/*

1. function Decalration

2. Function Expression

3. Arrow Function

4. Anonymous Function(on Array)


*/


// -------------------Function Declaration - JavaScript Hoisting

/* A function declaration defines a named function.It's hoisted,
 meaning you can call it before it's defined. */


// Function Syntax


/*
function FunctionName(){
    code
}
FunctionName()
*/

// Calling the function


//shyam() calling previous is called function hoisted

function shyam(){
    console.log("Front-end-developer");
    
}
shyam()



// Function Parameters and Arguments

/*

function FunctionName(paramter){
/code
}
FunctionName(arguments)//calling function

*/

//----------------Example


function name(username){
         console.log('good morning,' + username + '!');
          

}
name('shyam')



function names(fn,ln){
    console.log(`hello, ${fn}  ${ln} `);
    
}
names('shyam' ,'sureshkuamr')


function sum(a,b,c){
 
    console.log(a+b+c);
    

}
sum(5,5,5)


/*Functions can take parameters, which act as placeholders for the values 
that will be passed to the function.The passing value is called an argument.*/




// Default Parameter


function print(color = "pink"){
    console.log(`The colour is ${color}  ` );
    
}
print('blue');
print("black")
print()

// Function with Return Type



function add(a, b) {
    return a + b; // Returns a number
}

let result = add(3, 4);
console.log(result); // Output: 7


///////////////////////////////////////////////////////////////////////

//---------------------------------- Function Expression--------------------------
/* A function expression defines a function inside an expression.
It's not hoisted, so you can't call it before it's defined.*/



/*

const functionaname=function(){
//code block
}

function Name()// calling function
*/


// Example 1
let  morning=function(){

console.log("this is expression function");
};

morning();

// With Argument

const morningName=function(name){
    console.log(`Good Morning ${name}!`);
    
}
morningName('Shyam')



// Function Expression with Return Type



const multiply=function(a,b){
    return a*b;
};
let product=multiply(3,4);
console.log(product);


///////////////////////////////////////////////////////////////////////

// Arrow Function
// Arrow functions provide a concise syntax and do not bind their own 'this'. They are not hoisted.


//syntax of arrow function//

/*

const functionName=()=>{
    code 
};
functionName()
*/

 
//Example


const arrow=()=>{

console.log("this is arrow function");
};
arrow()


// With Argument

const argument=(role)=>{

console.log(`shyam ${role} ! `);
}

argument("Become front end development")


// Arrow Function with Return Type

const subract=(a,b)=>{

return a-b;
};

let sub=subract(10,5);
console.log(sub);



// Shorter Way

/*
const subract =(a,b)=>a-b;
console.log(subract(10,6));
*/ 

//Function Calling Other Function


function shopping(name){
console.log(`welcome, ${name} ! Enjoy your shopping ` );
}

function main(nme){
       shopping(nme);
}
main('Gayathri')


//Anonymous Functions: Later on Course on Arrays

/**
Scope of variables will on functions and loops
var: Function scoped.
let: Block scoped.
const: Block scoped.
*/


function demo(){

    var a=10;
    console.log(a);
    

if(true);
var x='var';
let y="let";
const z="const";

console.log(x);  // var
console.log(y);  //let
console.log(z);  //const

}


console.log(x); //var
console.log(y); // error because blocked scope
console.log(z); // error because blocked scope


demo()

