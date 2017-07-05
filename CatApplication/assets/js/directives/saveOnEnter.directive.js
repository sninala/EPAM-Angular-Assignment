(function () {
    angular.module('catsApp').directive('saveOnEnter', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.bind("keydown keypress", function (event)  {
                    var code = event.keyCode || event.which;
                    console.log(code);
                    if (code === 13) {
                        scope.$apply(function () {
                            scope.$eval(attrs.saveOnEnter);
                        });
                    }
                });
            }
        };
    });

}())