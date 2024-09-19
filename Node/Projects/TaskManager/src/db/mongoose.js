const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/task-manager-api')



// const me = new User({
//     name: 'Lakshya',
//     age: 22
// })

// me.save()
// .then(()=>{
//     console.log(me)
// })
// .catch((error)=>{
//     console.log('ERROR!', error)
// })


// const task = new Task({
//     description: 'Learn the Mongoose Library',
//     completed: false
// })

// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log(error)
// })

//Data Validation - ensuring data is valid and meets certain criteria
//Sanitization - ensuring data is clean and safe to use

//Post - to create data
//Get - to get existing data
//Patch - to update existing data
//Delete - to delete data