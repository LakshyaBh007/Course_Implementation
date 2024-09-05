//Dom - document object model

//Document object - entry point

//getElementById
//getElementsByTagName
//getElementsByClassName

//querySelector - can be used to select all of the above
// on single element (first match)
document.querySelector('h1'); //finds first h1 element
document.querySelector('#red'); //finds element with id of red
document.querySelector('.big') //finds element with class of

//querySelectorAll - used to select the collection

const h1 = document.querySelector('h1');
console.log(h1.innerText);

const ul = document.querySelector('ul');
console.log(ul.innerText);

console.log(document.body);

// h1.innerText = 'I am Hungry!';

// ul.innerText = 'I am Big';

console.log(h1.textContent); //similar to inner text

const p = document.querySelector('#main');
console.log(p.innerText);
console.log(p.textContent);//difference it returns all the tags as text

const form = document.querySelector('form');
console.log(form.innerHTML); //gives everything betweem tags
// form.innerHTML = 'fsjdgkf';
// form.innerHTML = '<b>I am a Bold Tag</b>'

console.log(ul.innerHTML);

h1.innerHTML += ' is cool'
h1.innerHTML += '<b>!!!!!</b>'//cant do with innerText as it will
// add string not tag
console.log(h1.innerText);

//value
const inputs = document.querySelectorAll('input');
console.log(inputs); //value used for extracting input value

console.log(inputs[2].value);
console.log(inputs[2].checked);

inputs[0].value = 'the bear';

console.log(inputs[3].value);

//Placeholder
console.log(inputs[1].placeholder);
inputs[1].placeholder = 'please enter password';

//href
const a = document.querySelector('a');
console.log(a.href);
a.href = "http://www.google.com";

//src
const img = document.querySelector('img');
console.log(img.src);
img.src = "https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor.jpg"

//getAttribute
const range = document.querySelector('input[type="range"]');
console.log(range.getAttribute('max'));
console.log(range.getAttribute('min'));
console.log(range.getAttribute('total')); //getting attributes
console.log(range.getAttribute('type'));

//setAttribute
range.setAttribute('min','-500')
//range.setAttribute('type', 'radio') //setting attributes

//parentElement
const firstLI = document.querySelector('li');
console.dir(firstLI);
console.log(firstLI.parentElement);
console.log(firstLI.parentElement.parentElement.parentElement);

//children
console.log(ul.children);
console.log(ul.children[0].innerText);

//nextElementSibling
console.log(firstLI.nextElementSibling);
console.log(firstLI.nextElementSibling.nextElementSibling);

//previousElementSibling
console.log(firstLI.previousElementSibling);

//changing all the li (text and color)
const allLis = document.querySelectorAll('li');
const colors = ['red','orange','yellow','green','blue','purple'];

for (let i = 0; i < allLis.length; i++){
    console.log(allLis[i].innerText);
}

for (let li of allLis){
    
    //li.innerHTML = 'WE ARE THE <b>CHAMPIONS</b>'
};

allLis.forEach((li,i)=> {
    //li.style.color=colors[i];
});

// //changing color
// h1.style.color = 'green';
// console.log(h1.style.color);

//changing color, size and bg color
const para = document.querySelector('p');
para.style.color = 'brown';
para.style.backgroundColor = 'yellow';
para.style.fontSize = '40px';

//getComputedStyle - gives css values
const getComp = getComputedStyle(firstLI);
console.log(getComp);
console.log(getComp.color);

const h1Styles = getComputedStyle(h1);
console.log(h1Styles.color);

const todo = document.querySelector('#todos .todo');

// todo.style.color = 'grey';
// todo.style.textDecoration = 'line-through';
// todo.style.opacity = '50%';

todo.setAttribute('class','done');
todo.setAttribute('class','todo done');

//classList
console.log(todo.classList);
todo.classList.remove('done');
todo.classList.add('done');

//toggle
todo.classList.toggle('done');
todo.classList.toggle('done');

//creating Elements
const newh2 = document.createElement('h2')
newh2.innerText = 'I like animals';
newh2.classList.add('special');

const section = document.querySelector('section');
section.appendChild(newh2); //appendchild adds inside element

const newImg = document.createElement('img');
newImg.src = 'https://assets-prd.ignimgs.com/2023/11/15/streamingwars-loki-blogroll-1700009821295.jpg?width=828';
newImg.style.width = '380px';
document.body.appendChild(newImg);

const newLink = document.createElement('a');
newLink.innerText = 'mr, bubz video! click here';
newLink.href = 'https://youtu.be/Y4aSrA8yHmc?feature=shared'
para.appendChild(newLink);

const parentUl = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.innerText = 'I am a new Li';
parentUl.appendChild(newLi);

const fLI = document.querySelector('li.todo');
parentUl.insertBefore(newLi,fLI); //inser before a particular value

const lastLi = document.querySelectorAll('li.todo')[2];
parentUl.insertBefore(newLi, lastLi);

const i = document.createElement('i');
i.innerText = 'I am Italics';
para.insertAdjacentElement('beforebegin',i);
para.insertAdjacentElement('afterend',i);
para.insertAdjacentElement('afterbegin',i);
para.insertAdjacentElement('beforeend',i);

para.append(i,newLi);
para.prepend(i,newLi);

const secUl = document.querySelector('section Ul');
const removeMe = secUl.querySelector('.special');
secUl.removeChild(removeMe);
h1.remove();

//Events
const btn = document.querySelector('#clicker');
// btn.onclick = function(){
//     console.log('hi!!!!');
// }
// btn.onclick = greet;
// btn.ondblclick = function(){
//     console.log('Double Click');
// }
// function greet(){
//     alert('hey buddy!')
// }

//addEventListener
btn.addEventListener('click',function(){
   alert('clicked!!!'); 
});
btn.addEventListener('click',function(){
    console.log('second thing')
});
btn.addEventListener('mouseover',function(){
    btn.innerText = 'stop touching me';
});
btn.addEventListener('mouseout',function(){
    btn.innerText = 'click me'
});
window.addEventListener('sroll', function(){
   console.log('stop scrolling!!')
})