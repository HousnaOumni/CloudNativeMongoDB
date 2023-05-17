const mongoose=require('mongoose');

//mongoose.set('strictQuery',true);

const EquipeSchema=mongoose.Schema({
  num:Number,
  nomE:String,
  country:String,
});
module.exports=mongoose.model('Equipe',EquipeSchema)
