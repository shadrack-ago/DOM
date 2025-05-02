const button = document.querySelector('.small-container');
        const alertBtn = () =>{
            button.style.backgroundColor='red';
        }
        button.addEventListener("mouseover", alertBtn);


        const name=document.getElementById('name');
        const list=document.getElementsByClassName('list')[0];
        
        name.addEventListener('change', () => {
  const newItem = document.createElement("li");
  newItem.style.listStyleType = "number";
  newItem.textContent = `Hello, ${name.value}`;
  list.appendChild(newItem);
});

const btn=document.getElementById('btn');
btn.addEventListener('click', () => {
    const listItems = list.getElementsByTagName('li');
    let i=listItems.length-1;
    listItems[i].remove();
});

const btn2=document.getElementById('btn2');
  btn2.addEventListener('click', () => {
    const listItems = list.getElementsByTagName('li'); 
    let i=listItems.length-1;
    while (i >= 0) {
        listItems[i].remove();
        i--;
    }
    
  });


        const buttons = document.querySelectorAll('.btn');
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                alert('Button clicked!');
            });
        });


        const container = document.querySelector('.container');
        container.addEventListener('click', (event) => {
            if (event.target.tagName === 'BUTTON') {
                alert('Button inside container clicked!');
            }
        });
        
        // dynamic buttonsconst button = document.getElementById("toggleButton");
      const text = document.getElementById("toggleText");
    
      button.addEventListener('click', function () {
        if (text.style.display === "none") {
          text.style.display = "block";
          button.textContent = "Hide Text";
        } else {
          text.style.display = "none";
          button.textContent = "Show Text";
        }
      });
      const slider = document.getElementById("fontSlider");
      const text1 = document.getElementById("sliderText");
    
      slider.oninput = function () {
        text1.style.fontSize = `${slider.value}px`;};