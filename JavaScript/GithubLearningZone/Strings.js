//substring check index of, test, includes
let str = "javapythonnode";
let exp1 = 'python';
console.log(str.indexOf('python')); //substring should be used for 
//obtaining desired length
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


//Spread on string
const ab = 'Iamblack';
const up = [...ab].map((x)=> x.toUpperCase()).join("-");
console.log(up);

//lastIndexof - gives index of last occurance
const string = 'The quick brown fox jumps over brown the lazy dog';
console.log(string.lastIndexOf('brown'));

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

//Repeat
const rp = 'hello argusoft\n';
console.log(`${rp.repeat(10)}`);