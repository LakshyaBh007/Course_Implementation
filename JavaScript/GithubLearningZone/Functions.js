//Default Parameters
function addy(x=23,y=21){
    console.log(x+y);
}
addy(2424,546);
addy(undefined,2323);
addy(123);
addy()

//Arrow Functions
const square = (x) => x*x;
console.log(square(566));

//Arrow fucntion with This 
const person = {
    name:'lb',
    actions: ['gym','cricket','wrestle'],
    printActions() {
        this.actions.forEach((a)=>{
            console.log(this.name+" likes to "+a)});
    }   
};
person.printActions();

