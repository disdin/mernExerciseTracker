const express= require('express');
const cors =require('cors');
const mongoose =require('mongoose');

require('dotenv').config(); // this configures so that we can have our environment variables in the dotenv file

const app =express();
const port= process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri=process.env.MONGODB_URI || "mongodb+srv://sidhant:sidhantbahri01sidsomay1126@cluster0.in5fm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect( uri,{useNewUrlParser: true}).then(() => console.log('mongo connected'))
.catch(err => console.log(err));  
const connection=mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB database connection established successflly");
});  // here open is the event and in here we have defind a event listener

const exersisesRouter=require('./routes/exercises');
const usersRouter=require('./routes/users');

app.use('/exercises',exersisesRouter);  // basically we are binding these urls with the corresponding routers
app.use('/users', usersRouter);

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
}
app.listen(port, ()=> {
    console.log(`server is running at ${port}`);
});