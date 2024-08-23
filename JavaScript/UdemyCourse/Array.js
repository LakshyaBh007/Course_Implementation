//Array
let color = ['red','white','black'];
console.log(color[2]);
color[7] = 'green';
console.log(color);

//Methods
color.push(55,56)
color.pop()
color.shift()
color.unshift(123)
color.reverse()
console.log(color);
console.log(color.includes('red'));
console.log(color.indexOf(123,1));
console.log(color.slice(1,-3));
console.log(color.splice(2,4,20,30,303,3));
color.sort()
console.log(color.reverse().join('-'));

//concat
let fruits =  ['aaple','banna'];
let veggies = ['onion']
let meat = ['steak']
console.log(fruits.concat(veggies,meat));

//array assigned by const can change value

//nested array
const board = [
  ['0', null, 'x'],
  ['0', null, 'x'],
  ['0', null, 'x']

];
console.log(board[0][1]);

