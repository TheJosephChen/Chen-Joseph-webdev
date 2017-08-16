var mongoose = require("mongoose");
var tournamentSchema = mongoose.Schema({
    name: String,
    organizer: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
    participants: [{participant: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"}, deck: String}],
    max: Number
}, {collection: "tournament"});
module.exports = tournamentSchema;