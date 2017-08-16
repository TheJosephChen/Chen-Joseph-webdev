var app = require("../../express");
var tournamentModel = require("../models/tournament/tournament.model.server");

app.post("/api/tournament/user/:userId", createTournament);

function createTournament(req, response) {
    var userId = req.params.userId;
    var tournament = req.body;
    console.log(userId);
    console.log(tournament);
    tournamentModel
        .createTournament(tournament)
        .then(function (tournament) {
            response.json(tournament);
        })

}