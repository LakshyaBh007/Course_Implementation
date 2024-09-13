console.log("client side javascript is loaded");
// fetch("https://puzzle.mead.io/puzzle", {
//   headers: { Origin: "*" }, //to access api
// })
//   .then((response) => {
//     response.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((err) => {
//     console.log(err, "this is error");
//   });

// // fetch('http://puzzle.mead.io/puzzle')
// //   .then((response) => {
// //     console.log('Response Status:', response.status);
// //     console.log('Response Headers:', response.headers);
// //     return response.json();
// //   })
// //   .then((data) => {
// //     console.log(data);
// //   })

// //   .catch((err) => {
// //     console.log(err, "this is error");
// //   });

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent

weatherForm.addEventListener('submit',(e)=>{
  e.preventDefault()

  const location = search.value

  messageOne.textContent = 'loading..'
  messageTwo.textContent = ''

  fetch(`http://localhost:3000/weather?address=${location}`).then((response)=>{
    response.json().then((data)=>{
      if(data.error){
        messageOne.textContent = data.error
      } else {
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
      }
  
    })
  })

  console.log(location)
})