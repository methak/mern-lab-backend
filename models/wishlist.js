const mongoose = require('mongoose');

const wishListSchema = mongoose.Schema({
    name: { type: String, required: true },
    recipient: {type: String},
    occasion: {type: String},
    price: {type: Number},
    link: {type: String},
    img: {String},
    isBought: { type: Boolean, default: false }

}, { timestamps: true })

module.exports = mongoose.model('WishList', wishListSchema)