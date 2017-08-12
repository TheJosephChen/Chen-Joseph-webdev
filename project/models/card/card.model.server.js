var mongoose = require("mongoose");
var cardSchema = require("./card.schema.server");
var cardModel = mongoose.model("CardModel", cardSchema);
module.exports = cardModel;

cardModel.createCard = createCard;
cardModel.findCardByName = findCardByName;
cardModel.addCommentToCard = addCommentToCard;

function addCommentToCard(cardname, comment) {
    return cardModel
        .findCardByName(cardname)
        .then(function (card) {
            card.comments.push(comment);
            return card.save();
        } );
}

function findCardByName(cardname) {
    // findOne returns null if DOC not found
    return cardModel.findOne({name: cardname});
}

function createCard(card) {
    return cardModel.create(card);
}