const router = require('express').Router();

const controller = require('./controller');
router.get('/', controller.getAll);
router.get('/:email', controller.getOne);
router.post('/', controller.postOne);

module.exports = router;