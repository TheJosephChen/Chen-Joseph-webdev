var app = require("../../express");
var pageModel = require("../models/page/page.model.server");

var pages = [
    { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
    { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
    { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
];

app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
app.post("/api/website/:websiteId/page", createPage);

app.get("/api/page/:pageId", findPageById);
app.put("/api/page/:pageId", updatePage);
app.delete("/api/website/:websiteId/page/:pageId", deletePage);


function findAllPagesForWebsite(req, response) {
    var websiteId = req.params.websiteId;

    pageModel
        .findAllPagesForWebsite(websiteId)
        .then(function (pages) {
            response.json(pages);
        })
    // var _pages = [];
    // for (var p in pages) {
    //     if (pages[p].websiteId === websiteId) {
    //         _pages.push(pages[p]);
    //     }
    // }
    // response.json(_pages);
}

function findPageById(req, response) {
    var pageId = req.params.pageId;

    pageModel
        .findPageById(pageId)
        .then(function (pageDoc) {
            response.json(pageDoc)
        }, function (err) {
            response.sendStatus(404).send(err);
        })
    // for (var p in pages) {
    //     var page = pages[p];
    //     if (page._id === pageId) {
    //         response.json(page);
    //         return;
    //     }
    // }
    // response.sendStatus(404);
}

function createPage(req, response) {
    var websiteId = req.params.websiteId;
    var page = req.body;


    pageModel
        .createPage(websiteId, page)
        .then(function (pageDoc) {
            response.json(pageDoc);
        }, function (err) {
            response.sendStatus(404).send(err);
        })
    // page._id = (new Date()).getTime() + "";
    // page.websiteId = websiteId;
    // pages.push(page);
    // response.json(page);
}

function updatePage(req, response) {
    var pageId = req.params.pageId;
    var page = req.body;

    pageModel
        .updatePage(pageId, page)
        .then(function (status) {
            response.json(status);
        }, function (err) {
            response.sendStatus(404).send(err);
        });
    // for (var p in pages) {
    //     if (pages[p]._id === pageId) {
    //         pages[p] = page;
    //         response.json(page);
    //         return;
    //     }
    // }
    // response.sendStatus(404);
}

function deletePage(req, response) {
    var pageId = req.params.pageId;
    var websiteId = req.params.websiteId;
    pageModel
        .deletePage(websiteId, pageId)
        .then(function (status) {
            response.json(status);
        });

    // var pageIndex;
    // for (var p in pages) {
    //     if (pages[p]._id === pageId) {
    //         pageIndex = p;
    //         pages.splice(pageIndex, 1);
    //         response.sendStatus(200);
    //         return;
    //     }
    // }
    // response.sendStatus(404);
}