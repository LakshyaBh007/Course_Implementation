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
something(8);
console.log(x);

var x=5;
function somethings(g){
    x = 8;
    var z = x + g;
    console.log(z);
}
somethings(6);
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

var hh = null;jjjjj
var c = 45;
var a = hh || c;
console.log(a);
j
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
