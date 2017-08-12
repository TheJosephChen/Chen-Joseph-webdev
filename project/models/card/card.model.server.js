var mongoose = require("mongoose");
var cardSchema = require("./card.schema.server");
var cardModel = mongoose.model("CardModel", cardSchema);
module.exports = cardModel;

cardModel.createCard = createCard;
cardModel.findCardByName = findCardByName;

function findCardByName(cardname) {
    // findOne returns null if DOC not found
    return cardModel.findOne({name: cardname});
}

function createCard(card) {
    return cardModel.create(card);
}