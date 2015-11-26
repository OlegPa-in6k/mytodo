'use strict';

angular.module('Zoo', [])
.controller('AnimalsList', ['$scope', function($scope, $interval) {

     $scope.animals = new Zoo();

     $scope.kill = function(animal) {
       $scope.animals.removeAnimal(animal);
     }

     $scope.addAnimal = function(animal){
       $scope.animals.addAnimal(angular.copy(animal));
     }


}]);
