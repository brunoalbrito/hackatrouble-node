const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.info('Servidor iniciado na porta 3000');
});

module.exports = app;