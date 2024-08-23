//for loop
for (let i = 0; i<=10; i++){
    console.log('hello');
}

for (let num = 1; num<= 20; num++){
    console.log(num*num);
}

for (let num = 200; num>=0; num -= 25){
    console.log(num)
}

//for loop array
const exam = [23,34,45,65,77];
for(let i = 0; i<exam.length; i++){
    console.log(i, exam[i]);
}

const myStudents = [
	{
		firstName : 'Zeus',
		grade     : 86
	},
	{
		firstName : 'Artemis',
		grade     : 97
	},
	{
		firstName : 'Hera',
		grade     : 72
	},
	{
		firstName : 'Apollo',
		grade     : 90
	}
];
for (let i = 0; i < myStudents.length; i++) {
	console.log(`${myStudents[i].firstName} scored ${myStudents[i].grade}`);
}

let total = 0; 
for (let i = 0; i < myStudents.length; i++) {
	total += myStudents[i].grade; 
}
console.log(total / myStudents.length); 

//for loop string
const word = 'lakshya';
let reverse = '';
for(let i = word.length-1; i>=0; i--){
    reverse = reverse + word[i];
}
console.log(reverse);

//nested loop
const gameBoard = [
[4,32,8,4],
[64,8,32,2],
[8,32,16,4],
[2,8,4,2]
];

let totalscore = 0;
for(let i = 0; i < gameBoard.length; i++){
    let row = gameBoard[i];
    console.log(row);
    for (let j = 0; j < row.length; j++){
        console.log(row[j])
        totalscore = total + row[j];
    }
}
console.log(totalscore);

//while
let j = 0;
while(j <= 5){
    console.log(j);
    j++;
}

const target = Math.floor(Math.random()*10);
let guess = Math.floor(Math.random()*10);

while (guess !== target){
    console.log(`Target: ${target} and Guess: ${guess}`);
    guess = Math.floor(Math.random()*10);
}
console.log(`Target: ${target} and Guess: ${guess}`);

//break - to break the loop

//for of

