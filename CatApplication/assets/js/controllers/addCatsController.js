(function () {
    "use strict";
    var AddCatsController = function (CatsService, $state) {
        var vm = this;
        vm.cats = CatsService.getCats();

        vm.addCat = function (cat) {
            var newCat = {
                name: cat.name,
                imgUrl: cat.url,
                clicks: 0,
                isVisited: false
            };
            CatsService.addCat(newCat);
            vm.updateCatsList();
            $state.go('home');
        }

        vm.updateCatsList = function () {
            vm.cats = CatsService.getCats();
        }

    }
    angular.module('catsApp').controller('AddCatsController', AddCatsController);

}())