let express=require("express");
let fs=require("fs");
let app=express();
const {MongoClient}=require("mongodb");
let connectDB=async()=>{
  //! create a connection
  let client= await MongoClient.connect("mongodb://localhost:27017");
  //! create a datbase
  let database=client.db("formdata");
  //!create acollection
  let collection=await database.createCollection("users");
  return collection;
};



//! to be discussed
app.use(express.urlencoded({extended:true}));

//! create on endpoint("/form") where are form page will be displyed with three input => name,email,password

app.get("/",(req,res)=>{``
    res.send("HomePage");
})

app.get("/form", (req, res) => {
    // res.send("form Page");
    fs.createReadStream("./pages/form.html","utf-8").pipe(res);
  });
  
//   app.get("/user", (req, res) => {
//     let collection = await connectDB();
//     let data = await collection.find().toArray();
//     res.send(data);
//   });
//   app.get("style.css", (req, res) => {
//     res.sendFile(__dirname + "/style.css")});

  app.post("/api",async(req,res)=>{
    //! set form action to a value and use the same value as the enpoint in the post method

    //! set from method to post
    //! use name attribute
    //? data is stroed in req.body
    console.log(req.body);

    let myCollection= await connectDB();
    // console.log(myCollection);
    let {email,name,password} =req.body
    let dataInserted=await myCollection.insertOne({email,name,password});



    res.send(
      `<h3>${req.body.name}</h3> has signup succesfully with this email
       <h3>${req.body.email}</h3>`
    );
  });

app.listen(9001,(err)=>{
    if(err) console.log(err);
    console.log("server running at port 9001")
});