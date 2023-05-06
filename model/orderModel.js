
const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
 user : Object,
 books : Array,
 totalAmount: Number
});
const OrderModel = mongoose.model("order", OrderSchema);

module.exports = {
  OrderModel,
};