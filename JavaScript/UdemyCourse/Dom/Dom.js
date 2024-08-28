//Dom - document object model

//Document object - entry point

//getElementById
//getElementsByTagName
//getElementsByClassName

//querySelector - can be used to select all of the above
// on single element (first match)
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