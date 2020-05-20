const {User} = require('../models');


exports.user_list = async (req, res) =>{
    const users = await User.findAll();
    res.send(users);
}

exports.create = async (req, res) =>{
    const user = await User.create(req.body);
    res.send(user);
}