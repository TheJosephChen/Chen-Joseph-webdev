var mongoose = require("mongoose");
var widgetSchema = require("./widget.schema.server");
var widgetModel = mongoose.model("WidgetModel", widgetSchema);
var pageModel = require("../page/page.model.server");

widgetModel.createWidget = createWidget;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
widgetModel.reorderWidget = reorderWidget;

module.exports = widgetModel;

function reorderWidget(pageId, start, end) {

    return pageModel
        .findPageById(pageId)
        .then(function (page) {
            var tempWidget = page.widgets[start];
            page.widgets.splice(start, 1);
            page.widgets.splice(end, 0, tempWidget);
            return pageModel
                .update({_id: pageId},
                    {$set: page});
        })
}

function deleteWidget(pageId, widgetId) {
    return widgetModel
        .remove({_id: widgetId})
        .then(function (status) {
            return pageModel.removeWidget(pageId, widgetId)
        });
}

function updateWidget(widgetId, widget) {
    return widgetModel.update({_id: widgetId},
        {$set: widget});

}

function createWidget(pageId, widget) {
    widget._page = pageId;
    var widgetReturn = null;
    return widgetModel
        .create(widget)
        .then(function (widgetDoc) {
            widgetReturn = widgetDoc;
            return pageModel.addWidget(pageId, widgetDoc._id);
        })
        .then(function (pageDoc) {
            return widgetReturn;
        })
}

function findAllWidgetsForPage(pageId) {
    return pageModel.getAllWidgetsForPage(pageId)
    //return widgetModel.find({_page: pageId});
}

function findWidgetById(widgetId) {
    return widgetModel.findById(widgetId);
}