angular.module('centralemap').factory('LocationsService', [ function() {

  var locationsObj = {};

  locationsObj.savedLocations = [
    {
      name : "ECL",
      lat : 45.784064,
      lng : 4.768796,
      zoom : 15
    },
    {
      name : "Ecully Centre, Lyon",
      lat :  45.774657,
      lng : 4.77867,
      zoom : 15
    },
    {
     name : "Place des Terreaux, Lyon",
      lat : 45.767454,
      lng : 4.833310,
      zoom : 15 
    },
  ];

  return locationsObj;

}]);
