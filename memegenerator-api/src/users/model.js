const database = require('../../database');
//console.log(database.db());
const collection = database.db().collection('users');

class UsersModel{
    getAll() {
        return new Promise((accept, reject) => {
            this.collection.find().toArray((err, results) => {
             if (err) {
                console.log('Users not found');
                 reject(err);
             } else {
                accept(results);
             }
            });
        });        
    }

    getOne(email) {
        return collection.findOne({email: email}, (document) => {
            console.log(document.name);
        });
    }
}

module.exports = UsersModel;