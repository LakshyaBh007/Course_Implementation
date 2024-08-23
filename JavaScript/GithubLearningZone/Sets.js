//Sets
//Unique Values: Sets automatically remove duplicate values.
//Insertion Order: Sets maintain the order of elements as they are inserted.
//Iterable: Sets are iterable, meaning you can loop over their values using a for...of loop or other iteration methods.
//No Indexing: Sets do not support indexing; instead, they use methods to access and manipulate their elements.

const numy = new Set([12,4,4,4564,65,34,87,95]); 
console.log(numy);
console.log(typeof numy);

numy.add(23);
numy.add(23);
numy.add(64);
numy.delete(4);
console.log(numy);
console.log(numy.has(4));
console.log(numy.has(64));
for (const a of numy){
     console.log(a*a)
 }
numy.forEach((a)=> console.log(a*a));
console.log(numy.size);
const numy1 = new Set([122,34,567,896,32,64,23]);
const union = new Set([...numy,...numy1]);
const intersection = new Set([...numy].filter((x)=>numy1.has(x)));
const difference = new Set([...numy].filter(x=> !numy1.has(x)));
const difference2 = new Set([...numy1].filter(x=> !numy.has(x)));
console.log(difference);
console.log(difference2);
console.log(intersection);
console.log(union);
numy.clear();