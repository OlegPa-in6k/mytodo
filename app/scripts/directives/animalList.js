'use strict';
appZoo.directive('animalList', function() {

    return {
    restruct : 'E',
    templateUrl:"views/animalList.html",
    scope : {
      zoo : "="
    },
    link: function(scope){
      scope.animalArr = scope.zoo.getAnimals();
    }
    };

});
