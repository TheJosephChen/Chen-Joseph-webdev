var mongoose = require("mongoose");
var cardSchema = mongoose.Schema({
    name: String,
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: "CommentModel"}]
}, {collection: "card"});
module.exports = cardSchema;