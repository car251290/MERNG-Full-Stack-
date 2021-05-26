const {model,Schema} = require('mongoose');

const userSchema = new Schema ({
    userName : String,
    Password : String,
    email: String,
    createdAt: String
})
module.exports= module('User', userSchema);