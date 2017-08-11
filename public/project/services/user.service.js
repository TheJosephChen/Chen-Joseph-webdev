(function () {
    angular
        .module("duelystApp")
        .factory("userService", userService);

    function userService($http) {

        var api = {
            "findUserByUsernameAndPassword": findUserByUsernameAndPassword,
            "findUserByUsername": findUserByUsername,
            "findUserByID": findUserByID,
            "registerUser": registerUser,
            "updateUser": updateUser,
            "deleteUser": deleteUser,
            "rateUser": rateUser
        };
        return api;

        function registerUser(user) {
            var url = "/api/user";
            return $http.post(url, user);
        }

        function findUserByUsernameAndPassword(username, password) {
            var url = "/api/user?username=" + username + "&password=" + password;
            return $http.get(url);
        }

        function findUserByUsername(username) {
            var url = "/api/user?username=" + username;
            return $http.get(url);
        }

        function findUserByID(userId) {
            return $http.get("/api/user/" + userId);
        }

        function updateUser(userId, user) {
            var url = "/api/user/" + userId;
            return $http.put(url, user);
        }

        function deleteUser(userId) {
            var url = "/api/user/" + userId;
            return $http.delete(url);
        }

        function rateUser(ratingId, message) {
            var url = "/api/user?userId=" + ratingId + "&message=" + message;
            return $http.put(url);
        }

    }
})();