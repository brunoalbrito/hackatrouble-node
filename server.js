const app = require('./config/custom-config');
//const routes = require('./src/app/routes/route')
// const controllers = require('./src/app/controllers/userController')

// routes(app);

const userRoute = require('./src/app/routes/users');
app.use('', userRoute);

module.exports = app;