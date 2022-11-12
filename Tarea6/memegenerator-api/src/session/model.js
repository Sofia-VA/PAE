const { ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class Session{
    verifyPassword(userPassword, loginPassword){
        if (!bcrypt.compareSync(loginPassword, userPassword)){
            throw (Object.assign(new Error
                ('Unauthorized | Wrong email or password'), 
                { statusCode: 401 }));
        }
    }

    verifyToken = (req, res, next) => {
        let token = req.get("x-auth");
        if (!token) return res.status(401).send("Unauthorized | No credentials were provided");

        jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
            if (err) return res.status(401).send("Unauthorized | Invalid credentials");
            req.userInfo = decoded;
            return next();
        });
    }

    generateToken(user) {
        const payload = {"email": user.email}
        const options = { expiresIn: 60 * 60 }
        
        let token = jwt.sign(payload, process.env.JWT_KEY, options);
        if (!token) {
            throw (Object.assign(new Error
                ('Bad Request | Failure generating token'), 
                { statusCode: 400 }));
        }
        return token;
    }
    
}

module.exports = new Session();