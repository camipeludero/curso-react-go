const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
    email: String,
    password: String
    //las relaciones de la db las defino aca
})

module.exports = model("User", userSchema)