var mongoose = require("mongoose");
var websiteSchema = require("./website.schema.server");
var websiteModel = mongoose.model("WebsiteModel", websiteSchema);

websiteModel.createWebsite = createWebsite;
websiteModel.findWebsitesByUser = findWebsitesByUser;

module.exports = websiteModel;


function createWebsite(developerId, website) {
    website._developer = developerId;
    return websiteModel.create(website);
}

function findWebsitesByUser(developerId) {
    return websiteModel.find({_developer: developerId});
}