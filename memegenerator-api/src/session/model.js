const { ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');

class Session{
    verifyPassword(userPassword, password){
        return (bcrypt.compareSync(password, userPassword));
    }

    generateToken(password) {
        


    }
    
}

module.exports = new Session();