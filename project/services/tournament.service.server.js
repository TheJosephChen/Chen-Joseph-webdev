var app = require("../../express");
var tournamentModel = require("../models/tournament/tournament.model.server");

app.post("/api/tournament/user/:username", createTournament);
app.get("/api/tournament", getAllTournaments)
app.get("/api/tournament/:userId/manage", getAllTournamentsForOrganizer)

function createTournament(req, response) {
    var username = req.params.username;
    var tournament = req.body;
    tournamentModel
        .createTournament(username, tournament)
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

function getAllTournamentsForOrganizer(req, response) {
    var userId = req.params.userId;
    tournamentModel
        .findAllTournamentsForOrganizer(userId)
        .then(function (tournaments) {
            response.json(tournaments);
        })
}