import express from 'express'
import mongoose from 'mongoose';
const app = 
express();
const PORT=9700
const MONGO_URI ="mongodb+srv://admin:admin@cluster0.duquahn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
app.get('/',( req, res )=> 
{
res.send("Backend working!")
})

app.listen(PORT,() => {
      console.log(`Server started on http://localhost:${PORT}/`);

})
mongoose.connect(MONGO_URI)
.then(() => { console.log("Mongo URI connected") ;
})
.catch(()=> {console.log("DB connection error")})

const UserSchema =new mongoose.Schema(
      {

      name:String,
      email:String

      }
)
const User =mongoose.model('user',UserSchema);




app.post('/users',async (req,res ) => {
      try {
            const newUser = new UserSchema(req,body);
            await newUser.save();
            res.status(201).send("user created")
      }

catch(err){
      res.status(400).send("Error:" +ree)
}

})
    app.get('/users',async (res,res) => {
       
      const users=await User.find()
       res.jason(users)
      
     

})




//http://localhost:8000/"