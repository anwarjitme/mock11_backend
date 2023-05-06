// {
//   _id: ObjectId,
//   title: String,
//   author: String,
//   category: String,
//   price: Number,
//   quantity: Number
// }
const {mongoose}=require("mongoose")
const BookSchema = mongoose.Schema({
    title: String,
    author: String,
    category: String,
    price: Number,
    quantity: Number
});
const BookModel=mongoose.model("book",BookSchema)
module.exports={
          BookModel
}