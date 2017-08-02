var app = require("../../express");

var widgets = [
    { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
    { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
        "url": "http://lorempixel.com/400/200/"},
    { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
    { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
        "url": "https://youtu.be/AM2Ivdi9c4E" },
    { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
];


app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
app.post("/api/page/:pageId/widget", createWidget);

app.get("/api/widget/:widgetId", findWidgetById);
app.put("/api/widget/:widgetId", updateWidget);
app.delete("/api/widget/:widgetId", deleteWidget);

app.put("/api/page/:pageId/widget", reorderWidget);

function reorderWidget(req, response) {
    var pageId = req.params.pageId;
    var startIndex = req.query.initial;
    var endIndex = req.query.final;
    console.log("We hit the server service " + pageId + " " + startIndex + " " + endIndex);
    // make sure the movement is valid
    if (startIndex !== -1 && endIndex !== -1) {

        //first figure out which widgets belong to the page
        var _widgets = [];
        for (var w in widgets) {
            if (widgets[w].pageId === pageId) {
                _widgets.push(widgets[w]);
            }
        }
        //get the indices in the page's widgets list
        var widget1 = _widgets[startIndex];
        var widget2 = _widgets[endIndex];
        var w1Index = null;
        var w2Index = null;

        //get the indices in the main widgets list
        for (var w in widgets) {
            if (widgets[w]._id === widget1._id) {
                w1Index = w;
            }
            if (widgets[w]._id === widget2._id) {
                w2Index = w;
            }
        }
        widgets.splice(w1Index, 1);
        widgets.splice(w2Index, 0, widget1);
    }
    response.sendStatus(200);
}

function findAllWidgetsForPage(req, response) {
    var pageId = req.params.pageId;

    var _widgets = [];
    for (var w in widgets) {
        if (widgets[w].pageId === pageId) {
            _widgets.push(widgets[w]);
        }
    }
    response.json(_widgets);
}

function findWidgetById(req, response) {
    var widgetId = req.params.widgetId;

    for (var w in widgets) {
        var widget = widgets[w];
        if (widget._id === widgetId) {
            response.json(widget);
            return;
        }
    }
    response.sendStatus(404);
}

function createWidget(req, response) {
    var pageId = req.params.pageId;
    var widget = req.body;

    widget._id = (new Date()).getTime() + "";
    widget.pageId = pageId;
    widgets.push(widget);
    response.json(widget);
}

function updateWidget(req, response) {
    var widgetId = req.params.widgetId;
    var widget = req.body;

    for (var w in widgets) {
        if (widgets[w]._id === widgetId) {
            widgets[w] = widget;
            response.json(widget);
            return;
        }
    }
    response.sendStatus(404);
}

function deleteWidget(req, response) {
    var widgetId = req.params.widgetId;

    var widgetIndex;
    for (var w in widgets) {
        if (widgets[w]._id === widgetId) {
            widgetIndex = w;
            widgets.splice(widgetIndex, 1);
            response.sendStatus(200);
            return;
        }
    }
    response.sendStatus(404);
}