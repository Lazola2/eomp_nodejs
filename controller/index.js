import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import {Client, Purchase, /*Product*/
Vehicles} from '../model/index.js'
import { Router } from 'express'

// code to fix error: __dirname is not defined
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const route = express.Router();

// Create a client instance
const client = new Client();

route.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
})

// Client's Route
// Login
route.post('/login', bodyParser.json(), (req, res) => {
    client.login(req, res);
})

// get all clients: works
route.get('/clients', (req, res)=>{
    client.fetchClients(req, res);
});

// get a user : works
route.get('/client/:id', (req, res)=>{
    client.fetchClient(req, res);
});

// Update : works
route.put('/client/:id',bodyParser.json(), (req, res)=>{
    client.updateClient(req, res);
});
// Register : works
route.post('/register', bodyParser.json(), (req, res)=> {
    client.createClient(req, res);
})
// Delete : works
route.delete('/client/:id', (req, res)=>{
    client.deleteClient(req, res);
});

// =====Vehicles======
// Fetch all vehicles
const vehicles = new Vehicles();

route.get('/vehicles', (req, res)=> {
    vehicles.fetchVehicles(req, res);
})

// Fetch a single vehicle
route.get('/vehicle/:id', (req, res) => {
    vehicles.fetchVehicle(req, res);
})

// Add a new vehicle
route.post('/vehicles', bodyParser.json(), (req, res)=> {
    vehicles.addVehicle(req, res);
})

// Update a product
route.put('/vehicle/:id', bodyParser.json(), (req, res)=> {
    vehicles.updateVehicles(req, res);
})

// Delete a product
route.delete('/vehicle/:id', (req, res)=> {
    vehicles.deleteVehicle(req, res);
})


// =====Purchase======
const purchase = new Purchase();

// Fetch all purchases
route.get('/purchases', (req, res)=> {
    purchase.fetchPurchases(req, res);
})

// Fetch a single purchase
route.get('/purchase/:id', (req, res) => {
    purchase.fetchPurchase(req, res);
})

// Add a new purchase
route.post('/purchases', bodyParser.json(), (req, res)=> {
    purchase.createPurchase(req, res);
})

// Update a purchase
route.put('/purchase/:id', bodyParser.json(), (req, res)=> {
    purchase.updatePurchase(req, res);
})

// cancel a purchase
route.delete('/purchase/:id', (req, res)=> {
    purchase.cancelPurchase(req, res);
})


export default route;