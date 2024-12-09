const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    story: {
        type: String,
        required: true
    },
    category: {},
    reporter: {},
    tags: [],
    featuredImg: String
}, { timestamps: true });


const News = mongoose.model('News', NewsSchema);

module.exports = News;