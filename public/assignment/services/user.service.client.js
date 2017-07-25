(function () {
    angular
        .module("WamApp")
        .factory("userService", userService);

    function userService() {

        var users = [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ];

        var api = {
            "findUserByUsernameAndPassword": findUserByUsernameAndPassword,
            "findUserByUsername": findUserByUsername,
            "findUserByID": findUserByID,
            "registerUser": registerUser,
            "updateUser": updateUser,
            "deleteUser": deleteUser
        };
        return api;

        function registerUser(user) {
            user._id = (new Date()).getTime() + "";
            users.push(user);
            return user;
        }

        function findUserByUsernameAndPassword(username, password) {
            for (var u in users) {
                var _user = users[u];
                if (username === _user.username && password === _user.password) {
                    return _user;
                }
            }
            return null;
        }

        function findUserByUsername(username) {
            for (var u in users) {
                var _user = users[u];
                if (username === _user.username) {
                    return _user;
                }
            }
            return null;
        }

        function findUserByID(userId) {
            for (var u in users) {
                if (users[u]._id === userId) {
                    return users[u];
                }
            }
            return null;
        }

        function updateUser(userId, user) {
            for (var u in users) {
                if (users[u]._id === userId) {
                    users[u] = user;
                    return user;
                }
            }
            return null;
        }

        function deleteUser(userId) {
            var userIndex;
            for (var u in users) {
                if (users[u]._id === userId) {
                    userIndex = u;
                    users.splice(userIndex, 1);
                    return userId;
                }
            }
            return null;
        }
    }
})();