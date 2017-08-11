var mongoose = require("mongoose");
var cardSchema = require("./card.schema.server");
var cardModel = mongoose.model("CardModel", cardSchema);
module.exports = cardModel;
