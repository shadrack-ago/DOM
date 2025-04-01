
    document.getElementById("demo").innerHTML = "Hello World!";

    const h1 =document.getElementById('h1');
    h1.style.color='red';

    let b=2+4;
    console.log(b);
    console.log("happy learning");

    document.getElementsByTagName('ul')[0].innerHTML;
    
console.log(document.getElementsByTagName('ul')[0].innerHTML);

const listItems = document.querySelectorAll('li');
for (let i = 0; i < listItems.length; i++) {
    console.log(document.querySelectorAll('li')[i].innerHTML);
}

const ul=document.querySelector('ul')
const li=document.querySelector('li')
ul.append(li)
// console.log(li)
li.innerHTML='Hannah'
// li.remove()[0]
