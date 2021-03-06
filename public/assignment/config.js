(function () {
    angular
        .module("WamApp")
        .config(configuration);

    function configuration($routeProvider, $httpProvider) {

        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

        $routeProvider
            // temporary default route
            .when("/", {
                templateUrl: "views/user/templates/login.view.client.html",
                controller: "loginController",
                controllerAs: "model"})
            // user routes
            .when("/login", {
                templateUrl: "views/user/templates/login.view.client.html",
                controller: "loginController",
                controllerAs: "model"})
            .when("/register", {
                templateUrl: "views/user/templates/register.view.client.html",
                controller: "registerController",
                controllerAs: "model"})
            .when("/profile/:userId", {
                templateUrl: "views/user/templates/profile.view.client.html",
                controller: "profileController",
                controllerAs: "model"})
            // website routes
            .when("/user/:userId/website", {
                templateUrl: "views/website/templates/website-list.view.client.html",
                controller: "websiteListController",
                controllerAs: "model"})
            .when("/user/:userId/website/new", {
                templateUrl: "views/website/templates/website-new.view.client.html",
                controller: "newWebsiteController",
                controllerAs: "model"})
            .when("/user/:userId/website/:websiteId/edit", {
                templateUrl: "views/website/templates/website-edit.view.client.html",
                controller: "editWebsiteController",
                controllerAs: "model"})
            // page routes
            .when("/user/:userId/website/:websiteId/page", {
                templateUrl: "views/page/templates/page-list.view.client.html",
                controller: "pageListController",
	            controllerAs: "model"})
            .when("/user/:userId/website/:websiteId/page/new", {
                templateUrl: "views/page/templates/page-new.view.client.html",
                controller: "newPageController",
                controllerAs: "model"})
            .when("/user/:userId/website/:websiteId/page/:pageId/edit", {
                templateUrl: "views/page/templates/page-edit.view.client.html",
                controller: "editPageController",
                controllerAs: "model"})
            // widget routes
	        .when("/user/:userId/website/:websiteId/page/:pageId/widget", {
                templateUrl: "views/widget/templates/widget-list.view.client.html",
                controller: "widgetListController",
                controllerAs: "model"})
            .when("/user/:userId/website/:websiteId/page/:pageId/widget/new", {
                templateUrl: "views/widget/templates/widget-choose.view.client.html",
                controller: "newWidgetController",
                controllerAs: "model"})
            .when("/user/:userId/website/:websiteId/page/:pageId/widget/:widgetId/edit", {
                templateUrl: "views/widget/templates/widget-edit.view.client.html",
                controller: "editWidgetController",
                controllerAs: "model"})
            .when("/user/:userId/website/:websiteId/page/:pageId/widget/:widgetId/search", {
                templateUrl: "views/widget/templates/widget-flickr-search.view.client.html",
                controller: "flickrController",
                controllerAs: "model"})


    }
})();