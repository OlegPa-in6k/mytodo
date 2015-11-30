'use strict';

var appZoo = angular.module('Zoo', []);
appZoo.controller('AnimalsList', ['$scope', '$interval', function($scope, $interval) {

     $scope.animals = new Zoo();

     $scope.kill = function(animal) {
       $scope.animals.removeAnimal(animal);
     }

     $scope.addAnimal = function(animal){
       $scope.animals.addAnimal(angular.copy(animal));
       console.log(angular.copy(animal));
     }
     $scope.feed = function(animal) {
       $scope.animals.feedAnimal(animal);
     }

     $interval(function () {
     $scope.animals.tick();
      }, 1000);

}]);
