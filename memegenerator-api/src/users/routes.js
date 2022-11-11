const router = require('express').Router();

const controller = require('./controller');
router.get('/', controller.getAll)
      .get('/:email', controller.getOne);

router.post('/', controller.postOne)
      .post('/login', controller.login);

module.exports = router;