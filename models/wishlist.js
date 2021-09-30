const mongoose = require('mongoose');

const wishListSchema = mongoose.Schema({
    name: { type: String, required: true },
    recipient: {type: String},
    occation: {type: String},
    price: {type: Number, required: true},
    link: {type: String},
    img: {String},
    isbought: { type: Boolean, default: false }

}, { timestamps: true })

module.exports = mongoose.model('WishList', wishListSchema)