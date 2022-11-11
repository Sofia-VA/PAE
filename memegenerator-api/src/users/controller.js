const usersModel = require('./model');

class UserController {
    getAll(req, res) {

        // res.send('Llegaste al endpoint de users');
        usersModel.getAll().then(results => {
            res.status(200).json(results);
        }).catch(err => {
            res.status(400).send('Bad Request', err.message);
        });
    }
    getOne(req, res) {
        //res.send('Llegaste al get one endpoint de users', req.params.id);
        let userEmail = req.params['email'];

        usersModel.getOne(userEmail).then(results => {
            if (results) res.status(200).json(results);
            else res.status(404).send('User not found.');
        }).catch(err => {
            res.status(400).send('Bad Request', err.message);
        });
    }

    postOne(req, res) {
        usersModel.postOne(req.body).then(results => {
            if (results) res.status(200).send(results); 
        }).catch(err => {
            res.status(err.statusCode).send(err.message);
        });
    }

    // login(req, res) {
    //     let email = req.email;
    //     let password = req.password;
    
    //     User.findOne({ email: `${email}` })
    //         .then(user => {
    //             let token = user.generateToken(password);
    //             //console.log(token)
    //             if (token != undefined) {
    //                 res.status(200)
    //                 res.json({"token": token,"role": user.role, "email": user.email});
    //             } else {
    //                 res.status(404);            
    //                 res.set('Content-Type', 'text/plain; charset=utf-8');
    //                 res.send(`Wrong email or password`);
    //             }
    //         })
    //         .catch(err => {
    //             res.status(404);            
    //             res.set('Content-Type', 'text/plain; charset=utf-8');
    //             res.send(`Wrong email or password`);
    //         });
    // }
}

module.exports = new UserController();