//Default Parameters
function multiply(x,y=6){
    return x+y;
}
console.log(multiply(2));

//Spread
//Spread on function and string
function giveMeFour(a, b, c, d, e) {
    console.log('a', a)
    console.log('b', b)
    console.log('c', c)
    console.log('d', d)
    console.log('e', e)
  }
const colors = ['red', 'orange', 'yellow', 'green']

giveMeFour(colors);
giveMeFour(...colors);
giveMeFour(...'GOAT'); //string

//Spread on arrays
const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];

const mollusca = [...cephalopods, ...gastropods]
console.log(mollusca);

const inverts = [...cnidaria, ...gastropods, ...cephalopods]
console.log(inverts);

const cephCopy = [...cephalopods];
console.log(cephCopy);

//Spread on Objects
const feline = {
    legs: 4,
    family: 'Felidae'
};

const canine = {
    family: 'Caninae',
    furry: true,
    legs: 4
};
  
const dog = {
    ...canine,
    isPet: true,
    adorable: true
}
console.log(dog);
  
const houseCat = {
    ...feline,
    isGrumpy: true,
    personality: 'unpredictable'
}
console.log(houseCat);

const catDog = {
    ...canine,
    ...feline
};
console.log(catDog);

const tripod = {
    ...canine,
    legs: 3,
};
console.log(tripod);
  
const catDogClone = {
    ...catDog
};
console.log(catDogClone);
  
const random = [...'hello', {
    ...catDog
}];
console.log(random);

//Arguments Object

//not an array
//capture everythings
//doesnt work with arrow functions

function sum(){
    const arg = [...arguments];
    return arg.reduce((a,c)=>a+c);
}
console.log(sum(34,34,343,4))

//Rest

//can be used with arrow functions
function sum(...nums){
    return nums.reduce((a,b)=>a+b);
}
console.log(sum(34,434,34,35,345,5));

function fullName(first,last,...other){
    console.log('first', first);
    console.log(last);
    console.log(other);
}
console.log(fullName('lakshya','bhatia',344,'jaipur',66));

//Destructuring
//Arrays Destructuring
const raceResults = [
    'Eliud Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Ghirmay Ghebreslassie',
    'Alphonce Simbu',
    'Jared Ward'
  ];
const [gold, silver, bronze] = raceResults;
console.log(gold);
  
const [first, , , fourth] = raceResults;
console.log(fourth);
  
const [winner, ...others] = raceResults;
console.log(others); 

//Objects Destructuring
const runner = {
    fname: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
    title: "Elder of the Order of the Golden Heart of Kenya"
  }

//const {fname,last} = runner;
//console.log(fname);

const {country:nation, title:desc} = runner;
console.log(nation);
console.log(desc);

const {fname,last,...other} = runner;
console.log(other);

//Nested Destructuring
const results = [{
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
  },
  {
    first: 'Feyisa',
    last: 'Lilesa',
    country: 'Ethiopia'
  },
  {
    first: 'Galen',
    last: 'Rupp',
    country: 'United States'
  }
]

const [{
  first: goldWinner
}, {
  country
}] = results;

console.log(goldWinner);
console.log(country);

function print({
    fname,
    last,
    title
}){
 console.log(`${fname} ${last}, ${title}`)
}
print(runner);
  
const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json',
]

function parseResponse([protocol, statusCode, contentType]) {
    console.log(`Status: ${statusCode}`)
}
parseResponse(response);