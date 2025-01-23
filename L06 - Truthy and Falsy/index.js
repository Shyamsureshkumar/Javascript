// Truthy and Falsy Values
console.log('Truthy and Falsy Values');

// Falsy Values:= 0, ' ', undefined, null,NAN,false

/*
false

0 (zero)

"" (empty string)

null

undefined

NaN (Not a Number)


*/

console.log(Boolean(false));    // false
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));      // false



// Truthy Values:

/*
1.true

2.Any non-zero number (42, -3.14, etc.)

3.Any non-empty string ("hello", "0", "false", etc.)

4.Objects ({}, [])

5.Symbol (Symbol())

6.Any function


*/


console.log(Boolean(true));      // true
console.log(Boolean(42));        // true
console.log(Boolean("hello"));   // true
console.log(Boolean({}));        // true
console.log(Boolean([]));        // true
console.log(Boolean(Symbol()));  // true



let cash=35990;

if(cash){
    console.log("you can buy xiaomi");
    if( cash>30000){
        console.log("You cann buy oneplus 11R");
        }
    else{
        console.log("You can buy Vivo")
    }    

}
else{
    console.log("you can buy nothing");
    
}


let permission=true;

if(permission){
    console.log("you can entered Mall");
    
}
else{
    console.log("You cannot entered mall");
    
}