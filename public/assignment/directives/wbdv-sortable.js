(function () {
    angular
        .module("myDirective", [])
        .directive("itemList", itemListDirective);

    function itemListDirective() {
        function linkFunction(scope, element) {

            var sortableDiv = element.find("sortableDiv");

            sortableDiv.sortable();
        }
        return {
            templateUrl: "views/widget/templates/widget-list.items.client.html",
            link: linkFunction
        }
    }

})();