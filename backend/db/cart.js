const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId, ref: 'users' },
    productId: { type: mongoose.Types.ObjectId, ref: 'products' },
    quantity: {type: Number, required: true, min: 1}
});
const Cart= mongoose.model("carts", cartSchema);
module.exports = Cart;