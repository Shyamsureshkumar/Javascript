// Decision Making: if, if...else, else if

console.log('Decision Making');

//decison making or control flow in programming is the way we control the execution of code based on certain conditions.
//this allows the program to make choices and execute differnt code paths

//Types of Decision making:

//1.if
//2.if else
//3.else if
//4.switch
//5.ternary operator

//-------------------------Syntax-----------------------------
/* 
if(condition){
    //code block
}
else if(conditon){
     //code block
}
else{
    //code
}
*/

// ----------------------------Switch case Syntax----------------

/*

switch(value){
case 1:
    //code
break;    
case 2:
    //code
break;    
case 3:
    //code
break;    
}
*/

//--------------------------Ternary operator syntax--------------------

//   condition ? expressionIfTrue : expressionIfFalse;




// Example 1: if statement



let temperature=25;
if(temperature >=23){

    console.log("its cold outside");
    }



// Example 2: if...else statement

let mobile=35000;
if(mobile>50000){
    console.log("You can buy iphone");
    
}
else{
    console.log("You can buy oneplus");
    
}


//another example of if..else statement


let rain=true;

if(rain){
    console.log("Raining outside");
    
}
else{
    console.log("Its hot outside");
    
}

// Example 3: else if statement


let timing=19;

if(timing<15){
    console.log("Good morning");
    
}
else if(timing<14){
    console.log("Good Evening");
    
}

else{
    console.log("good night");
    
}




// Example 4: Nested if statements


let age = 21;
let hasVIPPass = true;

if (age >= 18) { // Check if the person is an adult
    if (hasVIPPass) { // Check if the person has a VIP pass
        console.log("You can enter the VIP section.");
    } else {
        console.log("You can enter the club, but not the VIP section.");
    }
} else {
    console.log("You are not allowed to enter the club.");
}

//Another example

let day=4;
if(day===1){
    console.log("Monday");
    
}
if(day===2){
    console.log("Tuesday");
    
}
if(day===3){
    console.log("Wednesday");
    
}
if(day===4){
    console.log("Thursday");
    
}

if(day===5){
    console.log("Friday");
    
}

if(day===6){
    console.log("Saturday");
    
}

if(day===7){
    console.log("Sunday");
    
}


// Switch Statement

let Day=6;
switch(Day){
    case 1:
    console.log("Monday");
    break;
    
    case 2:
    console.log("Tuesday");
    break; 
    
    case 3:
    console.log("Wednesday");
    break;    

    case 4:
    console.log("Thursday");
    break;    

    case 5:
    console.log("Friday");
    break;    

    case 6:
    console.log("Saturday");
    break;
    
    case 7:
    console.log("Sunday");
    break;
        
}


//another example of switch statement


let phone='onePlus';
switch(phone){

    case 'vivo':
    console.log("You can buy Vivo t3 ultra");
    break;
   
    case 'samsung':
    console.log("you can buy samsung s23 ultra");
    break;
        
    case 'Apple':
    console.log("you can buy iphone 16 pro max");
    break;

    case 'onePlus':
    console.log("you can buy oneplus 12R");
    break;

    case 'moto':
    console.log("you can buy moto edge 50 fusion");
    break;    
}


//Ternary Operator



let AGE = 18;
let canVote = (AGE>= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: "Yes, you can vote."


//Another example of ternary operator

let mark=80;
let grade=(mark<=100)? "You are A grade." : " You are b grade";
console.log(grade``);
