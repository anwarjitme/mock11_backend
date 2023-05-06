const express = require("express");
const { connection } = require("./config/db");
const {bookRoute}=require("./routes/BooksRoute")
const { userRoute}=require("./routes/UserRoute")
const {orderRoute}=require("./routes/orderRoute")
const app = express();
app.use(express.json());

app.use("/api",bookRoute)
app.use("/api", userRoute);
app.use("/api",orderRoute)
app.listen(3000, async () => {
  try {
    await connection;
    console.log("connected with db port 3000");
  } catch (err) {
    console.log({ error: "something wrong in connecting db" });
  }
});
