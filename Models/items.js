const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    inventory: Number,
    nextDelivery: Date,
    deliveryAmnt: Number
})


const Item = mongoose.model('Item', itemSchema)

module.exports = Item;