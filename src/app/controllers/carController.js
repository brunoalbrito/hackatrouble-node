const {Car} = require('../models');


exports.car_list = async (req, res) => {
    const cars = await Car.findAll();
    return res.send(cars);
}