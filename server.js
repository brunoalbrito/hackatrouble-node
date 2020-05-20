const app = require('./config/custom-config');
const userRoute = require('./src/app/routes/users');

app.use('/users', userRoute);

module.exports = app;