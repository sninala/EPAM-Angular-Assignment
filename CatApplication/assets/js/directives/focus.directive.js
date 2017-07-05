(function(){
    angular.module('catsApp').directive('focus', function () {
        return {
            scope: {},
            restrict: 'A',
            link: function (scope, element, attrs) {
                element[0].focus();
            }
        };
    });

}())