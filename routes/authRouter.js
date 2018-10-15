const router = require('express').Router();
const payController = require('../controllers/payController');

router
    .route('/')
    .get(payController.findById)
    .post(payController.create);

router 
    .route('/:retref')
    .get(payController.findById)
    .put(payController.update)
    .delete(payController.remove);

module.exports = router;