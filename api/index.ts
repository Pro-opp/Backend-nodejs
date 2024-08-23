// import dotenv from 'dotenv'
import { connect } from './db/index'
// import { app } from './app';

import express from 'express'

const app = express()



// dotenv.config({
//     path : './env'
// })


const PORT = 3000

app.listen(PORT , () => {
    console.log('app is listening on port 3000')
})


app.get('/' , (req , res) => {
    res.send({status : "connected"})
})

// connect()
// .then(() => {
//     app.on("error" , (err : Error) => {
//         console.log(err)
//     });
// })
// .catch((err : Error) => {
//     console.log(`Failed to connect the databse : ${err}`)
// })

// app.listen(PORT , () => {
//     console.log(`Server is Listening on port ${PORT}`)
// });

// app.get('/' , (req : any , res : any) => {
//     res.send({status : 'connected'})
// })