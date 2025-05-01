// ? Mongoose => it is an ODM (Object Data Modelling) library for mongodb and nodeJS, it simplifies the process of working with mongoDB by proving functionalities like 
//! schema --> we define the structure of the document,
// ! data validation  --> data is checking against schema,
// ! CRUD operations --> create, read ,update, delete

// ! ODM ==> object data Modelling. It is a tool that bridges the gap between your code (object  oriented-> (JS OBJECTS)) to document based data(BSON)..It converts the JS object  to  mongodb document and vice versa.
// it is a library for mongodb and nodejs, it simplifies the process of working...

let express = require("express");
require("dotenv").config();
// ! require("dotenv") ==> this will read the .env file and laod all the variables to process.env(envirnment varibles)
// ? config() => this will parse the .env file


const connectDB  = require('./config/database');

const userRoutes  = require("./routes/user.routes")
const blogRoutes = require("./routes/blog.routes");
connectDB();
const app = express();


app.use(express.urlencoded({extended:true}));
app.use(express.json())//this will parse json data
app.use("/v1/users",userRoutes);
app.use("/v1/blogs",blogRoutes);

//todo/v1/users api versioning

app.listen(process.env.PORT, (err)=>{
    if(err) console.log(err);
    console.log('server running at port number 9000');
})

// localhost:9000/user/add