(function () {
    angular
        .module("WamApp")
        .controller("editWidgetController", editWidgetController);

    function editWidgetController($routeParams, widgetService, $location) {
        var model = this;

        model.userId = $routeParams.userId;
        model.websiteId = $routeParams.websiteId;
        model.pageId = $routeParams.pageId;
        model.widgetId = $routeParams.widgetId;

        model.unCreate = unCreate;
        model.updateWidget = updateWidget;

        function init() {
            model.widget = widgetService.findWidgetById(model.widgetId);
        }
        init();

        function unCreate(escapeTo) {
            widgetService.deleteWidget(model.widgetId);
            if (escapeTo === "profile") {
                $location.url("/profile/" + model.userId);
            } else {
                $location.url("/user/" + model.userId + "/website/" + model.websiteId + "/page/" + model.pageId + "/widget");
            }

        }

        function updateWidget(widget) {
            widgetService.updateWidget(widget._id, widget);
            $location.url("/user/" + model.userId + "/website/" + model.websiteId + "/page/" + model.pageId + "/widget");
        }


    }
})();