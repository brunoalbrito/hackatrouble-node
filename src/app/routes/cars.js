const express = require('express');
const router = express.Router();

const car_controller = require('../controllers/carController')

router.get('/', car_controller.car_list);

module.exports = router;
