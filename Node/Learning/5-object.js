const name = 'andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

const product = {
    label: 'red notebook',
    price: 2,
    stock: 201,
    salePrice: undefined
}


const {label:productLabel,stock,rating} = product
console.log(label)
console.log(stock)

const transaction = (type,{label,stock})=>{
    console.log(type,label,stock)
}

transaction('order', product)