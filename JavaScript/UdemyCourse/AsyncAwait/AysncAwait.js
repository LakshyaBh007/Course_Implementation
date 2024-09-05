// //Async

// // function getData(){
// //     const data = axios.get('https://swapi.dev/api/planets/').then((data)=>{
// //         console.log(data);
// //     });
// //     console.log(data);
// // }
// // getData();

// async function greet(){
//     return 'hello';
// };
// console.log(greet());
// greet().then((val)=>{
//     console.log('Promise Resolved With:', val);
// });

// async function add(x,y){
//     if (typeof x!=='number'|| typeof y!== 'number'){
//         throw 'x and y must be numbers!';
// }
//     return x+y;
// };

// // function add(x,y){
// //     return new Promise((resolve,reject)=>{
// //        if (typeof x!=='number'||typeof y!=='number'){
// //         reject('x and y must be numbers');
// //        } 
// //        resolve(x+y);
// //     })
// // }


// add(77,'43')
// .then((val)=>{
//     console.log('Promise Resolved with:',val);
// })
// .catch((err)=>{
//     console.log('Promise Rejected with:',err);
// });

// // function getPlanets() {
// //    return axios.get('https://swapi.dev/api/planets');
// // }

// // getPlanets().then((res)=>{
// //     console.log(res.data);
// // });

// //Await

// // async function getPlanets(){
// //     const res = await axios.get('https://swapi.dev/api/plnnanets/');
// //     console.log(res.data); //because of await it waits for promise to get to resolved
// // } //await can only be used with async
// // getPlanets(); //without await answer will be undefined

// // getPlanets().catch((err)=>{
// //     console.log('in catch!!!');
// //     console.log(err);
// // })

// //try and catch

// async function getPlanets(){
//     try{
//         const res = await axios.get('https://swapi.dev/api/planets');
//         console.log(res.data);
//     } catch(e) {
//         console.log('in catch', e);
//     }
// }
// getPlanets();


// const moveX = (element, amount, delay) => {
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//        const bodyBoundary = document.body.clientWidth;
//        const elRight = element.getBoundingClientRect().right;
//        const currLeft = element.getBoundingClientRect().left;
//        if(elRight + amount > bodyBoundary){
//            reject({bodyBoundary, amount, elRight});
//        }
//        else{
//            element.style.transform = `translateX(${currLeft+amount}px)`;
//            resolve();
//        }
//       },delay) ;
//    });
// };


// const btn = document.querySelector('button');
// async function animateRight(el,amt){
//     await moveX(el,amt,1000);
//     await moveX(el,amt,1000);
//     await moveX(el,amt,1000);
//     await moveX(el,amt,1000);
//     await moveX(el,amt,1000);
//     await moveX(el,amt,1000);
//     await moveX(el,amt,1000);
//     await moveX(el,amt,1000);
//     await moveX(el,amt,1000);
//     await moveX(el,amt,1000);
// }
// animateRight(btn,100).catch((err)=>{
//     console.log('ALL DONE');
//     animateRight(btn,-100);
// });




// // moveX(btn,300,1000)
// // .then(()=>moveX(btn,300,1000))
// // .then(()=>moveX(btn,300,1000))
// // .then(()=>moveX(btn,300,1000))
// // .then(()=>moveX(btn,300,1000))
// // .then(()=>console.log('done with them'))
// // .catch(({bodyBoundary,amount,elRight})=>{
// //    console.log(`Body is ${bodyBoundary}px wide`);
// //    console.log(`Element is at ${elRight}px, ${amount}px is too large`);
// // }
// // );


//Pokemon API

//Sequential Requests
// async function get3Pokemon(){
//   const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
//   const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2')
//   const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3')
//   console.log(poke1.data.name);
//   console.log(poke2.data.name);
//   console.log(poke3.data.name);
// }
// get3Pokemon();

//Parallel 
// async function get3Pokemon(){
// const mon1 = axios.get('https://pokeapi.co/api/v2/pokemon/1')
// const mon2 = axios.get('https://pokeapi.co/api/v2/pokemon/2')
// const mon3 = axios.get('https://pokeapi.co/api/v2/pokemon/3')
// const poke1 = await mon1;
// const poke2 = await mon2;
// const poke3 = await mon3;
// console.log(poke1.data.name);
// console.log(poke2.data.name);
// console.log(poke3.data.name);
// }

function changeBodyColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve();
        },delay);
    })
};

//Sequential
// async function lightShow(){
//   await changeBodyColor('teal',1000);
//   await changeBodyColor('green',1000);
//   await changeBodyColor('black',1000);
//   await changeBodyColor('blue',1000);
//   await changeBodyColor('yellow',1000);
// }
// lightShow();

//Parallel is faster
// async function lightShow(){
//   const p1 = changeBodyColor('teal',1000);
//   const p2 = changeBodyColor('green',1000);
//   const p3 = changeBodyColor('black',1000);
//   const p4 = changeBodyColor('blue',1000);
//   const p5 = changeBodyColor('yellow',1000);
//   await p1;
//   await p2;
//   await p3;
//   await p4;
//   await p5;
// }
// lightShow();


//Promise.all - can have all the promises in an array
async function get3Pokemon(){
const mon1 = axios.get('https://pokeapi.co/api/v2/pokemon/1')
const mon2 = axios.get('https://pokeapi.co/api/v2/pokemon/2')
const mon3 = axios.get('https://pokeapi.co/api/v2/pokemon/3')
const results = await Promise.all([mon1,mon2,mon3]);
console.log(results);
printPokemon(results);
}
get3Pokemon();

function printPokemon(pokemon){
  for(let poke of pokemon){
    console.log(poke.data.name);
  }
};

function time(){
  return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('hello');
            resolve();
        },1000)
    })
};

