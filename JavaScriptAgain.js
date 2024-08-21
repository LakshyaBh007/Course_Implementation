//Template Strings - Backticks (allows multiple expressions)
let name = 'Lakshya Bhatia';
console.log(`Hi,${name}`);

let msg = `Hello
Javascript`;
console.log(msg);

const nm = {name:'lb',age:'22'};
console.log(`Hi, my name is ${nm.name} 
and I am ${nm.age} years old`);

console.log(`This in line one.
This is line two.`)

//Spread Operator (spread and expands arrays, objects and strings)
function sum(x,y,z) {
    return x+y+z;
}
const sum1 = (x,y,z) => x+y+z;
const num = [12,343,657,2432,23];
console.log(sum1(...num));

const movies = ['ironman', 123, "thor"];
const random = [...movies];
console.log(random);

const ar1 = [23,343,54,45,'fggh'];
const ar2 = ['fd','fdf','fdf', 34];
const ar3 = [...ar1,...ar2];
console.log(ar3);

const fruits = ['apple', 'mango', 'banana'];
const addfruit = ['papaya', ...fruits];
console.log(addfruit);

const getfruit = (x,y,z) => console.log(`Fruits:${x},${y},${z}`);
getfruit(...fruits);

const ob1 = {rollno:21, name:'rajiv'};
const ob2 = {age:33, country:'India'};
const ob3 = {...ob1,...ob2};
console.log(ob3);

const ab = 'Iamblack';
const up = [...ab].map((x)=> x.toUpperCase()).join("-");
console.log(up);

//Sets
//Unique Values: Sets automatically remove duplicate values.
//Insertion Order: Sets maintain the order of elements as they are inserted.
//Iterable: Sets are iterable, meaning you can loop over their values using a for...of loop or other iteration methods.
//No Indexing: Sets do not support indexing; instead, they use methods to access and manipulate their elements.
const numy = new Set([12,4,4,4564,65,34,87,95]); 
console.log(numy);
console.log(typeof numy);

numy.add(23);
numy.add(23);
numy.add(64);
numy.delete(4);
console.log(numy);
console.log(numy.has(4));
console.log(numy.has(64));
for (const a of numy){
     console.log(a*a)
 }
numy.forEach((a)=> console.log(a*a));
console.log(numy.size);
const numy1 = new Set([122,34,567,896,32,64,23]);
const union = new Set([...numy,...numy1]);
const intersection = new Set([...numy].filter((x)=>numy1.has(x)));
const difference = new Set([...numy].filter(x=> !numy1.has(x)));
const difference2 = new Set([...numy1].filter(x=> !numy.has(x)));
console.log(difference);
console.log(difference2);
console.log(intersection);
console.log(union);
numy.clear();

//Default Parameters
function addy(x=23,y=21){
    console.log(x+y);
}
addy(2424,546);
addy(undefined,2323);
addy(123);
addy()

//Repeat
const rp = 'hello argusoft\n';
console.log(`${rp.repeat(10)}`);

//Arrow Functions
const square = (x) => x*x;
console.log(square(566));

//Arrow fucntion with This 
const person = {
    name:'lb',
    actions: ['gym','cricket','wrestle'],
    printActions() {
        this.actions.forEach((a)=>{
            console.log(this.name+" likes to "+a)});
    }   
};
person.printActions();

//Destructing Assingment (unpack values from arrays and objects)
const {names,fav} = {names:'lb', fav:'protein'};
console.log(names);
console.log(fav);

//Generators
//Iterator

//Global Variables(declared outside function or in window object)
var x = 10;
if (x===10){
    var x = 20;
    console.log(x);
}
console.log(x);

var value = 43545;
function setvalue() {
    value = 22; //if var value = 22 then it creates a new scope
} //with function and global value remain unchanged
function getvalue() {
    setvalue();
    return value;
}
console.log(getvalue());

var x=88;
function something(g){
    var x = 7;
    var z = x + g;
    console.log(z);
}
something(6);
console.log(x);

