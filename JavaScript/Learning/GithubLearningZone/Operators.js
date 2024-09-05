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
