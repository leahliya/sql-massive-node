const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const cors = require('cors');
const products_controller = require('./products_controller');
const port = 3000;

const { dbUser, database, dbPass } = require('./config');
const connectionString = `postgres://${dbUser}:${dbPass}@localhost/${database}`
const app = express();

app.use(bodyParser.json());
app.use( cors() );
const massiveConnection = massive(connectionString)
    .then(dbInstance => {
        app.set('db', dbInstance)
    })
    .catch( err => {
        console.log(err)
        res.json(err)
    });

app.post( '/api/product', products_controller.create );
app.get( '/api/products', products_controller.getAll );
app.get( '/api/product/:id', products_controller.getOne );
app.put( '/api/product/:id', products_controller.update );
app.delete( '/api/product/:id', products_controller.delete );


app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );