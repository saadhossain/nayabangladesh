const mongoose = require("mongoose");

const TagSchema = new mongoose.Schema({
    name: String
}, { timestamps: true });


const Tags = mongoose.model('Tags', TagSchema);

module.exports = Tags;