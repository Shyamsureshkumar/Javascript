/*
Document Object Model (DOM) manipulation

//similarly in a webpage,you can use javascript to manipulate the DOM(Document object model) 
// to add,remove,or change elements on the page



The following the way to Selecting & Modifying Element in DOM
1.getElementById
2.getElementsByClassName
3.getElementsByTagName
4.querySelector
5.querySelectorAll
*/

// getElementById

//select a single element based on its unique id attribute

let heading = document.getElementById("main-heading");
console.log(heading);

//Finding value
console.log(heading.innerHTML); //shown inside the all element and content
console.log(heading.textContent); //shown only content

heading.innerHTML = "welcome to javaScript course!"; //change the content

function changeHeading() {
  heading.textContent = "Welcome to the JavaScript course!";
}
setTimeout(changeHeading, 2000); // Changes the heading text after 2 seconds

//2.getElementByClassName

const listItems = document.getElementsByClassName('list-item');
console.log(listItems);

console.log(listItems.item(2));
 
console.log(listItems.item(2).innerHTML);


// use this method to access all list items


for(let i=0; i<listItems.length; i++){
  console.log(listItems.item(i).innerHTML);
  
}



// Iterate over the HTMLCollection and change the innerHTML of each list item


for (let i = 0; i < listItems.length; i++) {
  listItems.item(i).innerHTML = `Modified Item ${i + 1}`;  
}




//using for each method

const arrayContent=Array.from(listItems);

arrayContent.forEach((product)=>{

console.log(product.textContent);
  
})





//3.getElementsByTagName


const contents =document.getElementById('content').getElementsByTagName('p');
console.log(contents);


//add styles
function contentsItemstyle(){

  contents.item(0).style.color = 'red'
  contents.item(1).style.fontSize = '14px'
  contents.item(2).style.fontWeight = '1000'
  contents.item(3).style.backgroundColor = 'pink'
  contents.item(3).style.color = 'white';
  
}
contentsItemstyle();


//for padding
function contentStyle(){

for( let i=0; i<contents.length; i++){

contents.item(i).style.paddingBottom = '10px';
}
}

contentStyle();


//remove element from DOM


const message = document.getElementById('message')
// alse use message.remove();

setTimeout(() => {
  message.remove();
}, 3000);



// add element in dom


const para = document.createElement('p')

para.textContent = 'added a new paragraph'

const container = document.getElementById('main')

para.style.color= 'blue'; //for colring

para.classList.add('paracolor'); 



/*
appendchild(): Adds a new element last child of the parent element...
insertbefore(): insert a new element before an existing child element .
insertAdjacentHTML(): inserts HTML content at a specified position relative to an
*/

// container.appendChild(para); //print lastly in parent class

// container.insertBefore(para,heading); //print heading previous..

// container.insertAdjacentHTML('afterbegin','<p>see mee after main begin</p>'); //print main starting
// 
// container.insertAdjacentHTML('afterend','<p>see mee after main end</p>'); //print main end

// container.insertAdjacentHTML('beforbegin','<p>see mee before main begin</p>'); //print main before

container.insertAdjacentHTML('beforeend','<p style="padding-top:100px;">see mee before main end</p>');//print main end   



//.4 query selector

//Selecting elements using queryselector(work both class or id more flexibility)

const selector = document.querySelector('#subtitle')  // if use class means use . ('.subtitle')  id means( use # symbol)
console.log(selector);
console.log(selector.textContent);

setTimeout(() => {
  selector.textContent='New subtitle from JS'
}, 3000);


//5.query selector all



const allSelector = document.querySelectorAll('.list-item')
console.log(allSelector);
 
allSelector.forEach((item, index)=>{

  item.textContent = `Modified Item ${index +2}`;
});

