(function () {
    angular.module('catsApp').directive('imagePreview', function () {
        return {
            restrict: 'EA',
            templateUrl: './assets/templates/imagePreview.template.html'
        };
    });

}())