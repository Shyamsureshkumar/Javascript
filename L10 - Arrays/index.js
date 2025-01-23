/*
An array is a data structure that can hold multiple values at once. 
These values can be of any type, including numbers, strings, objects, or even other arrays.
Arrays in JavaScript are zero-indexed, meaning the first element is at index 0.
*/


//Array syntax

//const arrayName=[item1,item2,item3];//

// Using square brackets

let fruits=['apple','orange','pomagranate'];
console.log(fruits);


// Accessing Array Elements:

console.log(fruits[0]);


// Change Value in Array

fruits[2]='banana';
console.log(fruits);


/*
Using for loop to print array with hard-coded condition 
it will create issue if condition is like i < 5
*/

for(i=0; i<3; i++){
    console.log(fruits[i]);
    
}

/* 
To avoid hard-coded condition switch to array methods
*/
// We can use array length
console.log(fruits.length);

for(i=0; i<fruits.length; i++){
    console.log(fruits[i]);
    
}

// More Array Methods


let bag=['note','pen','laptop']
console.log(bag);



/* 
Add element to array
Adds one or more elements to the end of an array 
and returns the new length of the array.
*/


bag.push('Diary')
console.log(bag);


/*
Remove element from array
Removes the last element from an array and returns that element.
*/

bag.pop()
console.log(bag);


/*
Adds one or more elements to the beginning of an array and returns the new length of the array.
*/


bag.unshift('water Bottle')
console.log(bag);


/*
Removes the first element from an array and returns that element.
*/


bag.shift()
console.log(bag);

// Anonymous Functions

bag.forEach(function(x,index){
  console.log(x,index);
});



bag.forEach((x,index)=>{
console.log(x,index);
});



// Combining Arrays


let containerOne=['oneplus','iqoo'];
let containerTwo=['Apple','Samsung'];

console.log(containerOne);
console.log(containerTwo);

let container=containerOne.concat(containerTwo);
console.log(container);


// Finding an Element Index, If not found it will return -1

/*
let index=container.indexOf('iqoo');
console.log(index);
*/



let searchValue='Apple'

let index=container.indexOf(searchValue);
console.log(index);

if(index > 0){
    console.log(`index of ${searchValue} is ${index} `);
}

else{
    console.log('not available in container');
    
}

// Array with mixed data types


let mixedData=[10, 3.4, 'Elon musk', 'abdul kalam', true, false, null, undefined];
console.log(mixedData);


/*
let data=mixedData.includes('Elon musk');
console.log(data);
*/



console.log(mixedData.includes('abdul kalam'));
console.log(mixedData.includes(null));
console.log(mixedData.includes(false));
console.log(mixedData.includes(48));



// Array of Employee Objects



let employee=[
             {id:1, name:'santhos kumar', age:21},
             {id:2, name:'selva ganapathy', age:22} , 
             {id:3, name:'shyam', age:23},
];
console.log(employee);

employee.forEach((employee)=>{

    console.log(`Employee id: ${employee.id} `);
    console.log(`Employee name: ${employee.name} `);
    console.log(`Employee age: ${employee.age} `);
    
});





//Fliters


let employees=employee.find((x)=>x.id===3 );
console.log(employees);


let x=employee.filter((x)=>x.age>20);
console.log(x);


// Map



let dob=employee.map((employees)=>{
console.log(`Name:${employees.name},Dob:${new Date().getFullYear()-employees.age}`);
});