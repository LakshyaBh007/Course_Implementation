const obj = {a:23,b:234,c:86};
let objcopy = {...obj}; //task - how to update obj and objcopy simultaneously
obj.d=76; //let obj=objcopy
console.log(obj)

//Destructuring Assingment (unpack values from arrays and objects)
const {names,fav} = {names:'lb', fav:'protein'};
console.log(names);
console.log(fav);

const employee = {
    id:33,
    name:'lakshya',
    email:'fkdf'
};

console.log(employee.name);
console.log(Object.keys(employee).length);

for(let a in employee){
    console.log(a + '=' + employee[a])
};

const ob1 = {rollno:21, name:'rajiv'};
  const ob2 = {age:33, country:'India'};
  const ob3 = {...ob1,...ob2};
  console.log(ob3);
  