// ! frameworks 
// ! differnece between frameworks and libraries

// ! node JS frameworks --> expressJS, sailsJS, meteorJS, DerbyJS

// ! mern --> nextJS, nest/angular, express(popular)

//! nextJS --> frontend/backend, nestJS/angular ---> frontend, expressJS ---> backend

// ! what is express....??
 //? express is a framework for node.js through which we can built server
// ? side applications (which are scalable)

// ! 1) we should have  a package.json file in our root project , and there should be only one package.json in our project
// ! ====> to create a package.json file, commmand
// ? npm  init -y  ---> it will create a package.json file in our root project with the default values.
// ? npm init(npm initilize) ---> this will create a package.json file in our root project with the user defined values.

//! 2) install required packages/modules
//? npm i/install module_name
//? npm i module_name module_name2

//! 3) import the install modules
const express = require('express');
// console.log(express);

//!calling /invoking top level function
let app=express();
// console.log(app);

//? "/"==> route
app.get("/",(req,res)=>{
    res.send("Hello World!!!!!!!!!")
})

app.get("/about",(req,res)=>{
    res.send("About Us page");
})

// app.post("/endpoint", cb)
// app.get("/endpoint", cb)
// app.delete("/endpoint", cb)
// app.update("/endpoint", cb)

//! Assign port number
app.listen(8000,(err)=>{
    if(err) console.log(err);
    console.log("Server running at port no 8000")
})

//! nodemon --> it will automatically restart our server if we make any changes
//? npm i nodemon --D (this will we installed in devDependendencies --> which means it will not installed in production)
//? nodemon filename.js

// ! .ps1 errror 
//  the term 

