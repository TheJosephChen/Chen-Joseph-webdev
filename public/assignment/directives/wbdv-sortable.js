(function () {
    angular
        .module("myDirective", [])
        .directive("itemList", itemListDirective);

    function itemListDirective() {
        function linkFunction(scope, element) {
            var ul = element.find("ul");
            var startIndex = -1;
            var endIndex = -1;
            ul.sortable({
                start: function (event, ui) {
                    startIndex = $(ui.item).index();
                },
                stop: function (event, ui) {
                    endIndex = $(ui.item).index();
                    console.log(startIndex + " " + endIndex);
                    $http.put("/page/:pageId/widget?initial=" + startIndex + "&final=" + endIndex);
                }
            });
        }
        return {
            templateUrl: "../views/widget/templates/widget-list.view.client.html",
            link: linkFunction
        }
    }

})();