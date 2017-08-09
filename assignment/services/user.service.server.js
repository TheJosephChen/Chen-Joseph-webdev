var app = require("../../express");
var userModel = require("../models/user.model.server");

var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
];

// html handlers
app.get("/api/users", getAllUsers);
app.get("/api/user/:userId", getUserById);
app.get("/api/user", findUser);
app.post("/api/user", registerUser);
app.put("/api/user/:userId", updateUser);
app.delete("/api/user/:userId", deleteUser);

function registerUser(req, response) {
    var user = req.body;
    userModel
        .createUser(user)
        .then(function (user) {
            response.json(user);
        })
    // user._id = (new Date()).getTime() + "";
    // users.push(user);
    // response.send(user);
}

function deleteUser(req, response) {
    var userId = req.params.userId;

    userModel
        .deleteUser(userId)
        .then(function (status) {
            response.json(status);
        }, function (err) {
            response.sendStatus(404).send(err);
        });

    // var userIndex;
    // for (var u in users) {
    //     if (users[u]._id === userId) {
    //         userIndex = u;
    //         users.splice(userIndex, 1);
    //         response.sendStatus(200);
    //         return;
    //     }
    // }
    // response.sendStatus(404);
}

function getAllUsers(req, response) {
    response.send(users);
}

function getUserById(req, response) {
    userModel
        .findUserById(req.params.userId)
        .then(function (user) {
            response.json(user);
        })
    // for (var u in users) {
    //     if (users[u]._id === req.params.userId) {
    //         response.send(users[u]);
    //     }
    // }
}

function findUser(req, response) {
    var username = req.query.username;
    var password = req.query.password;
    if (username && password) {
        userModel
            .findUserByCredentials(username, password)
            .then(function (user) {
                response.json(user);
                return;
            }, function (err) {
                response.sendStatus(404).send(err);
                return;
            })
        return;
        // for (var u in users) {
        //     var _user = users[u];
        //     if (_user.username === username && _user.password === password) {
        //         response.send(_user);
        //         return;
        //     }
        // }
    } else {
        userModel
            .findUserByUsername(username)
            .then(function (user) {
                response.json(user);
                return;
            }, function (err) {
                response.sendStatus(404).send(err);
                return;
            })
        return;
        //     for (var u in users) {
        //         var _user = users[u];
        //         if (_user.username === username) {
        //             response.send(_user);
        //             return;
        //         }
        //     }
        // }
    }
    response.send("0");
}

function updateUser(req, response) {
    var userId = req.params.userId;
    var user = req.body;

    userModel
        .updateUser(userId, user)
        .then(function (status) {
            response.json(status);
        }, function (err) {
           response.sendStatus(404).send(err);
        });
    //
    // for (var u in users) {
    //     if (users[u]._id === userId) {
    //         users[u] = user;
    //         response.send(user);
    //         return;
    //     }
    // }
    // response.sendStatus(404);
}