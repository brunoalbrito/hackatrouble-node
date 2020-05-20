const app = require('./config/custom-config');
const userRoute = require('./src/app/routes/users');
const carRoute = require('./src/app/routes/cars');

app.use('/users', userRoute);
app.use('/cars', carRoute);


module.exports = app;