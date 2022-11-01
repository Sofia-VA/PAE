usersModel = require('./model')


class UserController {
    getAll(req, res) {

        // res.send('Llegaste al endpoint de users');
        res.send(usersModel.getUsers());
        
    }
    getOne(req, res) {
        // res.send('Llegaste al get one endpoint de users', req.params.id);
        res.send(usersModel.getUser(req.params.id));
    }
}

module.exports = new UserController();