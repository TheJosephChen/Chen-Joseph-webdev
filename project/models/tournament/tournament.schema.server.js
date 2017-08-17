var mongoose = require("mongoose");
var tournamentSchema = mongoose.Schema({
    name: String,
    organizer: String,
    participants: [{participant: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"}, deck: String}],
    max: Number
}, {collection: "tournament"});
module.exports = tournamentSchema;