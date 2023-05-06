const mongoose =require("mongoose")
const connection = mongoose.connect(
  "mongodb+srv://anwarjitme:anwarjitme@cluster0.wdgpysq.mongodb.net/books?retryWrites=true&w=majority"
);
module.exports={
connection
}