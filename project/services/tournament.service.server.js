var app = require("../../express");
var tournamentModel = require("../models/tournament/tournament.model.server");

app.post("/api/tournament/user/:userId", createTournament);
app.get("/api/tournament", getAllTournaments)

function createTournament(req, response) {
    var userId = req.params.userId;
    var tournament = req.body;
    tournamentModel
        .createTournament(userId, tournament)
        .then(function (tournament) {
            response.json(tournament);
        })

}

function getAllTournaments(req, response) {

    tournamentModel
        .findAllTournaments()
        .then(function (tournaments) {
            response.json(tournaments);
        })
}