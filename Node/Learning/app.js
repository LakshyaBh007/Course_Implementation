//require function to load modules
const fs = require('fs');
const chalk = require('chalk');

fs.writeFileSync('notes.txt', 'My name is Lakshya');
fs.appendFileSync('notes.txt', ' I am from Jaipur');

console.log('app.js');

const name = 'Lakshya Bhatia';
const add = function(a,b){
    return a + b;
}
const getNotes = function(){
    return "Your Notes..."
}
console.log(chalk.green('Success!'));
console.log(chalk.red.inverse.bold('Error'));

module.exports = [name,add,getNotes];