'use strict';

var appZoo = angular.module('Zoo', []);
appZoo.controller('AnimalsList', ['$scope', '$interval', function($scope, $interval) {

     $scope.zoo = new Zoo();

     $scope.kill = function(animal) {
       $scope.zoo.removeAnimal(animal);
     }

     $scope.addAnimal = function(animal){
       $scope.zoo.addAnimal(angular.copy(animal));
       console.log(angular.copy(animal));
     }

     $scope.feed = function(animal) {
       $scope.zoo.feedAnimal(animal);
     }

     $interval(function () {
     $scope.zoo.tick();
      }, 1000);

}]);
