const { ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');

class Session{
    verifyPassword(userPassword, password){
        if (!bcrypt.compareSync(password, userPassword)){
            throw (Object.assign(new Error
                ('Unauthorized | Wrong email or password'), 
                { statusCode: 401 }));
        }
    }

    generateToken(password) {
        


    }
    
}

module.exports = new Session();