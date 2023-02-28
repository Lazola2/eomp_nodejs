import expressModule from 'express'
const express = expressModule
import route from './controller/index.js'
import pkg from 'cors'
const cors = pkg
import errorHandling from './middleware/ErrorHandling.js'
// const errorHandling = errorHandlingModule
import cookieParser from 'cookie-parser'

const app = express();
/*
express.json: setting the content-type to application/json
bodyParser.urlencoded( {extended: true} ): Object will contain
values of any type instead of just a string
*/
app.use((req, res, next)=> {
    // the http://localh... allows you to access the api's from the local host root on vue js       
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next();
});
app.use(route);
app.use(
    cors(),
    cookieParser(),
    express.json,
    express.urlencoded({extended: true})
)

// Server is running
app.listen(5000, () => {
    console.log(`Server is running`)
});
// Handling all errors
app.use(errorHandling);