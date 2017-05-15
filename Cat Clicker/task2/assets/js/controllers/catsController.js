(function () {
    var CatsController = function () {
        var vm = this;
        vm.cats = [{
            name: 'First Cat',
            imgSrc: './assets/images/first_cat.jpg',
            clicks: 0
        }, {
            name: 'Second Cat',
            imgSrc: './assets/images/second_cat.jpg',
            clicks: 0
        }]

        vm.incrementClickCount = function (cat) {
            cat.clicks++;
        }
    }
    angular.module('catClicker').controller('CatsController', CatsController);

}())