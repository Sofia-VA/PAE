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

    getOne(elemail) {
        const query = {email: elemail};

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
}

module.exports = new UsersModel();