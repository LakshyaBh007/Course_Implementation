// const fs = require('fs')

// const book = {
//     title: 'ego is the enemy',
//     author: 'ryan holiday'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON);
// //object to json


// const parseData = JSON.parse(bookJSON);
// console.log(parseData.author)
// //json to object

// fs.writeFileSync('1-json.json',bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json');

// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title);

const fs = require('fs');
const read = fs.readFileSync('1-json.json');
const data = JSON.parse(read.toString());
data.name = 'Lakshya';
data.age = 22;
const dataJson = JSON.stringify(data);
fs.writeFileSync('1-json.json',dataJson);