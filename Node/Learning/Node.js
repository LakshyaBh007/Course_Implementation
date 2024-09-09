//Node 

//Nodejs is JavaScript on server, it is possible because javascript
//uses v8 engine to run all the javascript code, also teaches js 
//new things by allowing c++ binding access the file system.
//uses non blocking model

const [name,add,getNotes] = require('./app.js');

console.log(name);
console.log(add(4,-2));
console.log(getNotes());

console.log('welcome to the class');

const validator = require('validator');
console.log(validator.isEmail('dofsgm@gmail.com'));
console.log(validator.isURL('sgsgs.com'));

//-g to install module globally so that it gets install on whole
//operating system

console.log(process.argv[2]);

