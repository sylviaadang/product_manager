const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, "Please provide a title"]
    },
    price : {
        type: Number,
        required: [true, "Please provide a price"]
    },
    description : {
        type : String,
        required: [true, "Please provide a description"],
        maxlength: [255, "Please keep your description under 256 characters"]
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
