//! npm ==> It shand for node package manager.(modules and packeage both are same ). it is an online platfrom which is used to manage the package manage the packages (install,update ,create)
//? using this npm ,we can install ,update and remove module s.we can also create new modules

//! before installing any third party modules , there must be "package.json" file int the source/project folder
//? to craete a package .json file type thsi cammad => "npm init  -y" in the terminal
//! package .json file conatains the meta data of the project like (name,author,description ,license,dependencies,devDependencies,ect...)

//! now we can install third party modukes using the cammad ==>
    //? npm install <module_name_1,module_name_2,module_3.................>

//? example = npm i mongodb 
//? example ==> npm i express mongodb multer

const mongodb = require("mongodb");
// console.log(mongodb);


let connectDB = async()=>{
    //! we successfully established the connection with the database
    let payload= await mongodb.MongoClient.connect("mongodb://localhost:27017");
                //  console.log(payload);
                //! create a database 
                let database = payload.db("NODEJS");
                console.log(database.createCollection);
                //create a collection --> cratecollection ("collections-name")
                let collection =  await database.createCollection("NODEJSCollecti");
                console.log(collection.insertOne);



                let data = {name:"Atul",id:123,age:24};

                let op = await collection.insertOne(data);
                await collection.insertOne({name:"Atul",id:123,age:24});
                console.log("data Inserted successfully");
};

connectDB();