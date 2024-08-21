//Array, Reduce and Object

// Question One - Turn an array of numbers into a total of all the numbers

const SumOfArray = (ArrayNum) => {
  return ArrayNum.reduce((initial, Current) => {
    return initial + Current;
  }, 0);
};
console.log(SumOfArray([232, 354, 6787, 3435, 546]));

// Question Two - Turn an array of numbers into a long string of all those
// numbers

const StringOfArray = (ArrayString) => {
  return ArrayString.join("");
};
console.log(StringOfArray([12, 343, 54, 2343768, 67659]));

// Question Three - Turn an array of voter objects into  count of how many
// people voted

const NoOfPeopleVoted = (a) => a.filter((b) => b.voted === true).length;
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
  { name: "Zack", age: 19, voted: false },
];
console.log(NoOfPeopleVoted(voters));

// Question Four - Given an array of all your wishlist items, figure out
// how much it would cost to just buy everything at once.

const wishlist = [
  { title: "Defender", price: 15000000000 },
  { title: "Samsung Galaxy S24 Ultra", price: 1500000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];
const TotalPrice = (ArrayWish) => {
  return ArrayWish.reduce((initial, Current) => initial + Current.price, 0);
};
console.log(TotalPrice(wishlist));

// Question Five - Given an array of arrays, flatten them into a single
// array.

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];
const ArrayOne = (a) => {
  return a.reduce((initial, current) => {
    return initial.concat(current);
  }, []);
};
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
  { name: "Zack", age: 19, voted: false },
];
const VotersByAge = (a) => {
  return {
    YoungVoters: a.filter(
      (vote) => vote.voted === true && vote.age >= 18 && vote.age <= 25
    ).length,
    MiddleVoters: a.filter(
      (vote) => vote.voted === true && vote.age >= 26 && vote.age <= 35
    ).length,
    OldVoters: a.filter(
      (vote) => vote.voted === true && vote.age >= 36 && vote.age <= 55
    ).length,
    SeniorVoters: a.filter((vote) => vote.voted === true && vote.age >= 56)
      .length,
  };
};
console.log(VotersByAge(newVoters));

// Task One - Make an Object from Array

const ArrayS = [{ x: 1 }, { y: 2 }, { z: 3 }];
const ObjectS = Object.assign({}, ...ArrayS);
console.log(ObjectS);

//This

// Practice#1 - Using this inside Object

const woman = {
  Name: "Meredith Grey",
  Age: 44,
  Greet() {
    console.log(
      "Hello, my name is " + this.Name + " and I am " + this.Age + " years old."
    );
  },
};
woman.Greet();

// Practice#2 - Using this inside Fucntion

let name = "Alex";
function greet() {
  console.log("Hello, my name is " + this.name);
}
const Person = {
  name: "Jonny Bairstow",
  Hello: greet,
};
const OtherPerson = {
  name: "Jimmy",
};
greet();
Person.Hello();
greet.call(OtherPerson);

// Practice#3 - Implicit BIinding

const Man = {
  name: "Henry",
  age: 41,
  greet: function () {
    return `Hello ${this.name}, you are ${this.age} years old`;
  },
};
console.log(Man.greet());

// Practice#4 - Explicit Binding

function AgeVerify() {
  if (this.age > 18) {
    console.log("Yes you can drive");
  } else {
    console.log("No you cannot drive");
  }
}
const per1 = { age: 30 };
const per2 = { age: 22 };
AgeVerify.call(per1);
AgeVerify.call(per2);

// Practice#5 - Default Binding

const age = 22;
function verifyAge() {
  return `Hello , you are ${this.age} years old`;
}
console.log(verifyAge());

// Practice#6 - Arrow Function Binding

var ages = 23;
const Women = {
  name: "Ellyse",
  age: 32,
  greet: () => {
    return `Hello , you are ${this.ages} years old`;
  },
};
console.log(Women.greet());

//Task 1 - 14/08/2024 - 11:30
//Question - Create one cloth class and two sub classes tshirt and pant
//then create an array with the values and print clothes by type, color and size
class Cloth /* Always capital class name*/ {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
}

//Class Tshirt
class Tshirt extends /*for sub class*/ Cloth {
  constructor(size, length, color) {
    super(color, "Tshirt"); /*super to access main class*/
    this.size = size;
    this.length = length;
    this.color = color;
    this.type = "Tshirt";
  }
}

//Class Pant
class Pant extends Cloth {
  constructor(size, length, color) {
    super(color, "Pant");
    this.length = length;
    this.size = size;
    this.color = color;
    this.type = "Pant";
  }
}

//Array
const Arrayob = [
  new Pant("XL", 20, "Pink"),
  new Pant("L", 25, "Pink"),
  new Pant("L", 28, "Red"),
  new Pant("XXL", 29, "Green"),
  new Tshirt("L", 20, "Green"),
  new Tshirt("XL", 20, "Pink"),
  new Tshirt("XXL", 20, "Black"),
  new Tshirt("XXXL", 20, "White"),
];
console.log(Arrayob);

//Reduce
let Type = Arrayob.reduce(
  (a, c) => ({ ...a, [c.type]: a[c.type] ? ++a[c.type] : 1 }),
  {}
);
console.log(Type);

let Size = Arrayob.reduce(
  (a, c) => ({ ...a, [c.size]: a[c.size] ? ++a[c.size] : 1 }),
  {}
);
console.log(Size);

let Color = Arrayob.reduce(
  (a, c) => ({ ...a, [c.color]: a[c.color] ? ++a[c.color] : 1 }),
  {}
);
console.log(Color);

//Filter
let ArrayByFeatures = (a) => {
  return{
    ByType:{Pant: a.filter((r) => r.type ===  'Pant').length,
       Tshirt: a.filter((r) => r.type === 'Tshirt').length
    },
    ByColor:{Pink: a.filter((r) => r.color === 'Pink').length,
       Black: a.filter((r) => r.color === 'Black').length,
       Green: a.filter((r) => r.color === 'Green').length,
       Red: a.filter((r) => r.color === 'Red').length,
       White: a.filter((r) => r.color === 'White').length
    },
    BySize:{XL: a.filter((r) => r.size === 'XL').length,
       XXL: a.filter((r) => r.size === 'XXL').length,
       XXXL: a.filter((r) => r.size === 'XXXL').length,
       L: a.filter((r) => r.size === 'L').length,
    }   
  }
} 
console.log(ArrayByFeatures(Arrayob))

//ArrayPractice

const input = [1, 2, 3, 4, 5];
const squaremap = input.map((x)=> Math.pow(x,2))
const squarefor = []
const squareeach = input.forEach((x)=>{squarefor.push(x*x)})
console.log(squaremap)
console.log(squarefor)

const input1 = [1, -4, 12, 0, -3, 29, -150];
const positivevalue = input1.filter((x) => x >= 0)
const sumarray = positivevalue.reduce((x,y)=>x+y,0)
console.log(positivevalue)
console.log(sumarray)

// const input2 = [12, 46, 32, 64];
// const meanmedian = input2.sort((a,b)=>a-b)
// const mandm = meanmedian.reduce((a,b)=> a.mean= a.mean+b/input2.length,
//               if (input2.length%2 === 0){

//               }
            
 
// ) 

const arraym = (a)=>{
  a.sort((x, y) => (y-x))
  if (a.length%2===0){
       const x = (a.length/2 - 1);
       const y = (a.length/2);
       const z = (a[x]+a[y])/2;
       return z;
  }
  else {
    const x = (a.length-1)/2;
    return a[x];
  }
}

console.log(arraym([23,343,23,44,34,46]))