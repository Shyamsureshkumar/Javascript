const button = document.getElementById('button')
console.log(button);



//Event listener

button.addEventListener('click',() => {
alert('button clicked')
});



//for Hover
 button.addEventListener('mouseover',()  => {

button.classList.add('buttonHover')

});


//for Hover Out

button.addEventListener('mouseout',()=>{

button.classList.remove('buttonHover')

});


// for keys key down .. enter key is press


// document.addEventListener('keydown',(event) =>   {

// if(event.key === 'Enter'){
//     alert('enter key is pressed')
// }
// });



// for key press after pressing enter key

// document.addEventListener('keypress',(event) =>   {

//     if(event.key === 'Enter'){
//         alert('enter key is pressed')
//     }
//     });


// for key up after realising enter key

// document.addEventListener('keyup',(event) =>   {

//     if(event.key === 'Enter'){
//         alert('enter key is pressed')
//     }
//     });

 

// for shift key

document.addEventListener('keydown',(event) => {

if(event.shiftKey){
    alert('shif key is pressed')
}

if(event.ctrlKey){
    alert('ctrl key is pressed')
}

if(event.key>='a' && event.key<= 'z'){

    alert(`alphabet key is ${event.key} pressed`)
}



if(event.key>='0' && event.key<= '9'){

    alert(`alphabet key is ${event.key} pressed`)
}



});


