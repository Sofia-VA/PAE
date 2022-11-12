const usersModel = require('./model');
const session = require('../session/model');

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
        }).catch(err => {
            res.status(err.statusCode).send(err.message);
        });
    }

    postOne(req, res) {
        usersModel.postOne(req.body).then(results => {
            if (results) res.status(200).send(results); 
        }).catch(err => {
            res.status(err.statusCode).send(err.message);
        });
    }

    login(req, res) {
        let loginData = {
            "email":req.body.email,
            "password":req.body.password
        }

        usersModel.getOne(loginData.email).then(user => {
            session.verifyPassword(user.password, loginData.password);
            return user;
        })
        .then((user)=>{
            let token = session.generateToken(user);
            if (token) return res.status(200).json({"token": token, "email": user.email});
            
        })
        .catch(err => {
            res.status(err.statusCode).send(err.message);
        });
    }
}

module.exports = new UserController();