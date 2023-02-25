import pkg from 'dotenv'
const dotenv = pkg
import {createPool} from 'mysql'

dotenv.config();
const connection = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    database: process.env.DATABASE,
    multipleStatements: true
});

export default connection;