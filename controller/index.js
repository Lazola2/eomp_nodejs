import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import {Client /*Product*/} from '../model/index.js'
import { Router } from 'express'

// code to fix error: __dirname is not defined
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));


const route = express.Router();

// Create a client instance
const client = new Client();
// Product instance
// const product = new Product();

route.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
})

// Client's Route
// Login
route.post('/login', bodyParser.json(), (req, res)=>{
    client.login(req, res);
})

// get all clients
route.get('/clients', (req, res)=>{
    client.fetchClients(req, res);
});

// get a user
route.get('/client/:id', (req, res)=>{
    client.fetchClient(req, res);
});

// Update
route.put('/client/:id',bodyParser.json(), (req, res)=>{
    client.updateClient(req, res);
});
// Register
route.post('/register', bodyParser.json(), (req, res)=> {
    client.createClient(req, res);
})
// Delete
route.delete('/client/:id', (req, res)=>{
    client.deleteClient(req, res);
});
// =====Products======
// Fetch all products
// route.get('/products', (req, res)=> {
//     product.fetchProducts(req, res);
// })
// // Fetch a single product
// route.get('/product/:id', 
// (req, res)=> {
//     product.fetchProduct(req, res);
// })
// // Add a new product
// route.post('/product', 
// bodyParser.json(), 
// (req, res)=> {
//     product.addProduct(req, res);
// })
// // Update a product
// route.put('/product/:id', 
// bodyParser.json(),
// (req, res)=> {
//     product.updateProduct(req, res);
// })
// // Delete a product
// route.delete('/product/:id', 
// (req, res)=> {
//     product.deleteProduct(req, res);
// })

export default route;