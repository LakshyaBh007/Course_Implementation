//Promises
const willGetYouADog = new Promise((resolve, reject)=>{
  const rand = Math.random();
  if (rand < 0.5){
    resolve();
  }
  else{
    reject();
  }
});
//if you dont resolve or reject promise it will be pending
//resolvw() - changes the status to resolved
//reject() - changes the status to rejected

// console.log(willGetYouADog) 

//.then - when resolved
willGetYouADog.then(()=>{
    console.log('yay we got a dog')
})

//.catch - when rejected
willGetYouADog.catch(()=>{
    console.log(':( No Dog');
})

