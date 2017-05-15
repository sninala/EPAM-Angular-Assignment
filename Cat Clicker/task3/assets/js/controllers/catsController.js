(function () {
    var CatsController = function () {
        var vm = this;
        vm.selectedCat = null;
        vm.cats = [{
            name: 'First Cat',
            imgSrc: './assets/images/first_cat.jpg',
            clicks: 0
        }, {
            name: 'Second Cat',
            imgSrc: './assets/images/second_cat.jpg',
            clicks: 0
        }, {
            name: 'Third Cat',
            imgSrc: './assets/images/third_cat.jpg',
            clicks: 0
        }, {
            name: 'Fourth Cat',
            imgSrc: './assets/images/fourth_cat.jpg',
            clicks: 0
        }, {
            name: 'Fifth Cat',
            imgSrc: './assets/images/fifth_cat.jpg',
            clicks: 0
        }]

        vm.incrementClickCount = function (cat) {
            cat.clicks++;
        }
        vm.selectCat = function (cat) {
            vm.selectedCat = cat;
        }
    }
    angular.module('catClicker').controller('CatsController', CatsController);

}())