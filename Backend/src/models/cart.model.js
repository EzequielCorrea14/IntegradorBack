import { Schema, model } from "mongoose";


const cartSchema = new Schema({

  username: {
    type: String,
    required: [true, "Username is required"],
  },

  products: {
    type: Array,
    required: [true, "Products is required"],
  },

  total: {
    type: Number,
    required: [true, "Total is required"],
  },

});

const CartModel = model("Cart", cartSchema);

export default CartModel;