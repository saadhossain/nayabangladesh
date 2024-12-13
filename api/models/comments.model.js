const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema({
    newsId: String,
    readerName: String,
    email: String,
    comment: String,
    image: String
}, { timestamps: true });


const Comments = mongoose.model('Comments', CommentsSchema);

module.exports = Comments;