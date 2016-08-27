angular.module('centralemap').controller('MapController',
  [ '$scope',
    '$http',
    '$cordovaGeolocation',
    '$stateParams',
    '$ionicModal',
    '$ionicPopup',
    'LocationsService',
    'InstructionsService',
    'DatasService',
    'leafletData',
    function(
      $scope,
      $http,
      $cordovaGeolocation,
      $stateParams,
      $ionicModal,
      $ionicPopup,
      LocationsService,
      InstructionsService,
      DatasService,
      leafletData
      ) {

      /**
       * Affichage de la carte lorsque que le "state" est chargé
       */
      $scope.$on("$stateChangeSuccess", function() {

        $scope.locations = LocationsService.savedLocations;
   
        $scope.map = {
         defaults: {
            scrollWheelZoom: false,
        },
          markers : {},
          events: {
            map: {
              enable: ['context'],
              logic: 'emit'
            }
          }
        };

        $scope.legend = {
          position: 'bottomleft',
          colors: [ 'blue', 'red', 'orange', '#5EB6DD', 'green' ],
          labels: [ 'Résidence', 'Vie Etudiante', 'Administration', 'Cours', 'Labo' ]
        };

            $scope.goTo(0);
      });

      var Location = function() {
        if ( !(this instanceof Location) ) return new Location();
        this.lat  = "";
        this.lng  = "";
        this.name = "";
      };

      $ionicModal.fromTemplateUrl('templates/infos.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
          $scope.modal = modal;
        });

      
      /**
       * Center map on specific saved location
       * @param locationKey
       */
      $scope.goTo = function(locationKey) {

        var location = LocationsService.savedLocations[locationKey];

        $scope.map.center  = {
          lat : location.lat,
          lng : location.lng,
          zoom : 17
        };

        $scope.map.markers[locationKey] = {
          lat:location.lat,
          lng:location.lng,
          message: location.name,
          focus: true,
          draggable: false
        };

        // On accède directement à la carte pour l'adapter au comportement souhaité
        leafletData.getMap().then(function(map) {
                    if (map.getCenter().lat==45.78317 && map.getCenter().lng==4.768796){
                      var tiles = L.tileLayer('https://{s}.tiles.mapbox.com/v4/kaboo.ldhppc1f/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoia2Fib28iLCJhIjoiOERJTVJtOCJ9.pYm3T_TXaBGA27TeXpV0uQ',{attribution:"Central'Map by ÉCLAIR"});
                    }
                    else{
                      var tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',{attribution:"Central'Map by ÉCLAIR"});
                    }
                    tiles.addTo(map);
                    //FONCTIONS POUR LE HOVER EN GRIS
                    function highlightFeature(e) {
                      var layer = e.target;
                      layer.setStyle({
                        weight: 5,
                        color: '#666',
                        dashArray: '',
                        fillOpacity: 0.7
                      });
                    if (!L.Browser.ie && !L.Browser.opera) {
                      layer.bringToFront();
                    }
                    
                    updateInfos(layer.feature.properties);
                  }

                  function resetHighlight(e) {
                    geojson.resetStyle(e.target);
                  }

                  function onEachFeature(feature, layer) {
                    layer.on({
                      click: highlightFeature,
                      mouseout: resetHighlight
                    });
                  }
                //ajout du geoJSON des formes
                 geojson =L.geoJson(CentraleBat, {
                  style: function(feature) {switch (feature.properties.type) {
                    case '?':               return {color: "red"};
                    case 'Résidence':       return {color: "blue"};
                    case 'Administration':  return {color: "orange"};
                    case 'Labo':            return {color: "green"};
                    case 'Cours':           return {color: "#5EB6DD"};
                    case 'Vie Etudiante':   return {color: "red"};
                  }},
                  onEachFeature: onEachFeature
                }).addTo(map);

                 //ajout du geoJSON des polylines
                  function onEachFeature2 (feature, layer) {
                    layer.setText(feature.properties.contenu,{attributes:{fill:'black'}});
                  };
                  geopoly = L.geoJson(CentralePoly, {
                    style: function(feature) {
                      return {opacity: "0"};
                    },
                    onEachFeature:onEachFeature2}).addTo(map);
                 
                  //Ajout du popup d'information
                  updateInfos = function (props) {
                    $scope.modal.show();
                    $scope.nomBatiment = props.name;
                    $scope.image = props.img_link;
                    $scope.type = props.type;
                    $scope.descriptif = props.descriptif;
                    $scope.personnes = props.personnes;
                    $scope.salles = props.salles;
                  };
                  
          });
      };

      /**
       * Localisation du user avec cordovaGeolocation
       * Center map on user's current position
       */
      $scope.locate = function(){
        $cordovaGeolocation
          .getCurrentPosition()
          .then(function (position) {
            $scope.map.center.lat  = position.coords.latitude;
            $scope.map.center.lng = position.coords.longitude;
            $scope.map.center.zoom = 10;

            $scope.map.markers.now = {
              lat:position.coords.latitude,
              lng:position.coords.longitude,
              message: "Vous êtes ici",
              focus: true,
              draggable: false
            };

          }, function(err) {
            // error
            console.log("Location error!");
            console.log(err);
          });
      };
  }]);

