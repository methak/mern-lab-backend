const mongoose = require('mongoose');

const wishlistSchema = mongoose.Schema({
    name: { type: String, required: true },
    recipient: String,
    occation: String,
    price: Number,
    link: String,
    img: String,
    isbought: { type: Boolean, default: false }

}, { timestamps: true })

module.exports = mongoose.model('Wishlist', wishlistSchema)