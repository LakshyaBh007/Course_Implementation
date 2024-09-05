// let msg = 'you are so grounded mr';
// msg[4]
// msg.toUpperCase
// msg.toLowerCase

// let greeting = '   purple  ';
// greeting.trim().toUppperCase()

// let tvshow='catdog';
// tvshow,indexOf('cat')

// tvshow.slice(0,4)

// tvshow.replace('cat','frog')

// let a = 'TODD@gmail.com';
// let b = a.trim().toLowerCase();
// console.log(b)

// 'GARBAGE!'.slice(2),replace('B','')

// // \n new line

// let animal = 'pig';
// let sound = 'oink';
// `${animal} says ${oink}!`

// Math.PI
// Math.floor(3.45656)
// Math.round(5.6)
// Math,pow(5,5)
// Math.floor(Math.random()*6)+1 //dice

// typeof 23
// typeof 'num'
// typeof null //object
// typeof undefined

// parseInt('24')
// parseInt('545.4354')

// parseFloat('454.34') //returns decimal

// 'hello'.length < 'hello!'.length

//== checks value
//=== checks both value and type

//conditional if else
let rating = 1;

if (rating===3){
    console.log('needs improvement');
}
else if (rating===2){
    console.log('needs improvement');
}
else {
    console.log('invalid rating');
}

//nesting two if
let password = 'kiffffftty';

if (password.length>6){
    if (password.includes(' ')){  //include and indexof both can be used
        console.log('password is long enough but contains space');
    }
    else {
        console.log('password is valid');
    }

}
else {
    console.log('password is not long enough');
}

//using && and
const passwords = 'kiffffftty';

if (passwords.length>6 && passwords.indexOf(' ') === -1){
    console.log('valid');
}
else {
    console.log('invalid');
}

//using || or
let  age = 78;
if (age<6 || age>65){
    console.log('you get in for free');
}
else{
    console.log('you must pay');
}

//using ! not
let loggedInUser;

if (!loggedInUser){
    console.log('get out of here');
}

//operator Precedence !>&&>||

//Switch
let day = 2;

switch(day){
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
        break;   
    default:
        console.log('invalid day');     
}

//Ternary Operator
let status = 'offline';
let color = status === 'offline' ? 'green' : 'yellow';
console.log(color)

