const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());

const PORT = 3000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, ()=>{
    console.info('Servidor iniciado na porta 3000');
});

module.exports = app;