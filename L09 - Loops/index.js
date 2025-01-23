// Loops
/* 
In programming, loops are used to execute a block of code repeatedly until
a specific condition is met or for a specified number of times.
They provide a way to perform repetitive tasks efficiently without writing
the same code multiple times.
*/

/* 
Types of Loops
1. For Loop
2. While Loop
3. Do While Loop
 */

// For Loop Example


for(let i= 1; i<=5; i++){
    console.log(`iteration ${i}`);
    
}        

//Looping Backwards


for(var i=5; i>=0; i--){
    console.log(`Reverse iteration ${i}`);
    
}

//Nested Loop

for( var i=1; i<=2; i++){
    console.log(`Outer loop${i}`);
    for( var j=1; j<=2; j++){
        console.log(`Inner loop${j}`);
        
    }
    
}

// While Loop Example
let k = 1;
while (k < 5) {
    console.log(k);
    k++;
}


// While loop Examples 


let balance=10;
while(balance>0){
    console.log(`RS.1 is spent,your current balance amount is ${balance}`);
    balance --;
}

console.log(`Balance amount is:${balance}`);



// another examples...


while(balance<50){
balance += 10;
console.log(`your IOB amount is${balance}`);

     }

console.log(`Remaining balance:${balance}`);


// Do While Loop Example
let s = 1; // Initialize the counter

do {
    console.log(s); // Print the current value of i
    s++; // Increment the counter
} while (s <= 5); // Condition: continue as long as i is less than or equal to 5



// break and continue

for (let b = 0; b < 10; b++) {
    if (b === 3) {
        continue; // Skip the rest of the loop for b === 3
        //break 
    }
    console.log(b); // Print the current value of b
}


//loops and function

function shyam(){

    console.log('shyam developer');
    
}
for( let i=0; i<10; i++){
    shyam();
}
    

// anothr example
 
function loop(name){

    console.log(`hello ${name}`);
    
}
for( let i=0; i<10; i++){
    loop('shyam');
}