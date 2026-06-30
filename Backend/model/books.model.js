import mongoose from "mongoose";
// mongoose.connect(
//   "mongodb+srv://aayush:aayush123@cluster0.wsajyl8.mongodb.net/Bookstore",
// );

const bookschema = mongoose.Schema({
  name: String,
  title: String,
  price: Number,
  category: String,
  image: String,
});

const Book = mongoose.model("Book", bookschema);

export default Book;
