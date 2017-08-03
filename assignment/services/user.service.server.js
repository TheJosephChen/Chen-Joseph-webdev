var app = require("../../express");

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
    user._id = (new Date()).getTime() + "";
    users.push(user);
    response.send(user);
}

function deleteUser(req, response) {
    var userId = req.params.userId;

    var userIndex;
    for (var u in users) {
        if (users[u]._id === userId) {
            userIndex = u;
            users.splice(userIndex, 1);
            response.sendStatus(200);
            return;
        }
    }
    response.sendStatus(404);
}

function getAllUsers(req, response) {
    response.send(users);
}

function getUserById(req, response) {
    for (var u in users) {
        if (users[u]._id === req.params.userId) {
            response.send(users[u]);
        }
    }
}

function findUser(req, response) {
    var username = req.query.username;
    var password = req.query.password;
    if (username && password) {
        for (var u in users) {
            var _user = users[u];
            if (_user.username === username && _user.password === password) {
                response.send(_user);
                return;
            }
        }
    } else {
        for (var u in users) {
            var _user = users[u];
            if (_user.username === username) {
                response.send(_user);
                return;
            }
        }
    }
    response.send("0");
}

function updateUser(req, response) {
    var userId = req.params.userId;
    var user = req.body;

    for (var u in users) {
        if (users[u]._id === userId) {
            users[u] = user;
            response.send(user);
            return;
        }
    }
    response.sendStatus(404);
}