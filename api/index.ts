import dotenv from 'dotenv'
import { connect } from './db/index'
import { app } from './app';

dotenv.config({
    path : './env'
})


const PORT = process.env.PORT || 8000

connect()
.then(() => {
    app.on("error" , (err : Error) => {
        console.log(err)
    });
})
.catch((err : Error) => {
    console.log(`Failed to connect the databse : ${err}`)
})

app.listen(PORT , () => {
    console.log(`Server is Listening on port ${PORT}`)
});

app.get('/' , (req : any , res : any) => {
    res.send({status : 'connected'})
})