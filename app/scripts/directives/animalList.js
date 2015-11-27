'use strict';
appZoo.directive('animalList', function() {

    return {
    restruct : 'E',
    templateUrl:"views/animalList.html",
    link: function(scope){
      scope.animalArr = scope.animals.getAnimals();
    }
    };

});
