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

//Array Callback Methods

//ForEach
const books = [{
  title: 'Good Omens',
  authors: ['Terry Pratchett', 'Neil Gaiman'],
  rating: 4.25
},
{
  title: 'Bone: The Complete Edition',
  authors: ['Jeff Smith'],
rating: 4.42
},
{
  title: 'American Gods',
  authors: ['Neil Gaiman'],
  rating: 4.11
},
{
  title: 'A Gentleman in Moscow',
  authors: ['Amor Towles'],
  rating: 4.36
}
]

books.forEach(function (book) {
console.log(book.title.toUpperCase())
})


for (let book of books) {
console.log(book.title.toUpperCase())
}

for (let i = 0; i < books.length; i++) {
console.log(books[i].title.toUpperCase())
}



//Map
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ['asap', 'byob', 'rsvp', 'diy'];

//Map creates a new array
const doubles = numbers.map(function (num) {
  return num * 2;
});
console.log(doubles);

const numDetail = numbers.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0
  }
})
console.log(numDetail);

const abbrevs = words.map(function (word) {
  return word.toUpperCase().split('').join('.');
})
console.log(abbrevs);

const titles = books.map(function (b) {
  return b.title;
})
console.log(titles);

//Find
let movies = [
  'The Fantastic Mr. Fox',
  'Mr. and Mrs. Smith',
  'Mrs. Doubtfire',
  'Mr. Deeds'
]

const movie = movies.find(x=>x.includes('Mrs')===true);
console.log(movie);

const movie2 = movies.find(m=>m.indexOf('Mrs')===0);
console.log(movie2)


//Filter
const nums = [34, 35, 67, 54, 109, 102, 32, 9];

const odds = nums.filter(n => n % 2 === 1);
const evens = nums.filter(n => n % 2 === 0);
const bigNums = nums.filter(n => n > 50);
console.log(bigNums);


const book = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]

const goodBooks = book.filter(b => b.rating > 4.3);
console.log(goodBooks);

const fantasyBooks = book.filter(b => (
  b.genres.includes('fantasy')
))
console.log(fantasyBooks);

const shortForm = book.filter(b => (
  b.genres.includes('short stories') || b.genres.includes('essays')
))
console.log(shortForm);

const query = 'The';
const results = book.filter(b => {
  return b.title.toLowerCase().includes(query.toLowerCase())
})
console.log(results);

//Every and Some
const word = ['dog','dig','log','bag', 'wag'];

const all3Lets = word.every(w=>w.length===3);

const allEndInG = word.every(w=>w[w.length-1]==='g');
console.log(allEndInG);

const someStartWithD = word.some(w=>w[0]==='d');

//Sort
const prices = [23,434,244,353,434];
const sortPrices = prices.sort((a,b)=>a-b);
console.log(sortPrices);

//Reduce
const grades = [87,65,34,68,5,34,67,99];
const maxGrade = grades.reduce((max,cv)=>max>cv?max:cv,999);
console.log(maxGrade);

const votes = ['y','y','n','y','n','y','n','y','n','n','n','y','y'];
const voteCheck = votes.reduce((tally,vote)=>{
  tally[vote]?tally[vote]++:tally[vote]=1
  return tally;
},{});
console.log(voteCheck);


const groupByRatings = book.reduce((groupedBooks, b)=>{
  const k = Math.floor(b.rating);
  !groupedBooks[k]?groupedBooks[k]=[]:0;
  groupedBooks[k].push(b.title);
  return groupedBooks;
},{});
console.log(groupByRatings);
