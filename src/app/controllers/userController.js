const {User} = require('../models');


exports.user_list = async (req, res) =>{
    const users = await User.findAll();
    res.send(users);
}