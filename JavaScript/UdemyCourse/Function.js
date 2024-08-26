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

//Function Challenge 4: 