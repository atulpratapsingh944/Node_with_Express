// ! 1) import mongoose library
//!  2) define a schema/structure.
// ! 3) create a model(collection) and export it.


// ! 1)
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

// ! 2)  to create a schema, we need a object of schema class.
let userSchema = new mongoose.Schema({
    name: {
        type:String,
         required:true,
         //---> without thois field, data will not get stored 
    },
    email:{
        type:String,
        // unique:true, ---> this ensures no duplicates  are allowed
    },
    password:{
        type:String,
    },
    phone:{
        type:Number,
    },
},
 {
    timestamps: true,//todo , optinal parameter
}
);
// ! pre- hook ==> pre means before something ==> before saving data(any new resoures is created)
// !    THIS IS ONE WAY HASHING   WHICH MEANS IT CANT BE DECRYPTED 
userSchema.pre("save",async function(){
    //& this will generate a salt A  LENTH 10
    let salt = await bcryptjs.genSalt(10);
    // & hash the password
    let hashedPassword = await bcryptjs.hash(this.password, salt);
    // & assigning the hash password
    this.password = hashedPassword;
});

// ! creating a method to compare passwod, with the help of methods
// & syntax ==> anySchema.method_name
userSchema.methods.comparePassword = async function (enteredPassword){
   return await bcryptjs.compare(enteredPassword, this.password);
};

// ! 3) with the help of model(), we are creating a collection based on the structure.
module.exports = mongoose.model("User", userSchema);
// & collection_name == users(plural + lowercase)