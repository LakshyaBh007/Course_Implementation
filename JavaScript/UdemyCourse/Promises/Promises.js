// //Promises
// const willGetYouADog = new Promise((resolve, reject)=>{
//   const rand = Math.random();
//   if (rand < 0.5){
//     resolve();
//   }
//   else{
//     reject();
//   }
// });
// //if you dont resolve or reject promise it will be pending
// //resolvw() - changes the status to resolved
// //reject() - changes the status to rejected

// // console.log(willGetYouADog) 

// //.then - when resolved
// willGetYouADog.then(()=>{
//     console.log('yay we got a dog')
// })

// //.catch - when rejected
// willGetYouADog.catch(()=>{
//     console.log(':( No Dog');
// })

const makeDogPromise = () => {
return new Promise((resolve,reject)=>{
 setTimeout(()=>{
    const random = Math.random();
    if (random<0.5){
        resolve();
    }
    else{
        reject();
    }
 },5000);
});
};

// makeDogPromise()
// .then(()=>{
//     console.log('yay we got a dog');
// })
// .catch(()=>{
//     console.log('no dog');
// }); 

const fakeRequest = (url) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        const pages = {
        '/users': [
        {id:1, username:'Bilbo'},
        {id:5, username:'Esmerelde'}
        ],
        '/users/1': {
		id        : 1,
		username  : 'Bilbo',
		upvotes   : 360,
		city      : 'Lisbon',
		topPostId : 454321
		},
		'/users/5'      : {
		id       : 5,
		username : 'Esmerelda',
		upvotes  : 571,
		city     : 'Honolulu'
		},
		'/posts/454321' : {
		id    : 454321,
		title : 'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
		},
        '/about': 'This is the about page'
        };
        const data = pages[url];
        if(data){
          resolve({status: 200, data});  
        }
        else{
          reject({status:404})
        }    
    },1000);
});
};

// fakeRequest('/users')
// .then((res)=>{
//     console.log('status code', res.status);
//     console.log('data', res.data);
//     console.log('request worked!');
// })
// .catch((res)=>{
//     console.log(res.status);
//     console.log('request failed');
// });

// fakeRequest('/dogs')
// .then((res) => {
// 	console.log('Status Code', res.status);
// 	console.log('Data', res.data);
// 	console.log('REQUEST WORKED!');
// })
// .catch((res) => {
// 	console.log(res.status);
// 	console.log('REQUEST FAILED');
// });

// fakeRequest('/users').then((res)=>{
//     const id = res.data[0].id;
//     fakeRequest(`/users/${id}`).then((res)=>{
//       const postId = res.data.topPostId;
//       fakeRequest(`/posts/${postId}`).then((res)=>{
//         console.log(res);
//       })
//     });
// })
// .catch((err)=>{
//     console.log('oh no',err);
// })

fakeRequest('/users')
 .then((res)=>{
    const id = res.data[0].id;
    return fakeRequest(`/users/${id}`);
 })
 .then((res)=>{
    const postid = res.data.topPostId;
    return fakeRequest(`/posts/${postid}`);
 })
 .then((res)=>{
    console.log(res);
 })
 .catch((err)=>{
    console.log('OH NO', err);
 });


 //rewriting callback hell with promises
 btn = document.querySelector('button');
 const moveX = (element, amount, delay) => {
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        const bodyBoundary = document.body.clientWidth;
        const elRight = element.getBoundingClientRect().right;
        const currLeft = element.getBoundingClientRect().left;
        if(elRight + amount > bodyBoundary){
            reject({bodyBoundary, amount, elRight});
        }
        else{
            element.style.transform = `translateX(${currLeft+amount}px)`;
            resolve();
        }
       },delay) ;
    });
 };

 moveX(btn,300,1000)
 .then(()=>moveX(btn,300,1000))
 .then(()=>moveX(btn,300,1000))
 .then(()=>moveX(btn,300,1000))
 .then(()=>moveX(btn,300,1000))
 .then(()=>console.log('done with them'))
 .catch(({bodyBoundary,amount,elRight})=>{
    console.log(`Body is ${bodyBoundary}px wide`);
    console.log(`Element is at ${elRight}px, ${amount}px is too large`);
 }
)