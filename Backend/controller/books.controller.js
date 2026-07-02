import Book from "../model/books.model.js";

export const getBook = async (req, res) => {
  try {
    console.log("Collection:", Book.collection.name);

    const books = await Book.find();

    console.log("Books found:", books.length);

    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};
