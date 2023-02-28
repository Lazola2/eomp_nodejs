import pkg from 'dotenv'
import {createPool} from 'mysql'

const dotenv = pkg
dotenv.config();

const connection = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DATABASE,
    multipleStatements: true
});

export default connection;