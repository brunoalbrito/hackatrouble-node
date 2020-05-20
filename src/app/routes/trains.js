const express = require('express');
const router = express.Router();

const train_controller = require('../controllers/trainController')

router.get('/', train_controller.train_list)

module.exports = router;