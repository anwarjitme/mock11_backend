const { UserModel}=require("../model/UserModel")
const express=require("express")
const jwt=require("jsonwebtoken")
const userRoute=express.Router()

userRoute.post("/register", async (req, res) => {
  const data = req.body;
  try {
    const user = new UserModel(data);
    await user.save();
    res.send("user has been registered");
  } catch (err) {
    console.log(err);
    res.send({ err: "error in registering" });
  }
});
userRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
       const user= await UserModel.findOne({ email,password });
      if (user) {
        const token = jwt.sign({ books: "books" }, "RM");
        res.send({ msg: "Successfully login", token: token });
      } else {
        res.send("Wrong Credntials");
      }
    } catch (err) {
    console.log({ "error": "something wrong" });
    res.send({ "msg": "something wrong" });
  }
});
module.exports={
userRoute
}