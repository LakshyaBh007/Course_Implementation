//Dice Roll
function rollDice(){
    let roll = Math.floor(Math.random()*6)+1;
    console.log(`Rolled: ${roll}`);
}
rollDice();

//arguments
function greet(name){
    console.log(`Hi ${name}`);
}

function throwDice(numRolls){
    for (let i = 0; i < numRolls; i++){
        rollDice();
    }
}
throwDice(10);

//return
function add(x,y){
 return x+y;
}
console.log(add(34,54));

//Function Challenge 1: Password Validator
function passwordValidator(username,password){
    if ((password.length < 8) || 
        (password.includes(username) !== false) || 
        (password.includes(' ') !== false)) {
            return false;
        }
    else {
        return true;
    }
}

console.log(passwordValidator('lakshya','123lakshya4678'));

//Function Challenge 2: Average
function average(array){
    let sum = 0;
    let avg = 0;
    for (let a of array){
        sum += a;
    }
    avg = sum/array.length;
    return avg;
}
console.log(average([23,54,65,253,664,34]));

//Function Challenge 3: Pangrams
function isPangram(string){
    let lower = string.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz'){
        if (lower.indexOf(char) === -1){
            return false;
        }
    }
    return true;
}
console.log(isPangram('djsunbheiofhnsafklnaiodfnsd'));

//Function Challenge 4: Get Random Card
 function getCard(){
    let val = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    let st = ['Clubs','Spades', 'Hearts', 'Diamonds'];
    let idx = Math.floor(Math.random()*val.length);
    let value = val[idx];
    let stidx = Math.floor(Math.random()*st.length);
    let suit = st[stidx];
    return {Value: value, Suit: suit};
 }
console.log(getCard());



function doubleArr(arr){
    const result = [];
    for (let num of arr){
        let double = num*2;
        result.push(double);
    }
    return result;
 }
console.log(doubleArr([232,535,344]));

function add(x, y) {
    return x + y;
  }
  
const subtract = function (x, y) {
    return x - y;
  }
  
function multiply(x, y) {
    return x * y;
  }
  
const divide = function (x, y) {
    return x / y;
  }
  
const operations = [add, subtract, multiply, divide];
  
  for (let func of operations) {
    let result = func(30, 5);
    console.log(result);
  }
  
const thing = {
    doSomething: multiply
  }
console.log(thing.doSomething(4, 5));

function callthreetimes(fa){
    fa();
    fa();
    fa();
}

function rage(){
    console.log('I hate everthing');
}

callthreetimes(rage);

function repeatNtimes(action,num){
    for(let i = 0; i < num; i++){
        action();
    }
}

repeatNtimes(rage,5);

function pickOne(f1,f2){
    let rand = Math.random();
    if(rand<0.5){
        f1()
    }else{
        f2()
    }
}
pickOne(rage,repeatNtimes)

function multiplyBy(num){
 return function(x){
    return x*num
 }
}

function makeBetweenFunc(x,y){
    return function(num){
        return num>=x && num<=y;
    }
}

const isChild = makeBetweenFunc(0,18);
const isInNineties = makeBetweenFunc(1998,1999);
const isNiceWeather = makeBetweenFunc(68,79);
console.log(isChild(67));
console.log(isInNineties(1998));
console.log(isNiceWeather(98));

//Arrow Functions
