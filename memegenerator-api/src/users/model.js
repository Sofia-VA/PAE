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
            collection.findOne(query, (err, results) => {
                if (err) {
                    reject(err);
                 } else {
                    resolve(results);
                 }
            });
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
            if(!user.name || !user.email || !user.password) {
                return reject(Object.assign(new Error('Bad Request | Missing username, email, or password'), { statusCode: 400 }));
            }
            
            bcrypt.hash(user.password, 10).then((hashedPassword) => {
                user.password = hashedPassword;
            }).then(() => {
                collection.insertOne(user, (err, results) => {
                    if (err) {
                        reject(err);
                     } else {
                        user._id = ObjectId(results.insertedId);
                        resolve(user);
                     }
                })
            }).catch((err) => {
                reject(err);
            });
        })
    }
}

module.exports = new UsersModel();