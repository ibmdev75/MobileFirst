/**
 * Store Controller
 */
var storeCtrl = app.controller('storeController', function($rootScope, $scope, $http, $anchorScroll, $location, jStore) {
	var collectionName = "lireInformationsPersonneRetour";
	$scope.store = null;
	$scope.init = function() {
	};
	$scope.getStore = function() {
		console.log("Get All Store");
		var promise = jStore.getAll(collectionName);
		promise.then(function(data) {
			$scope.store = data;
			$scope.$apply;
		}, function(reason) {
			alert('Failed: ' + reason);
		});
	}
});
