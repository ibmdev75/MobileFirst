/**
 * Controller Template for pcMObileFirts
 */
var xxxxxCtrl = app.controller('xxxxxController', function($rootScope, $scope, $http, $anchorScroll, $location, jStore) {
	$scope.demoData = null;
	$scope.init = function() {
		$scope.search = "fils";
	};
	$scope.getInfo = function() {
		// ===== DEMO : Load a list of clients for demo
		var url = "./demo/dossiers.json";
		$http.get(url).success(function(data, status, headers, config) {
			$scope.demoData = data.refData;
			$scope.nbCas = data.refData.length;
			$scope.search = null;
			// console.log($scope.demoData);
			// $scope.$apply();
		}).error(function(data, status, headers, config) {
			alert("Erreur de chargement des données de démo");
		});
		// ===== DEMO : end
	};
	// ===== Navigation =====
	$scope.gotoAnchor = function(x) {
		var newHash = '' + x;
		if ($location.hash() !== newHash) {
			$location.hash('' + x);
		} else {
			$anchorScroll();
		}
	};
});