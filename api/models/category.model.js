const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name: String,
    slug: String,
}, { timestamps: true });


const Categories = mongoose.model('Categories', CategorySchema);

module.exports = Categories;