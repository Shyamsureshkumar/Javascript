//Type Conversion (Manually)
/*Type conversion (also known as type casting) is when you explicitly convert a
value from one type to another. JavaScript provides several functions for this purpose.*/

// Type Conversion
console.log('Type Conversion');

// String to Number

let strNum='12345';
let num=Number(strNum);
console.log(num);
console.log(typeof(num));


// Number to String


let numStr=456;
let str=String(numStr);
console.log(str);
console.log(typeof (str));


// Boolean to String

let bool=true;
let strBool=String(bool);
console.log(strBool);
console.log(typeof strBool);


// String to Boolean


let string='shyam'
let strbool=Boolean(string);
console.log(strBool);
console.log(typeof strBool);





//----------------------------------------------Parsing integers and floats---------------------------------------



//parsing integer and float

let float=87.8;
let int=parseInt(float);
console.log(int);

let flo=parseFloat(float);
console.log(flo);




//Type Coercion
/*Type coercion is when JavaScript automatically converts a
value from one type to another during an operation.
This often happens with equality checks and arithmetic operations. */

// Type Coercion (Automatically)
console.log('Type Coercion');

// String and Number


let result='5'+2;    // + takes string concatenation
console.log(result);

let result2='5'-2;
console.log(result2);
 
let result3= '5'*2;
console.log(result3);

let result4= '5'/2;
console.log(result4);


// Boolean and Number



let result5 = true+1;   // true=1  false=0
console.log(result5);


let result6= false+1;    //0+1=1
console.log(result6);



// Coercion occurs in equality checks (==), but not in strict equality checks (===).
// Equality checks
 

console.log(1=='1'); // true
console.log(1==='1');// //because strict mode apply checks data type also
console.log(0==false); // 0=false  //false
console.log(0===false); //false

 

