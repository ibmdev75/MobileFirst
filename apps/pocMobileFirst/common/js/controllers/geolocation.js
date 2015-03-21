/** 
 * Geolocalisation IBM Mobile First
**/

var geoLocationCtrl = app.controller('geoLocationController', function($rootScope, $scope, $http) {
	
	$scope._location = {longitude:"",latitude:""};
	$scope._currentDeviceContext = null;
	$scope._options = {enableHighAccuracy: true,timeout: 5000,maximumAge: 0};
	
	// Part 1 : Fonctionnalités basiques de géolocalisation avec IBM Mobile First 
	
	$scope._onLocationSuccess = function(position) {
		$scope._location.longitude = position.coords.longitude;
		$scope._location.latitude = position.coords.latitude;
		$scope._apply();
	}
	$scope._onLocationError - function(error) {
		console.log("Une erreur s'est produite Code :" + error.code);
		$scope.reset();
	}
	
	// Obtenir la position géographique de l'équipement mobile
	
	$scope.getCurrentLocation = function() {
		navigator.geolocation.getCurrentPosition($scope._onLocationSuccess, $scope._onLocationError, $scope._options);
	};
	
	$scope.reset  = function() {
		$scope._location = {longitude:"",latitude:""};
	}
	
	// Part 2 : Fonctionnalités avancées de la géolocalisation avec IBM Mobile First
	// IBM Mobile First 6.0 introduit de nouvelles fonctionnalités en matière de service de localisation
	// Les données collectées à partir des capteurs de l'équipement forment un Device Context
	// Device Context : Location Data (Longitude + Latitude) + WIFI SSID (Service Set Identifier)
	// On peut définir une politique d'acquisition du Device Context : changement de position, connexion ou déconnexion 
	// d'un réseau WIFI, ou encore si on entre ou sort d'une zone géographique définie par avance (Géorepérage).
	
	/** 
	 * Scénario de test N°1  : L'application traque le changement de position de l'équipement et notifie l'utilisateur
	   quand celui-ci se déplace de plus de 100m par rapport à sa position originale (dernier Device Context connu)
	 *
	 * 
	 */
	
	var _triggerCallBack = function() {
		console.log("Votre position a changé de 100 mètres");
		if($scope._currentDeviceContext ==null) {
			$scope._currentDeviceContext = $scope.getDeviceContext();	
		}
		console.log("Distance réelle parcourue : "+$scope._calculateDistance($scope._currentDeviceContext,WL.Device.getContext()) +" mètres");
	}
	
	var _failureCallBack = function() {
		console.log("Le process d'acquisition a échoué");
	}
	
	var _acquisitionPolicy = {Geo : WL.Device.Geo.Profiles.LiveTracking()};
	var _triggers = {Geo :{userMoved:{type : "PositionChange",minChangeDistance : 100,callback:_triggerCallBack}}};
	var _failureOptions = {Geo : _failureCallBack};
	
	
	
	// Méthode affichant le Device Context courant
	
	$scope.getDeviceContext = function() {
		return WL.Device.getContext();
	}
	
	// Méthode calculant la distance entre deux points
	$scope._calculateDistance = function(start,end) {
		var coordinate_start = {"longitude":start.Geo.coords.longitude,"latitude":start.Geo.coords.latitude};
		var coordinate_end = {"longitude":end.Geo.coords.longitude,"latitude":end.Geo.coords.latitude};
		var distance = WL.Geo.getDistanceBetweenCoordinates (coordinate_start, coordinate_end); 
		return distance;
	}
	
	
	// Initialisation de l'application de géolocalisation
	$scope._init = function() {
		WL.Device.startAcquisition(_acquisitionPolicy, _triggers, _failureOptions);	
		
	} 
	
	// Amélioration de la gestion de la méthode apply AngularJS
	$scope._apply  = function() {
		if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
		    $scope.$apply();
		}
	}
	
});