// Lo que se quiere es que el cliente se conecte a la base de datos
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const uri = process.env.DB_URL;

const client = new MongoClient(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    serverApi: ServerApiVersion.v1 });

// Con promesas. Se puede hacer igual con callbacks
function connect(){
    return new Promise((resolve, reject) => {
        client.connect((err) => {
            if (err) {
                console.log('Failed to connect to database', err.message);
                reject(err);
            } else {
                console.log('Connected to database');
                resolve(client);
            }
        });
    });
}

// Podrías exportar la función
module.exports = connect;