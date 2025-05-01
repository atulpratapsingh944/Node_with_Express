// ! 1) import mongoose module.
// !  2) create a schema.
// ! 3) create a collecttion and export  it.

const { Schema, model } = require("mongoose");

let blogSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        minlength: 10,
        required: [true, " Discription is required and should be minimum 10 characters"],
    },
    // createdBy: {}, //todo

}, 
{ timestamp: true });

module.exports  = model("Blog", blogSchema);
