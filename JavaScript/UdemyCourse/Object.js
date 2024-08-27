//Object
const numbers = {
    a : 100,
    40 : 'abc',
    '65 zero' : 'great song',
    'wwe network' : 67
};

let w = 'a';

console.log(numbers.a);
console.log(numbers['a']);
console.log(numbers[w]);
console.log(numbers[40]);
console.log(numbers['65 zero']);

//add
numbers.smith = 65;
numbers['mrsmith'] = 'guy';
numbers.smith++;
numbers['a'] += 5
console.log(numbers);

//Nested array and objects
const student = {
    firstName : 'David',
    strengths : ['art','music'],
    exams : {
        midTerm : 92,
        final : 88
    }
};
console.log(student.firstName);

