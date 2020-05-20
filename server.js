const app = require('./config/custom-config');
const userRoute = require('./src/app/routes/users');
const carRoute = require('./src/app/routes/cars');
const trainRoute = require('./src/app/routes/trains');

app.use('/users', userRoute);
app.use('/cars', carRoute);
app.use('/trains', trainRoute);

module.exports = app;