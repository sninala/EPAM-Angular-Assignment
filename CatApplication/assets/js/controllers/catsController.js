(function () {
    "use strict";
    var CatsController = function ($filter, CatsService) {
        var vm = this, cats;
        vm.selectedCat = null;
        vm.selectedOrder = 'name';
        cats = CatsService.getCats();
        vm.cats = cats;

        vm.incrementClickCount = function (cat) {
            cat.clicks++;
        }
        vm.selectCat = function (cat) {
            vm.selectedCat = cat;
            vm.selectedCat.isVisited = true;
        }
        vm.searchCats = function () {
            var model = vm.searchText;
            if(model){
                vm.cats = $filter('filter')(cats, { name: model });
            } else{
                vm.cats = CatsService.getCats();
            }
        };
    }
    angular.module('catsApp').controller('CatsController', CatsController);

}())