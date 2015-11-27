'use strict';
appZoo.directive('addForm', function() {

    return {
    restruct : 'E',
    templateUrl:"views/form.html",
    link: function(scope){
      scope.animalType = scope.animals.getAllTypes();
    }
    };

});
