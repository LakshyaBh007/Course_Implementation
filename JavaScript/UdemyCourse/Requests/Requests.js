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

const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load',function() {
    console.log('First Request Worked');
    const data = JSON.parse(this.responseText);
    const filmURL = data.results[0].films[0];
    const filmReq = new XMLHttpRequest();
    filmReq.addEventListener('load',function(){
        console.log('Second Request Worked');
        const data2 = JSON.parse(this.responseText);
        console.log(data2);
    })
    filmReq.addEventListener('error', function(e){
        console.log("Error!!",e);
    })
    filmReq.open('GET', filmURL);
    filmReq.send();
    // for(let planet of data.results){
    //     console.log(planet.name);
    // }
});
firstReq.addEventListener('error',()=>{
    console.log('Error');
});
firstReq.open('GET','https://swapi.dev/api/planets/');
firstReq.send();
console.log('request Sent!');


//Fetch
fetch('https://swapi.dev/api/planehbnvbnts/')
.then((response)=>{
    response.json().then((data)=>{
        for(let planet of data.results){
            console.log(planet.name);
        }
    });
})
.catch((err)=>{
    console.log('something went wrong with fetch');
    console.log(err);
});