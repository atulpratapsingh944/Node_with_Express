// !) 



const {Router} = require("express");
const {createBlog } = 
require("../controller/blog.controller");

const router = Router();
router.post("/create",createBlog);

module.exports = router;