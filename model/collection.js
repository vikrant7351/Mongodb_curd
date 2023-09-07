const mongoose = require('mongoose');
const shecmamodel = new mongoose.Schema({
    // id : {type:Number, unique:true},
    id:Number,
    name :String,
    surname : String,
},);


const user = mongoose.model('users', shecmamodel);

module.exports = user;