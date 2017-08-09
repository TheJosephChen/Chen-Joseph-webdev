var mongoose = require("mongoose");
var userSchema = require("./user.schema.server");
var userModel = mongoose.model("UserModel", userSchema);
userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.updateUser = updateUser;
userModel.findUserByCredentials = findUserByCredentials;
userModel.findUserByUsername = findUserByUsername;
userModel.addWebsite = addWebsite;
userModel.deleteUser = deleteUser;
userModel.removeWebsite = removeWebsite;
module.exports = userModel;

function removeWebsite(developerId, websiteId) {
    return userModel
        .findById(developerId)
        .then(function (user) {
            var index = user.websites.indexOf(websiteId);
            user.websites.splice(index, 1);
            return user.save();
        })
}

function deleteUser(userId) {
    return userModel
        .remove({_id: userId})
        .then(function (status) {
            return status;
        });
}

function findUserByUsername(username) {
    // findOne returns null if DOC not found
    return userModel.findOne({username: username});
}

function findUserByCredentials(username, password) {
    // findOne returns null if DOC not found
    return userModel.findOne({username: username, password: password});
}

function updateUser(userId, user) {
    return userModel.update({_id: userId},
        {$set: user});
}

function createUser(user) {
    return userModel.create(user);
}

function findUserById(userId) {
    return userModel.findById(userId);
}

function addWebsite(developerId, websiteId) {
    return userModel
        .findById(developerId)
        .then(function (user) {
            user.websites.push(websiteId);
            return user.save();
        } );
}