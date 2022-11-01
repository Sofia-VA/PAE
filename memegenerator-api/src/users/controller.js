class UserController {
    getAll(req, res) {
        res.send('Llegaste al endpoint de users');
        
    }
    getOne(req, res) {
        res.send('Llegaste al get one endpoint de users', req.params.id);
        
    }
}

module.exports = new UserController();