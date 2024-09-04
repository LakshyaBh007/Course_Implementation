//AJAX/J
//Asynchronous JavaScript and JSON/XML

//XML
/* <name>
    <first>Lakshya</first>
    <last>Bhatia</last>
</name>
<email>LakshyaBhatia49@gmail.com</email> */

//JSON - JavaScript Object Notation
//format for sending data
//{"name":"lakshya"}

// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load',function() {
//     console.log('First Request Worked');
//     const data = JSON.parse(this.responseText);
//     const filmURL = data.results[0].films[0];
//     const filmReq = new XMLHttpRequest();
//     filmReq.addEventListener('load',function(){
//         console.log('Second Request Worked');
//         const data2 = JSON.parse(this.responseText);
//         console.log(data2);
//     })
//     filmReq.addEventListener('error', function(e){
//         console.log("Error!!",e);
//     })
//     filmReq.open('GET', filmURL);
//     filmReq.send();
//     // for(let planet of data.results){
//     //     console.log(planet.name);
//     // }
// });
// firstReq.addEventListener('error',()=>{
//     console.log('Error');
// });
// firstReq.open('GET','https://swapi.dev/api/planets/');
// firstReq.send();
// console.log('request Sent!');


// //Fetch
// fetch('https://swapi.dev/api/planets/')
// .then((response)=>{
//     if(!response.ok)//response.ok to check if request was succesful
//       throw new Error(`status code error:${response.status}`);
//     //console.log(response.json());
//       return response.json();
// })
// .then((data)=>{
//     console.log('fetched all planets');
//     const filmURL  = data.results[0].films[0];
//     return fetch(filmURL);
// })
// .then((response)=>{
//     if(!response.ok)
//       throw new Error(`status code error:${response.status}`);
//       return response.json();
// })
// .then((data)=>{
//     console.log('fetched first film');
//     console.log(data.title);
// })
// .catch((err)=>{
//     console.log('something went wrong with fetch');
//     console.log(err);
// })

const checkStatusAndParse = (response)=>{
    if(!response.ok) throw new Error(`Status Code Error: ${response.status}`);
    return response.json();
};

// const printPlanets = (data)=>{
//     console.log('loaded 10 more planets...');
//     for(let planet of data.results){
//         console.log(planet.name);
//     }
//     //return Promise.resolve(data.next);
//     //return fetchNextPlanets(data.next);
//     return data.next;
// };

// const fetchNextPlanets = (url='https://swapi.dev/api/planets/') => {
//    return fetch(url);
// }

// fetchNextPlanets()
// .then(checkStatusAndParse)
// .then(printPlanets)
// .then(fetchNextPlanets)
// .then(checkStatusAndParse)
// .then(printPlanets)
// .then(fetchNextPlanets)
// .then(checkStatusAndParse)
// .then(printPlanets)
// .catch((err)=>{
//     console.log('something went wrong with fetch');
//     console.log(err);
// })


//Axios - similar to fetch but does most things behind the scenes like json conversion
//manually check error in fetch but not in axios

// axios
// .get('https://swapi.dev/api/planets/')
// .then((res)=>{
//     console.log(res.data);
// })
// .catch((err)=>{
//     console.log('in catch error')
//     console.log(err);
// });


const fetchNextPlanets = (url = 'http://swapi.dev/api/planets/') => {
    return axios.get(url);
}

const printPlanets = ({data}) => {
    console.log(data);
    for (let planet of data.results){
        console.log(planet.name);
    }
    //return Promise.resolve(data.next);
    //return fetchNextPlanets(data.next);
    return data.next;
};

fetchNextPlanets()
.then(printPlanets)
.then(fetchNextPlanets)
.then(printPlanets)
.then(fetchNextPlanets)
.then(printPlanets)
.then(fetchNextPlanets)
.then(printPlanets)
.catch((err)=>{
    console.log('error',err);
});
