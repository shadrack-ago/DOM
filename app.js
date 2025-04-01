//DOM Manipulation
const title = document.querySelector('.heading');
title.style.color='red';
console.log(title);

const h1=document.getElementsByTagName('h1');
h1.style.color='red';
// GetElementByClassName()


//GetelementByTagName()




// querySelector()




// querySelectorAll()

const lu =document.getElementsByTagName('ul');
const li = document.getElementsByClassName('list');

lu.append(li);
console.log(lu);
li.innerhtml='gware'; 
let a=2;
let b =3;
let c=a+b;
console.log(c);