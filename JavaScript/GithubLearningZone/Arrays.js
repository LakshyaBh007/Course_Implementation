//Arrays
//Arrays = ['element1','element2','element3']
let fruity = ['apple','orange','banana','mango'];
const numbers = [10,20,304,40];
console.log(fruity[0]); //array value calling
console.log(fruity[fruity.length-2]);//alternate method at() 
//can be used for negative index

//Array Methods
//Join - joins the array elements
const elements = ['fire', 'water', 'air'];
console.log(elements.join("-"))

//Push - adds element at the last
fruity.push('grapes',55)
console.log(fruity);

//Pop - removes element from the last
numbers.pop();
console.log("after pop():" + numbers);

//Shift - removes array element from start
console.log(elements.shift());

//Unshift - adds element at start
console.log(elements.unshift('mango'));
console.log(numbers.unshift(434,434,66,6,6));

//Concat - merges two arrays
const random = [12,45,34,'hi']
console.log(elements.concat(random));

//Map - creates a new array according to given function
const map = random.map((x)=>x*x);
console.log(map);

let mapped = numbers.map((x)=>x*10);
console.log(mapped);

console.log(numbers.map((x)=>x*x));

//Filter - filters the array elements according to given function/condition
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction'];
const results = words.filter((x)=>x.length>words.length);
console.log(results);

let result = numbers.filter((n)=>n!==20);
console.log(result);

//Reduce - gives single output by processing all elments runs left to right
const array1 = [0, 1, 2];
const reduce = array1.reduce((a,b)=>a+b,10);
console.log(reduce);

let sums = numbers.reduce((x,y)=>x+y,30);
console.log(sums);

function sum(args){
  return args.reduce((a,b)=> {
      return a+b;
  },50)
}
console.log(sum([10,20,20]))

//ReduceRight - gives single output by processing all elments runs right to left
const reduceright = array1.reduceRight((a,b)=>a-b)
console.log(reduceright);

//Every - checks that every elements satisfy the condition boolean
console.log(array1.every((x)=>x>0));

//Some - checks if any element satisfy the condition also boolean
console.log(array1.some((x)=>x>2));

//indexOf - gives the first index of searched value
console.log(words.indexOf("elite"));

//find - finds the  first element that satisfy the condition
console.log(words.find((x)=>x.length>4));

//findIndex - finds the index of the first element that satisfys the conditiion
console.log(words.findIndex((x)=>x.length>4));

//includes - checks if the value exists in array boolean
console.log(array1.includes(2));

//forEach - works on each element
numbers.forEach((x,y)=> console.log(x+' comes at '+y))
console.log(numbers.forEach((n)=> console.log(n*n)));

//slice - returns new array
let xyz = ["java","greek", 12335, "php"];
console.log(xyz.slice(1,4));

//splice - alters original array and returns the edited value also adds the value at last
console.log(xyz.splice(2,1));
console.log(xyz);

//Spread - unpacks the element values of array
let add = (x,y,z)=>x+y+z;
let num = [12,34,5];
console.log(add(...num));

const newBrands = ["Tesla", "Mahindra"];
const brands = ["Ford", "Honda", ...newBrands, "BMW"];
console.log(brands);

const movies = ['ironman', 123, "thor"];
const random1 = [...movies];
console.log(random1);
  
const ar1 = [23,343,54,45,'fggh'];
const ar2 = ['fd','fdf','fdf', 34]; //combining arrays
const ar3 = [...ar1,...ar2];
console.log(ar3);
  
const fruits = ['apple', 'mango', 'banana'];
const addfruit = ['papaya', ...fruits];
console.log(addfruit);
  
const getfruit = (x,y,z) => console.log(`Fruits:${x},${y},${z}`);
getfruit(...fruits); 

//Sort - sorts ascending or descending
const numbering = [1,2,6,34,3,4,5];
console.log(numbering.sort((a,b)=>b-a));

//Loops - For in and For of
const list = [10,20,30];
for(let i in list){
    console.log(i);
}
for(let i of list){
    console.log(i);
}

for(let i=0;i<fruity.length;i++){
    console.log(fruity[i]);
}; //array value printing (for of can also be used)

//Object. used on Arrays
console.log(Object.keys(fruity)); //returns index
console.log(Object.values(fruity)); //returns array elements
console.log(Object.entries(fruity)); //returns index and elements

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
 } //array value printing for loop
for(let i of numbers){
   console.log(i)
} //array value printing for of

//Array of Objects
const employees = [
    { id: 101, name: "Sakshi Memon", email: "sakshi.memon@email.com" },
    { id: 102, name: "Subhash Shukla", email: "subhash.shukla@email.com" },
    { id: 103, name: "Mohini Karpe", email: "mohini.karpe@email.com" }
  ]
console.log(employees[0].name); //object value calling
delete employees[2]; //delete
for(let key of employees){
    console.log(key)
};//value printing using for of
for(let key in employees){
  console.log(employees[key])
} //value printing using for in
for(let key in employees){
  console.log(key)
} //key printing using for in


//Destructuring - unpacks the value
const number = [10, 20, 30];
const [one, two, three] = number;
console.log(one); 
console.log(two); 
console.log(three);

//Swapping
let a = 100;
let b = 200;
[a, b] = [b, a];
console.log(a);
console.log(b); 

//Destructuring default value
const [x=2,y=4,z=6] = [10];
console.log(y);

//Mean and Median
let MandM = [12,23,45,34,23,32];
let MeanMedian = (a) => {
  a.sort((x, y) => x - y);

let me = 0;
for (i = 0; i < a.length; i++) {
    me += a[i];
  }
let mean = me / a.length; //mean

let med = 0;
if (a.length % 2 === 0) {
    med = (a[a.length / 2] + a[a.length / 2 - 1])/2;
  } else {
    med = a[a.length - 1] / 2;
  } //median

return `mean: ${mean} and median: ${med}`;
};
console.log(MeanMedian(MandM));

//JSON Array
let employee = [
    { name: "Kabir Dixit", email: "kabir.dixit@gmail.com", age: 23 },
    { name: "Mukta Bhagat", email: "mukta.bhagat@gmail.com", age: 28 },
    { name: "Sakshi Ramakrishnan", email: "sakshi.ramakrishnan@gmail.com", age: 33 }
   ];
console.log(employees[0].name);

//JSON Parse
function isValidJson(json){
    try{
        JSON.parse(json);
        return true;
    } catch (e){
        return false;
    }
}
console.log(isValidJson('{}'))

//JSON stringify
const user = {'name': 'Shashi Meda', 
    'email': 'shashi.meda@email.com', 
    'age': 28}
console.log(JSON.stringify(user));
