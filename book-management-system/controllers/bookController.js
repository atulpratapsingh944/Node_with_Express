const Book = require('../models/bookModel');

exports.getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

exports.addBook = async (req, res) => {
  const { title, author, year } = req.body;

  if (!title || !author) {
    return res.status(400).send("Title and Author are required");
  }

  const newBook = new Book({ title, author, year });
  await newBook.save();
  res.redirect('/books');
};
