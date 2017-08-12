var app = require("../../express");
var cardModel = require("../models/card/card.model.server");

app.post("/api/card", createCard);
app.get("/api/card", getCard);
app.put("/api/card", createComment);

function createComment(req, response) {

}

function getCard(req, response) {
    var cardName = req.query.cardname;
    if (cardName) {
        cardModel
            .findCardByName(cardName)
            .then(function (card) {
                response.json(card);
                return;
            }, function (err) {
                response.sendStatus(404).send(err);
                return;
            })
    }
}

function createCard(req, response) {
    var card = req.body;
    cardModel
        .createCard(card)
        .then(function (card) {
            response.json(card);
        })

}