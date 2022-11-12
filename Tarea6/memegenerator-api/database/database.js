// Sirve para acceder a la misma base de datos

let database;

function db(_db) {
    if (_db) {
        database = _db;
    }
    return database;
}

module.exports = db;