const router=require('express').Router();
let User= require('../models/user.model');

router.route('/').get((req,res)=>{
    User.find()
        .then(users=> res.json(users))
        .catch(err=> res.status(400).json('Error: '+ err));
});

router.route('/add').post((req,res)=>{
    const username = req.body.username;  // this knowledge is pending idk wt this is..............

    const newUser = new User({username}); // here we are creating a instance of the User model and passing the string (the client entered) as the username to the model

    newUser.save()      // means data is now being added to the database and after that client will see User added popped on the screen
        .then(()=> res.json('User added'))
        .catch(err=> res.status(400).json('Error: '+ err));
})
module.exports=router;