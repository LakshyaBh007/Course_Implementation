//require function to load modules
const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Lakshya');
fs.appendFileSync('notes.txt', ' I am from Jaipur');

console.log('app.js');

const name = 'Lakshya Bhatia';
const add = function(a,b){
    return a + b;
}
const getNotes = 

module.exports = [name,add];