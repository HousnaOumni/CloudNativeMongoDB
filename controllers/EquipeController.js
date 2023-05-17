const Equipe = require('../models/EquipeModel')

const displayEquipe= async(req,res)=>{
    try{
          const resultats=await Equipe.find()
          res.json(resultats)
    }
    catch(error){
        res.status(500).json({ message:error.message});
    }
}

const ajouterEquipe=async(req,res)=>{
  try{
      const newEquipe=new Equipe(req.body);
      await newEquipe.save();
     res.status(200).json(newEquipe);
  }
  catch(error){
    res.status(500).json({message:error.message})
  }
};

const rechercheEquipe=async(req,res)=>{
 try{
      const mid=req.params.id;
      const resultat=await Equipe.findById({id:mid});
      if(!resultat){
         res.status(404).json({message:"equipe non trouvé"});
         return;
      }
      res.json(resultat)
    }
  catch(error){
    res.status(500).json({ message: error.message });
  }
    }

const modifierEquipe=async(req,res)=>{
  try{
      const myid=new ObjectID(req.params.id);
      const equipe=await Equipe.findById(myid);
      if(!equipe){
          res.status(404).json({message:"equipe non trouvé"});
          return;
      }
      equipe.nomE = req.body.nomE || equipe.nomE
      equipe.country = req.body.country || equipe.country
      await equipe.save();
      res.status(200).json(equipe)
    }
  catch(error){
        res.status(500).json({message: error.message });
  }
}
    
const supprimerEquipe=async(req,res) => {
    try {
      const equipe = await Equipe.findById(req.params.id);
      if (!equipe) {
        res.status(404).json({ message:"Equipe not found"});
        return;
      }
      await equipe.remove();
      res.status(200).json({message:"Suppression une Equipe"});
    } catch (error) {
      res.status(500).json({message: error.message });
    }
  };

module.exports={ajouterEquipe,modifierEquipe,supprimerEquipe,displayEquipe,rechercheEquipe}