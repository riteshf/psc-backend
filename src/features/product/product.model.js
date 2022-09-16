const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true, min: 0, max: 400 },
  quantity: { type: Number, required: true, min: 0, max: 100 },
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;
