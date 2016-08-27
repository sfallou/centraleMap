angular.module('centralemap').factory('InstructionsService', [ function() {

  var instructionsObj = {};

  instructionsObj.instructions = {
    newLocations : {
      text : 'Pour ajouter un nouveau Lieu, Appuie long sur la carte',
      seen : false
    }
  };

  return instructionsObj;

}]);