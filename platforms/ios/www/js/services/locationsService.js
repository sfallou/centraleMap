angular.module('centralemap').factory('LocationsService', [ function() {

  var locationsObj = {};

  locationsObj.savedLocations = [
    {
      name : "ECL",
      lat : 45.78317,
      lng : 4.768796,
      zoom : 15
    },
    {
      name : "Lyon, France",
      lat : 45.75,
      lng : 4.85,
      zoom : 15
    },
    {
      name : "Paris, France",
      lat : 48.864716,
      lng : 2.349014,
      zoom : 15
    },
  ];

  return locationsObj;

}]);
