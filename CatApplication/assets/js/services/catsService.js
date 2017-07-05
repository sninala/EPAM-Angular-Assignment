(function(){
    "use strict";
    var CatsService = function($http, $q){
        var cats = [{
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
        }];
        var factory = {};
        factory.getCats = function(){
            return cats;
        }
        factory.addCat = function(cat){
            cats.push(cat);
        }
        return factory;
    };
    angular.module('catsApp').service('CatsService', CatsService);
}())