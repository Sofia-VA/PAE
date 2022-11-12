const { ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');

class UsersModel{
    getAll() {
        const collection = db.collection('users');
        return new Promise((resolve, reject) => {
            collection.find({}).toArray((err, results) => {
             if (err) {
                console.log('Users not found');
                 reject(err);
             } else {
                resolve(results);
             }
            });
        });        
    }

    getOne(email) {
        const query = {email: email};

        const collection = db.collection('users');
        return new Promise((resolve, reject) => {
            collection.findOne(query).then((result)=> {
                if (result) resolve(result);
                    
                 reject (Object.assign(new Error
                        ('Not Found | User with this email was not found'), 
                        { statusCode: 404 }));
            }).catch(err => {
                reject (Object.assign(new Error
                    ('Bad Request | Something went wrong'), 
                    { statusCode: 400 }));
            })
        })
    }

    postOne(body) {
        const user = {
            name: body.name,
            email: body.email,
            password: body.password,
        };

        const collection = db.collection('users');
        
        return new Promise((resolve, reject) => {
            // If req.body param is empty
            if(!user.name || !user.email || !user.password) {
                reject (Object.assign(new Error
                    ('Bad Request | Missing username, email, or password'), 
                    { statusCode: 400 }));
            }
            //If email is already on DB
            collection.findOne({email:user.email}).then((result)=> {
                if (result) {
                    reject (Object.assign(new Error
                        ('Bad Request | User with this email already exists'), 
                        { statusCode: 400 }));
                }
            })
            // Saving new user
            bcrypt.hash(user.password, 10)
            .then((hashedPassword) => {
                user.password = hashedPassword;
            })
            .then(() => {
                const results = collection.insertOne(user);
                user._id = ObjectId(results.insertedId);
                resolve(user);
            })
            .catch(() => {
                return reject(Object.assign(new Error
                    ('Bad Request | Couldn\´t save new user'), 
                    { statusCode: 400 })); 
            });
        })
    }
}

module.exports = new UsersModel();