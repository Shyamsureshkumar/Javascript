//Operators
/*
1.Arithmetic Operators
2.Assignment Operators
3.Comparison Operators
4.Logical Operators
5.String Operators
*/

//-------------------.Arithmetic Operators - Arithmetic operators are used to perform basic mathematical operations
//1.1)Addition (+)

let sum=5+5;
console.log(sum);


let a=5;
let b=5;
let add=a+b;
console.log(add);



//1.2)Subtraction (-)


let sub=10-3;
console.log(sub);




//1.3)Multiplication (*)



let mul=5*5
console.log(mul);


//1.4)Division (/)

let div=10/2
console.log(div)

//1.5)Modulus (%)

let remainder=10%3
console.log(remainder);


//1.6)Exponentiation (**)


let power=2**3
console.log(power);


//1.7)Increment (++)


let countone=8
countone++;
console.log(countone);

let x=5;
let y=x++;
console.log(x);




//1.8)Decrement (--)

let decrement=10
decrement--;
console.log(decrement);


//-------------------------2.Assignment Operators - Assignment operators are used to assign values to variables.



//2.1)Assignment (=)


let z=20;
console.log( 'assignment:',z);


//2.2)Addition Assignment (+=)

let A= 10; // Assigns the value 10 to the variable x



let c = 5;
c+= 3; // Equivalent to x = x + 3, so x is now 8
console.log( 'addition assignment:', c);



//2.3)Subtraction Assignment (-=):


let d = 5;
d-= 2; // Equivalent to x = x - 2, so x is now 3
console.log('subraction assignment:', d);




//2.4)Multiplication Assignment (*=):

let e = 5;
e *= 2; // Equivalent to x = x * 2, so x is now 10
console.log('Multiplication assignment:',e);


//2.5)Division Assignment (/=):


let f= 10;
f /= 2; // Equivalent to x = x / 2, so x is now 5
console.log('division assignment:', f);



//2.6)Modulus Assignment (%=):

let g = 10;
g %= 3; // Equivalent to x = x % 3, so x is now 1
console.log('modulus assignment:', g);



//2.7)Exponentiation Assignment (**=)


let h = 2;
h **= 3; // Equivalent to x = x ** 3, so x is now 8 (2 to the power of 3)
console.log('exponential assignment:', h);



//---------------------3.Comparison Operators - Comparison operators are used to compare two values.

//3.1)Equal (==)


console.log('Equal 5==5:', 5==5);
console.log("Equal 5=='5':", 5=='5');  // type coercion applied




//3.2)Strict Equal (===)



console.log("equal 5==='5':", 5==='5'); //strict equal checks data type also


//3.4)Not Equal (!=)


console.log('not equal:', 4!=5); //true    false=true   //   true=false
console.log('not equal:', 4!='5');// type coercion plays

//3.5)Strict Not Equal (!==)

console.log('strict equal:',  4!=='5'); // true it checks datatype also
console.log('strict equal:', 5!==5);// false


//3.6)Greater Than (>)

console.log('greater than:', 8>6);  //true
console.log('greate than', 2>7);  //false



//3.7)Less Than (<)




console.log('less than', 4<5); //true
console.log('less than', 10<6);//false



//3.8)Greater Than or Equal (>=)

console.log(10>10);//false
console.log(10>=10);//true
console.log(11>10);//true



//3.9)Less Than or Equal (<=)

console.log(10<=10);//true
console.log(4<=2);//false




//---------------------------4.Logical Operators - Logical operators are used to combine multiple conditions.

//4.1)Logical AND (&&)


console.log('AND:',true&&true); //true
console.log('AND:',true&&false);//false
console.log('AND:',false&&true);//false
console.log('AND:',false&&false);//false


//4.2)Logical OR (||)


console.log('OR:', true||true); //true
console.log('OR:', true||false);//true
console.log('OR:', false||false);//false
console.log('OR:', false||true);//true


//4.3)Logical NOT (!)

console.log('NOT:', !true); //false
console.log('NOT:',!false);//true



// Example of logical operator

let haveIdproof=true;
let isAdult=false;

if(haveIdproof || isAdult){
    console.log("you are eligible to voting");
}
else{
    console.log('not eligible to voting');
}



// String Operators

//String concatenation


let str='Hello'+' '+'shyam!';
console.log(str);

str+=' How are You...';
console.log(str);



//String with Different Quotes:



console.log("Im Getting 'PRIME' Back");


//Concatenation with Object Properties:


let details={
    name:'shyam',
    id:8748,
}


console.log('welcome ' + details.name   +  ' Your id is ' + details.id );


//Template literal


console.log(`welcome ${details.name}  your id is ${details.id} ` )  ;


//Order Prcedence


console.log(2+4*3); //  4*3=12 12+2=14
console.log((2+4)*3);// First preference in bracket  2+4=6 6*3=18



// New Examples with - and /

console.log(10-2/2); // 2/2=1  10-1=9
console.log((10-2)/2);// 10-2=8 8/2=4
  



// Additional Combined Example


console.log((8/2)*(2+2));//2+2=4 8/2=4 then 4*4=16

