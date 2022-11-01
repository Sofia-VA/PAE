const database = require('../../database');
//console.log(database.db());
const usersCollection = database.db().collection('users');

class UsersModel{
    getUsers() {
        try {
            return usersCollection.find();
        } catch (error) {
            console.log('Users not found');
        }
        
    }

    getUser(email) {
        try {
            usersCollection.findOne({email: email}, (document) => {
                console.log(document.name);
                return tojson(document.name);
            });
            
        } catch (error) {
            console.log('User not found');
        }
    }
}

module.exports = new UsersModel();