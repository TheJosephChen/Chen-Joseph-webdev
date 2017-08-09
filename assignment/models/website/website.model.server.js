var mongoose = require("mongoose");
var websiteSchema = require("./website.schema.server");
var websiteModel = mongoose.model("WebsiteModel", websiteSchema);
var userModel = require("../user/user.model.server");

websiteModel.createWebsite = createWebsite;
websiteModel.findWebsitesByUser = findWebsitesByUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;
websiteModel.addPage = addPage;
module.exports = websiteModel;

function deleteWebsite(developerId, websiteId) {
    return websiteModel
        .remove({_id: websiteId})
        .then(function (status) {
            return userModel.removeWebsite(developerId, websiteId)
        });
}

function updateWebsite(websiteId, website) {
    return websiteModel.update({_id: websiteId},
        {$set: website});
}

function createWebsite(developerId, website) {
    website._developer = developerId;
    var websiteReturn = null;
    return websiteModel
        .create(website)
        .then(function (websiteDoc) {
            websiteReturn = websiteDoc;
            return userModel.addWebsite(developerId, websiteDoc._id);
        })
        .then(function (userDoc) {
            return websiteReturn;
        })
}

function findWebsitesByUser(developerId) {
    return websiteModel.find({_developer: developerId});
}

function findWebsiteById(websiteId) {
    return websiteModel.findById(websiteId);
}

function addPage(websiteId, pageId) {
    return websiteModel
        .findById(websiteId)
        .then(function (website) {
            website.pages.push(pageId);
            return website.save();
        } );
}