var x=5;
function something(g){
    x = 7;
    var z = x + g;
    console.log(z);
}
something(6);
console.log(x);


//var let const
function variableScope() {
    var xx= 0;
    let yy=5;
    const zz=10;

    console.log(xx);
    console.log(yy);
    console.log(zz);
}
variableScope();
// console.log(xx);
// console.log(yy); cannot access outside function
// console.log(zz);

if (true){
    var xx= 0;
    let yy=5;
    const zz=10;
}
console.log(xx);
// console.log(yy); 
// console.log(zz);

console.log(a); //undefined
var a = 'csdvs';

var a = 'bar';
console.log(a);

const b = 'baz';
//b = 'qux';
console.log(b)

//Hoisting
//FuncHoisting
getName('lakshya');
function getName(name){
    console.log('hello '+name)
};
//variableHoisitng
console.log(message);
var message = "The variable Has been hoisted";

// console.log(x);
// let x = 10;
// Output: ReferenceError: x is not defined
//This means we can't access the variable before the engine 
//evaluates its value at the place it was declared in the source 
//code. This is what we call Temporal Dead Zone, A time span 
//between variable creation and its initialization where they 
//can't be accessed.

var hh = null;
var c = 45;
var a = hh || c;
console.log(a);

var val = 23;
function hois(val){
    console.log(val);
}
hois(56);

const context = {
    prop: 10,
    getCurrentContext: function () {
      return this.prop;
    }
  };
  
  console.log(context.getCurrentContext());

//swapping variables
var x = 10, y = 20;
[x,y]=[y,x];
console.log(x);
console.log(y);

//scope chain
let globalVar = "I'm a global variable";

function outer() {
  let outerVar = "I'm an outer variable";

  function inner() {
    let innerVar = "I'm an inner variable";
    console.log(innerVar);
    console.log(outerVar);
    console.log(globalVar); 
}
inner();
}
outer();

//bigint
const big = 235434634n;
const big1 = 452452524n;
const big2 = big + big1;
console.log(big2);

//symbol - Unique
const sym=Symbol('ww');
const sym1=Symbol('ww');
console.log((sym===sym1)?true:false)

//null object intentional absence 
//undefined unintentional absence

//coercion - change type
const value1 = '76';
const value2 = 67;
let summ = value1 + value2; 
console.log(summ);

//typeof
let aa;
const bb = 'hello';
const cc = 45;
const dd = 3.234;
const ee = true;
const ff = null;
const gg = undefined;
const hhh = {b:'g'};
const ij = function(){return10};
console.log(typeof ij);

//unary operator - variable to number
var pp = "100";
var oo = +pp;
var mm = "gggg";
var xxx= +mm;
console.log(typeof oo, typeof pp, typeof xxx, xxx, oo);

//delete operator
var del = {name:"sm", age:30};
delete del.age;
console.log(del);

//ternary operator and chaining
const love = false;
const life = true;
console.log(love?'dream': life?'harsh':'reality');

//numbers
console.log(Math.random());
console.log(Math.floor(Math.random()*100)+1);
function Random(r){
    return Math.floor(Math.random()*r);
}
console.log(Random(1000)); 
console.log(isNaN('Hello'));
console.log(isFinite(1*0));

//string

//slice - returns new array
let xyz = ["java","greek", 12335, "php"];
console.log(xyz.slice(1,4));
console.log(xyz.splice(2,2,50,'fgh'));
console.log(xyz);

//substring check index of, test, includes
let str = "javapythonnode";
let exp1 = 'python';
console.log(str.indexOf('python'));
console.log(str.includes('java',5));

//trim
const fname = "\t   jivan    manny  \n  ";
console.log(fname.trim());
console.log(fname.trimEnd());
console.log(fname.trimStart());

//eval
console.log(eval('45+89'))

//startswith
console.log(str.startsWith('java'));
console.log(str.startsWith('node'));









