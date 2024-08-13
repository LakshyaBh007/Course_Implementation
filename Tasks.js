//Array, Reduce and Object

// Question One - Turn an array of numbers into a total of all the numbers


const SumOfArray = (ArrayNum) => {
    return ArrayNum.reduce(
        (initial, Current) => {return initial + Current;}, 0)
    };
console.log(SumOfArray([232,354,6787,3435,546]))


// Question Two - Turn an array of numbers into a long string of all those 
// numbers


const StringOfArray = (ArrayString) => {
    return ArrayString.join("")
};
console.log(StringOfArray([12,343,54,2343768,67659]))


// Question Three - Turn an array of voter objects into  count of how many
// people voted


const NoOfPeopleVoted = (a) => a.filter(b => b.voted === true).length;
const voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false }
  ];
console.log(NoOfPeopleVoted(voters));


// Question Four - Given an array of all your wishlist items, figure out
// how much it would cost to just buy everything at once.


const wishlist = [
    { title: "Defender", price: 15000000000 },
    { title: "Samsung Galaxy S24 Ultra", price: 1500000},
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
  ];
const TotalPrice = (ArrayWish) => {return ArrayWish.reduce(
    (initial,Current) => initial + Current.price,0);};
console.log(TotalPrice(wishlist));


// Question Five - Given an array of arrays, flatten them into a single
// array.


const arrays = [["1", "2", "3"], [true], [4, 5, 6]];
const ArrayOne = (a) => {return a.reduce(
    (initial,current) => {
        return initial.concat(current)}, [])};
console.log(ArrayOne(arrays));

// Question Six - Given an array of potential voters, return an object 
// representing the results of the vote - Include how many of the potential
// voters were in the ages 18-25, how many from 26-35, how many from 36-55, 
// and how many of each of those age ranges actually voted.


const newVoters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false }
  ];
const VotersByAge = (a) =>
{return {
    YoungVoters: a.filter(vote => vote.voted === true && vote.age >= 18 
        && vote.age <= 25).length,
    MiddleVoters: a.filter(vote => vote.voted === true && vote.age >= 26 
        && vote.age <= 35).length,
    OldVoters: a.filter(vote => vote.voted === true && vote.age >= 36 
        && vote.age <= 55).length,
    SeniorVoters: a.filter(vote => vote.voted === true && vote.age >= 56 
        ).length,
};
};
console.log(VotersByAge(newVoters));


// Task One - Make an Object from Array


const ArrayS = [
    {x: 1},
    {y: 2},
    {z: 3},
  ];
const ObjectS = Object.assign({}, ...ArrayS);
console.log(ObjectS);


//This

// Practice#1 - Using this inside Object


const woman = {
    Name: "Meredith Grey",
    Age: 44,
    Greet() {console.log('Hello, my name is ' +
        this.Name + ' and I am '
        + this.Age +
        ' years old.')}
};
woman.Greet();


// Practice#2 - Using this inside Fucntion


let name = 'Alex';
function greet() {
    console.log('Hello, my name is ' + this.name);
}
const Person = {
    name: 'Jonny Bairstow',
    Hello: greet
};
const OtherPerson = {
    name: 'Jimmy'
};
greet(); 
Person.Hello(); 
greet.call(OtherPerson); 


// Practice#3 - Implicit BIinding


const Man = {
    name: "Henry",
    age: 41,
    greet: function () {
        return `Hello ${this.name}, you are ${this.age} years old`
    }
}
console.log(Man.greet());


// Practice#4 - Explicit Binding


function AgeVerify(){
    if(this.age> 18){
        console.log("Yes you can drive");
    } else {
        console.log("No you cannot drive");
    }
}
const per1 = {age: 30};
const per2 = {age: 22};
AgeVerify.call(per1);
AgeVerify.call(per2);


// Practice#5 - Default Binding


const age = 22;
function verifyAge (){
    return `Hello , you are ${this.age} years old`
}
console.log(verifyAge());


// Practice#6 - Arrow Function Binding

var ages = 23
const Women = {
    name: "Ellyse",
    age: 32,
    greet : () =>{
        return `Hello , you are ${this.ages} years old`
    }
}
console.log(Women.greet());





