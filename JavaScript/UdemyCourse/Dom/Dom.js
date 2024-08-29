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

const inputs = document.querySelectorAll('input');
console.log(inputs); //value used for extracting input value

console.log(inputs[2].value);
console.log(inputs[2].checked);

inputs[0].value = 'the bear';

console.log(inputs[3].value);

console.log(inputs[1].placeholder);
inputs[1].placeholder = 'please enter password';

const a = document.querySelector('a');
console.log(a.href);
a.href = "http://www.google.com";

const img = document.querySelector('img');
console.log(img.src);
img.src = "https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor.jpg"

const range = document.querySelector('input[type="range"]');
console.log(range.getAttribute('max'));
console.log(range.getAttribute('min'));
console.log(range.getAttribute('total')); //getting attributes
console.log(range.getAttribute('type'));

range.setAttribute('min','-500')
range.setAttribute('type', 'radio') //setting attributes

const firstLI = document.querySelector('li');



