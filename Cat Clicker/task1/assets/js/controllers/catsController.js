(function () {
    var CatsController = function () {
        var vm = this;
        vm.clicks = 0;
        vm.incrementClickCount = function () {
            vm.clicks++;
        }
    }
    angular.module('catClicker').controller('CatsController', CatsController);
}())
