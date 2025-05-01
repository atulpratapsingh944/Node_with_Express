let express=require("express");
let fs=require("fs");
//! For every Routes file,import the file here and use it in midleware and use this in middleware
const myRoutes=require("./routes/routes")
let app=express();
//! to be discussed
app.use(express.urlencoded({extended:true}));
//! middleware
app.use(myRoutes);

//! create on endpoint("/form") where are form page will be displyed with three input => name,email,password

app.get("/",(req,res)=>{``
    res.send("HomePage");
})

app.listen(9001,(err)=>{
    if(err) console.log(err);
    console.log("server running at port 9001")
});  