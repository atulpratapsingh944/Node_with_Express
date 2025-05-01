const fs=require("fs");
const{connectDB}=require("../config/db")
let displayHomePage=(req,res)=>{
    res.send("HomePage");
};

let displayFormPage= (req, res) => {
    // res.send("form Page");
    fs.createReadStream("./pages/form.html","utf-8").pipe(res);
  }


 let displayUsers= async(req,res)=>{
    let collection=await connectDB();
    let data=await collection.find().toArray();
    res.send(data);
  }

  let diplayCssPage=(req, res) => {
    // res.send("form Page");
    fs.createReadStream("./pages/styles.css","utf-8").pipe(res);
  }

  let handleFormSubmit=async(req,res)=>{
    //! set form action to a value and use the same value as the enpoint in the post method
    //! set from method to post
    //! use name attribute
    //? data is stroed in req.body
    console.log(req.body);

    let myCollection= await connectDB();
    // console.log(myCollection);
    let {Useremail,Username,Userpassword} =req.body
    let dataInserted=await myCollection.insertOne({Useremail,Username,Userpassword});



    res.send(
      `<h3>${req.body.Username}</h3> has signup succesfully with this email
       <h3>${req.body.Useremail}</h3>`
    );
  }

module.exports={displayHomePage,displayFormPage,displayUsers,diplayCssPage,handleFormSubmit}