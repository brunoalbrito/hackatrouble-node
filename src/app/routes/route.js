const { User } = require('../models');

module.exports = (app) =>{
    app.get('/', (req, res) =>{
        res.send('Olá Mundo Node!!!')
    });

    app.post('/user', async (req, res) => {
        const user = await User.create(req.body);
        res.send(user);
    });

    app.get('/user', async (req, res) =>{
        const users = await User.findAll();
        res.send(users);    
    });
}