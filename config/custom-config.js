const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());

app.listen(3000, ()=>{
    console.info('Servidor iniciado na porta 3000');
});

module.exports = app;