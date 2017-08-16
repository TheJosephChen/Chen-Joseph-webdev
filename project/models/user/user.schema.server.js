var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
    username: String,
    password: String,
    roles: [{type: String, enum:["ORGANIZER", "PARTICIPANT", "ADMIN"]}],
    history: [{type: String}],
    isAdmin: Boolean
}, {collection: "user"});
module.exports = userSchema;