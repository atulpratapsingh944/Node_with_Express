//! 1) destructure Router Components from express Modules
//! 2) invoke the top level function
//! 3) export the router variable


let {Router}=require("express");
const { displayHomePage,displayFormPage, displayUsers, diplayCssPage, handleFormSubmit } = require("../controller/controller");
let router=Router();
module.exports=router;


router.get("/",displayHomePage);

router.get("/form",displayFormPage);

  router.get("/users",displayUsers);

  router.get("/styles", diplayCssPage);

  router.post("/api",handleFormSubmit);


module.exports=router;