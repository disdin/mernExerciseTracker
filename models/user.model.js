const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique:true,
    trim:true,
    minlength:3
  }, // username is the attribute and its object is the properties assigned to that attribute
}, {
    timestamps:true,
});
const User= mongoose.model('User',userSchema);  // 'User' inside model function is the name of the schema u can give any name
module.exports= User;