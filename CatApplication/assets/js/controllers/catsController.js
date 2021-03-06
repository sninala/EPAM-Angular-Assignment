(function () {
    "use strict";
    var CatsController = function ($filter, $cookies, CatsService) {
        var vm = this, cats;
        vm.selectedCat = null;
        vm.selectedOrder = 'name';
        cats = CatsService.getCats();
        vm.cats = cats;

        vm.incrementClickCount = function (cat) {
            var count = cat.clicks++;
            $cookies.put(cat.name, count);
  
        }
        vm.selectCat = function (cat) {
            vm.selectedCat = cat;
            vm.selectedCat.isVisited = true;
            var clickCount = $cookies.get(cat.name);
            if(clickCount) {
                vm.selectCat.clicks = clickCount;
            }
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