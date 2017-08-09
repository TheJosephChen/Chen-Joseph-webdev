var mongoose = require("mongoose");
var pageSchema = require("./page.schema.server");
var pageModel = mongoose.model("PageModel", pageSchema);
var websiteModel = require("../website/website.model.server");

pageModel.createPage = createPage;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;
pageModel.findPageById = findPageById;
module.exports = pageModel;


function createPage(websiteId, page) {
    page._website = websiteId;
    var pageReturn = null;
    return pageModel
        .create(page)
        .then(function (pageDoc) {
            pageReturn = pageDoc;
            return websiteModel.addPage(websiteId, pageDoc._id);
        })
        .then(function (websiteDoc) {
            return pageReturn;
        })
}

function findAllPagesForWebsite(websiteId) {
    return pageModel.find({_website: websiteId});
}

function findPageById(pageId) {
    return pageModel.findById(pageId);
}