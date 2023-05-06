const express = require("express");
const { BookModel } = require("../model/booksModel");
const {jwt_verify}=require("../middlewere/logger")
const bookRoute = express.Router();

bookRoute.get("/books",async (req, res) => {
          let category=req.query.category
          let author=req.query.author
  try {
          if(category&&author){
             const booksWIthAuthor = await BookModel.find({
               $and: [{ "author": author },{ "category": category }],
             });
             res.send(booksWIthAuthor);        
          }else if(category){
              const booksWithCategory = await BookModel.find({ category: category });    
                res.send(booksWithCategory);     
          }else {
 const books = await BookModel.find();
 res.send(books);  
          }

  } catch (err) {
    console.log(err);
    res.send({"err":"error in getting books"});
  }
});

bookRoute.get("/books/:id", async (req, res) => {
          const id= req.params.id
  try {
    const book = await BookModel.find({"_id":id});
    res.send(book);
  } catch (err) {
    console.log(err);
    res.send({ err: "error in getting books" });
  }
});

bookRoute.patch("/books/:id", async (req, res) => {
          let payload=req.body
  const id = req.params.id;
  try {
    
   await BookModel.findByIdAndUpdate({ _id: id }, payload);
   res.send("book data updated successfully");
  } catch (err) {
    console.log(err);
    res.send({ err: "error in updating  book data" });
  }
});

bookRoute.post("/books", async (req, res, jwt_verify) => {
  const data = req.body;
  try {
    const book = new BookModel(data);
    await book.save();
    res.send("new boook added");
  } catch (err) {
    console.log(err);
    res.send({ err: "error in adding book" });
  }
});
bookRoute.delete("/books/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await BookModel.findByIdAndDelete({ _id: id });
    res.send("book data deleted successfully");
  } catch (err) {
    console.log({ "err": `${err}` });
  }
});
module.exports={
          bookRoute
}

