// //Prototype
// String.prototype.yell = function(){
//     console.log(`OMG!!!! ${this.toUpperCase()} AGHGHHAHHGH!!!`);
// };
// 'I LOVE YOU'.yell();

// Array.prototype.pop = function() {
//     return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF';
// };
// console.log([3,4,34,5,'GG',55].pop());

// //OOP
// function hex(r,g,b){
//     return '#' + ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
// }
// function rgb(r,g,b){
//     return `rgb(${r},${g},${b})`;
// }

// console.log(hex(255,100,25));
// console.log(rgb(255,100,25));

// function makeColor(r,g,b){
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function() {
//         const {r,g,b} = this;
//        return `rgb(${r},${g},${b})`
//     };
//     color.hex = function() {
//         const {r,g,b} = this;
//        return '#' + ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
//     }
//     return color;
// }

// firstColor = makeColor(232,423,22);
// console.log(firstColor.rgb());
// console.log(firstColor.hex());
// console.log(firstColor.r);


// function Color(r,g,b){
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// Color.prototype.rgb = function(){
//     const {r,g,b} = this;
//     return `rgb(${r},${g},${b})`;
// };
// Color.prototype.hex = function(){
//     const {r,g,b} = this;
//     return '#' + ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
// };
// Color.prototype.rgba = function(a = 1.0){
//     const {r,g,b} = this;
//     return `rgba(${r},${g},${b},${a})`
// };

// const color1 = new Color(334,345,35);
// const color2 = new Color(0,0,0);

class Color {
    constructor(r,g,b,name){
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    }
    innerRGB(){
        const {r,g,b} = this;
        return `${r},${g},${b}`
    }
    rgb(){
        return `rgb(${this.innerRGB()})`;
    }
    hex(){
        const {r,g,b} = this;
        return '#' + ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
    }
    rgba(a=1.0){
        const {r,g,b} = this;
        return `rgba(${this.innerRGB()},${a})`;
    }
    greet(){
        return `Hello from ${this.name}!`;
    }
}
const c1 = new Color(255,67,89, 'tomato');
console.log(c1);
console.log(c1.greet());
console.log(c1.rgb());
console.log(c1.hex());
console.log(c1.rgba());

//subclass

class Pet {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return  `${this.name} is eating!`;
    }
}

class Cat extends Pet {
    constructor(name,age,livesLeft = 9){
        console.log('IN CAT CONSTRUCTOR');
        super(name,age);
        this.livesLeft = livesLeft;
    }
    meow(){
      return 'MEAOWWWW!!';
    }
}
    
class Dog extends Pet {
    bark(){
      return 'WOOOF!!!!'
    }
}

const cat1 = new Cat('lulu',3.5);
console.log(cat1);
console.log(cat1.eat());
