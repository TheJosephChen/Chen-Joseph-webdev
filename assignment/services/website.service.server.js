var app = require("../../express");
var websiteModel = require("../models/website.model.server");

var websites = [
    { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
    { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
    { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
    { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
    { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
    { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
    { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
];

app.get("/api/user/:userId/website", findWebsitesByUser);
app.post("/api/user/:userId/website", createWebsite);

app.get("/api/website/:websiteId", findWebsiteById);
app.put("/api/website/:websiteId", updateWebsite);
app.delete("/api/website/:websiteId", deleteWebsite);


function findWebsitesByUser(req, response) {
    var userId = req.params.userId;

    websiteModel
        .findWebsitesByUser(userId)
        .then(function (websites) {
            response.json(websites);
        })

    // var sites = [];
    // for (var w in websites) {
    //     if (websites[w].developerId === userId) {
    //         sites.push(websites[w]);
    //     }
    // }
    // response.json(sites);
}

function findWebsiteById(req, response) {
    var websiteId = req.params.websiteId;
    websiteModel
        .findWebsiteById(websiteId)
        .then(function (websiteDoc) {
            response.json(websiteDoc)
        }, function (err) {
            response.sendStatus(404).send(err);
        })

    // for (var w in websites) {
    //     var website = websites[w];
    //     if (website._id === websiteId) {
    //         response.json(website);
    //         return;
    //     }
    // }
    // response.sendStatus(404);
}

function createWebsite(req, response) {
    var userId = req.params.userId;
    var website = req.body;

    websiteModel
        .createWebsite(userId, website)
        .then(function (websiteDoc) {
            response.json(websiteDoc);
        }, function (err) {
            response.sendStatus(404).send(err);
        })

    // website._id = (new Date()).getTime() + "";
    // website.developerId = userId;
    // websites.push(website);
    // response.json(website);
}

function updateWebsite(req, response) {
    var websiteId = req.params.websiteId;
    var website = req.body;

    for (var w in websites) {
        if (websites[w]._id === websiteId) {
            websites[w] = website;
            response.json(website);
            return;
        }
    }
    response.sendStatus(404);
}

function deleteWebsite(req, response) {
    var websiteId = req.params.websiteId;

    var websiteIndex;
    for (var w in websites) {
        if (websites[w]._id === websiteId) {
            websiteIndex = w;
            websites.splice(websiteIndex, 1);
            response.sendStatus(200);
            return;
        }
    }
    response.sendStatus(404);
}