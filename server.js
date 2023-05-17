const express = require('express');
const routerEquipe = require('./routes/route');
const db=require('./db');

const app = express();//creer une instance de l'application express
app.use(express.json());
app.use('/api',routerEquipe);

app.listen(4000,() =>{
    console.log("Le serveur est démarré sur le port 4000")
});

module.exports = app;



