import { Schema, model } from "mongoose";

const productSchema = new Schema({

  name: { type: String, required: [true, "Name is required"], unique: true },
  price: { type: Number, required: [true, "Price is required"] },
  cc: { type: Number, required: [true, "cc is required"] },
  vel: { type: String, required: [true, "vel is required"] },
  km: {type: String, required: [true, "km is required"] },
  color: { type: String, required: [true, "Color is required"] },
  image1: { type: String, required: [true, "image1 is required"] },
  image2: { type: String, required: [true, "image2 is required"] },
  image3: { type: String, required: [true, "image3 is required"] },
  description: {type: Boolean, required: [false, "Description is required"] },
  stock: { type: Number, required: [true, "Stock from is required"] },

});

const ProductModel = model("Product", productSchema);

export default ProductModel;