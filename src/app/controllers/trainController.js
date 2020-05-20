const {Train} = require('../models');


exports.train_list = async (req,res) => {
    const trains = await Train.findAll();
    return res.send(trains);
}
