
let person={

  Name:'shyam',
  age:21,
  isemployeed:false,

};


console.log(person);
console.log(person.Name);
console.log(person.age);
console.log(person.isemployeed);

// Adding a new property

person.city='Banglore'
console.log(person);


// Modifying an existing property


person.age=22
console.log(person);


// Object with method


let bike={

brand: 'KTM',
mode: ' RC ',
year: ' 1978',


display:function(){

return `${this.brand} ${this.mode} ${this.year}`

}};

console.log(bike);
console.log(bike.display());


// Destructuring assignment


let student ={

name: 'shyam',
age: '21',
id: '3',
}

let { name, age ,id  } =student

console.log(student);
console.log(name);
console.log(age);
console.log(id);



//Nested Complex Objects


let restaurant={
     
name: 'SNS',
location: 'Karaikudi',
owner:{
 name:'Shyam',
 age: 21,
 contact:{
   email:'shyamsuresh209@gmail.com',
   ContactNumber:'9090-8789-48'
},
},
menu:[
  
      { dishes:'Dosai', Prize:'50' , Spicy:true},
      { dishes:'Poori', Prize:'30' , Spicy:false},
      { dishes:'Coffee', Prize:'20' , Spicy:false},
]};


// Accessing properties of the nested objects


console.log(`Welcome to ${restaurant.name} in ${restaurant.location}` );
console.log(`Owned by ${restaurant.owner.name} age ${restaurant.owner.age} `);
console.log(`Contacts email:${restaurant.owner.contact.email}  Phone:${restaurant.owner.contact.ContactNumber} `);


restaurant.menu.forEach((item)=>{

console.log(`${item.dishes} RS.${item.Prize} ${item.Spicy  ?  'spicy' : 'not spicy'  }  `);
})


// Destructure owner object


let {
name: ownerName,
age:ownerAge,
contact:{email: ownerEmail , ContactNumber:ownerPhone }
}=restaurant.owner;

// Output details about the restaurant


console.log(`owned by ${ownerName} age ${ownerAge} `);
console.log(`email: ${ownerEmail} phone: ${ownerPhone}  `);



// Output the menu items using destructuring within forEach

restaurant.menu.forEach(({dishes,Spicy,Prize})=>{

  console.log(`${dishes} RS.${Prize} ${Spicy  ?  'spicy' : 'not spicy'})`);
  });
  
  