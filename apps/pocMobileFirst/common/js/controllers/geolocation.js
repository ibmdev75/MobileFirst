/** 
 * Geocoding, transforme une addresse en longitude et latitude 
 * Reverse geocoding réalise la transformation inverse
**/

var geoLocationCtrl = app.controller('geoLocationController', function($rootScope, $scope, $http) {
	
	$scope._location = {longitude:"",latitude:""};
	$scope._options = {enableHighAccuracy: true,timeout: 5000,maximumAge: 0};
	
	// Fonctionnalités basiques IBM Mobile First 
	
	$scope._onLocationSuccess = function(position) {
		$scope._location.longitude = position.coords.longitude;
		$scope._location.latitude = position.coords.latitude;
	}
	$scope._onLocationError - function(error) {
		console.log("Une erreur s'est produite Code :" + error.code);
	}
	
	// Obtenir la position géographique de l'équipement mobile

	$scope.getCurrentLocation = function() {
		navigator.geolocation.getCurrentPosition($scope._onLocationSuccess, $scope._onLocationError, $scope._options);
	};
	
	$scope.reset  = function() {
		$scope._location = {longitude:"",latitude:""};
	}
	
	
	
});