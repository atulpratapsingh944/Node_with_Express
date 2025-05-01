// ! 1) import the collection

const blogCollection = require("../models/blogs.model");


// ! Insert a blogs
const createBlog = async(req,res) =>{
   try {
    let {title, description} = req.body;
    let newBlog = await blogCollection.create({title, description});
    res.status(201).json({
        success: true,
        message:  "blog created successfully",
        newBlog,
    });
   } catch (error) {
    res.status(500).json({
        success:false,
        message: " something went wrong while creating a blog",
        // errorObject : error,
        errMessage: error.message,
    })
   }
}
// ! fetching all blogs
const fetchAllBlogs = async (req, res) => {
    try {
        const blogs = await blogCollection.find();
        res.status(200).json({
            success: true,
            message: "Fetched all blogs successfully",
            blogs,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong while fetching blogs",
            errMessage: error.message,
        });
    }
};


// ! fetch one blog
const fetchOneBlog  = async(req,res) =>{};
// ! update a blog
const updateBlog  = async(req,res) =>{};
// ! delete a blog
const deleteBlog = async(req,res) =>{};


module.exports = {
    createBlog,fetchAllBlogs
}