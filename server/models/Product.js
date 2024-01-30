const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  quantity: { type: Number, required: true, min: 0},
  category: { type: String, required: true },
  imageUrl: { type: String, required: false },
  seller: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now, required: true },
});

const Product = model("Product", productSchema);
module.exports = Product;
