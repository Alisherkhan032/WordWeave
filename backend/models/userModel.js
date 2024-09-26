const mongoose = require('mongoose');

let Schema = mongoose.Schema; //returns a class

const userSchema = new Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email :{
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true 
    },
    password :{
        type : String,
        required : true,
        minLength : 6,
        trim : true  
    }}, {timestamps : true})

const User_model = mongoose.model('User', userSchema, 'userCollection');

module.exports = User_model;