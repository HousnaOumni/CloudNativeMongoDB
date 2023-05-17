const express = require('express');
const routerEquipe = express.Router();
const equipeController = require("../controllers/EquipeController");

//Déclaration des routes
//Afficheun produit
routerEquipe.get('/equipes',equipeController.displayEquipe);
    
//Recherche un produit par id
routerEquipe.get('/equipes/:id',equipeController.rechercheEquipe);

//Ajouter 
routerEquipe.post('/equipes',equipeController.ajouterEquipe);

//Supprimer 
routerEquipe.delete('/equipes/:id',equipeController.supprimerEquipe);

//Modifier 
routerEquipe.put('/equipes/:id',equipeController.modifierEquipe);

module.exports=routerEquipe;