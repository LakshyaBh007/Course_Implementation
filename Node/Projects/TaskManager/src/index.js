const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// app.use((req, res, next)=>{
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req,res,next)=>{
//     res.status(503).send('Site is currently down')
// })

app.listen(port, () => {
    console.log('Server is up on port' + port)
})

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({_id: 'abc123'}, 'thisismynewcourse')
//     console.log(token)
// }

// myFunction()

// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'Red12334'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)
// }

// myFunction()