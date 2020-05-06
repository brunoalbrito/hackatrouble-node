const app = require('./config/custom-config');
const routes = require('./src/app/routes/route')

const {Train} = require('./src/app/models')
Train.create({number: '123', lineName: '123'});
routes(app);