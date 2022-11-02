const { usersModel } = require('.');

usersModel = require('./model')


class UserController {
    getAll(req, res) {
        const user = usersModel();
        user.getAll().then(users => {
            // res.send('Llegaste al endpoint de users');
            res.send(usersModel.users);
        });    
    }
    getOne(req, res) {
        const user = usersModel();
        user.getOne(req.params.id).then(foundUser => {
            // res.send('Llegaste al get one endpoint de users', req.params.id);
            foundUser? res.send(foundUser): res.sendStatus(404);
        });  
    }
}

module.exports = new UserController();