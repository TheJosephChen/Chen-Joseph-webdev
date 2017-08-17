var mongoose = require("mongoose");
var tournamentSchema = require("./tournament.schema.server");
var tournamentModel = mongoose.model("TournamentModel", tournamentSchema);
var userModel = require("../user/user.model.server");

tournamentModel.createTournament = createTournament;
tournamentModel.findAllTournaments = findAllTournaments;
tournamentModel.findAllTournamentsForOrganizer = findAllTournamentsForOrganizer;

module.exports = tournamentModel;

function createTournament(username, tournament) {
    return userModel
        .findUserByUsername(username)
        .then(function (user) {
            organizer = {_id: user._id, username: username}
            tournament.organizer = organizer;
            return tournamentModel.create(tournament);
        })
}

function findAllTournaments() {
    return tournamentModel.find();
}

function findAllTournamentsForOrganizer(username) {
    return userModel
        .findUserByUsername(username)
        .then(function (user) {
            return tournamentModel.find({organizer: {_id: user._id, username: username}});
        })
}