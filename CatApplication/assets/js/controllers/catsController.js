(function () {
    var CatsController = function ($filter) {
        var vm = this, cats;
        vm.selectedCat = null;
        vm.selectedOrder = 'name';
        cats = [{
            name: 'First Cat',
            imgUrl: './assets/images/first_cat.jpg',
            clicks: 0,
            isVisited: false
        }, {
            name: 'Second Cat',
            imgUrl: './assets/images/second_cat.jpg',
            clicks: 0,
            isVisited: false
        }, {
            name: 'Third Cat',
            imgUrl: './assets/images/third_cat.jpg',
            clicks: 0,
            isVisited: false
        }, {
            name: 'Fourth Cat',
            imgUrl: './assets/images/fourth_cat.jpg',
            clicks: 0,
            isVisited: false
        }, {
            name: 'Fifth Cat',
            imgUrl: './assets/images/fifth_cat.jpg',
            clicks: 0,
            isVisited: false
        }]
        
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
            vm.cats = $filter('filter')(cats, { name: model });
        };
    }
    angular.module('catsApp').controller('CatsController', CatsController);

}())