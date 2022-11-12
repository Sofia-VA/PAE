// const common = require('./common');
// const moduloA = require('./moduloA');

// common.setMessage('Hola mundo');

// moduloA();

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const database = require('./database'); // Te traes el index del módulo database

const apiRoutes = require('./src/api');

// require('@database/connect'); //Mapeas conexión de db en cualquier ubicación

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

app.get('', (req, res) => {
    res.send('API works!');
});

database.connect().then(client => {
    db = client.db('MemeGenerator');
    database.db(db);

    //collection = db.collection('users');
    //console.log(collection);
    app.listen(port, () => {
        console.log('App is running in port ' + port);   
    });

}).catch(err => {
    console.log('Failed to connect to database' + err.message);
})
