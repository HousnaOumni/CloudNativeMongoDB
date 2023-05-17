const mongoose=require('mongoose')
mongoose.set('strictQuery',true);

mongoose.connect('mongodb://localhost/Bootola',
{useNewUrlParser: true,useUnifiedTopology:true,})
   .then(()=>{  
      console.log('connexion réussi au serveur de données')})
   .catch(err => console.log(err)); 

