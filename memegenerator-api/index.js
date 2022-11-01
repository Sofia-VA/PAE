// const common = require('./common');
// const moduloA = require('./moduloA');

// common.setMessage('Hola mundo');

// moduloA();

const express = require('express');
require('dotenv').config();
const database = require('./database'); // Te traes el index del módulo database

const apiRoutes = require('./src/api');

// require('@database/connect'); //Mapeas conexión de db en cualquier ubicación

const app = express();
const port = process.env.PORT || 3000;


app.use('/api', apiRoutes);

app.get('', (req, res) => {
    res.send('API works!');
});

console.log(database);

database.connect().then((client) => {
    console.log('1');
    const db = client.db('memegenerator');
    console.log('2');
    database.db(db);
    console.log('3');
    app.listen(port, () => {
        console.log('App is running in port ' + port);   
    });

}).catch(err => {
    console.log('Failed to connect to database' + err.message);
})

