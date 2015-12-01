'use strict';
appZoo.directive('addForm', function() {

    return {
    restruct : 'E',
    templateUrl:"views/form.html",
    scope : {
      zoo : "="
    },
    link: function(scope){
      scope.animalType = scope.zoo.getAllTypes();
    }
    };

});
