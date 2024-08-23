import dotenv from 'dotenv'
import { connect } from "./db/index.js";
import { app } from './app.ts'

dotenv.config({
    path : './env'
})


const PORT = process.env.PORT || 8000

connect()
.then(() => {
    app.listen(PORT , () => {
        console.log(`Server is Listening on port ${PORT}`)
    });
    app.on("error" , (err) => {
        console.log(err)
    });
    app.get('/' , (req  , res) => {
        res.send({status : 'connected'})
    })
})
.catch((err) => {
    console.log(`Failed to connect the databse : ${err}`)
})