const {OrderModel}=require("../model/orderModel")
const express = require("express");
const orderRoute = express.Router();

orderRoute.get("/orders", async (req, res) => {

  try {
      const orders = await OrderModel.find();
      res.send("Orders will be here");
    
  } catch (err) {
    console.log(err);
    res.send({ err: "error in getting orders" });
  }
});
module.exports={
          orderRoute
}