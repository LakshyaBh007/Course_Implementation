const creditCard = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');
const form = document.querySelector('#signup-form');

form.addEventListener('submit', function(e){
    alert("Submitted the form");
    console.log('cc', creditCard.value)
    console.log('terms', termsCheckbox.checked)
    console.log('veggieSelect', veggieSelect.value)
    e.preventDefault();
});

const formData = {};
// creditCard.addEventListener('input', (e)=>{
//     console.log('cc changed', e);
//     formData['cc'] = e.target.value;
//     console.log(formData);
// });

for (let input of [creditCard, termsCheckbox, veggieSelect]){
    input.addEventListener('change',({target})=>{
        const {name,type,value,checked} = target;
        formData[name] = type === 'checkbox' ? checked : value;
        console.log(formData);
    })
}
