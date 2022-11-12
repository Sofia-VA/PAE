const router = require('express').Router();

const controller = require('./controller');
const session = require('../session/model');

router.get('/', session.verifyToken, controller.getAll)
      .get('/:email', controller.getOne);

router.post('/', controller.postOne)
      .post('/login', controller.login);

module.exports = router;