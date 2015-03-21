/**
 * Network Controller
 */
var netCtrl = app.controller('networkController', function($rootScope, $scope, $http, $anchorScroll, $location, SharedState) {
	$scope.info = "";
	$scope.netInfo = "";
	SharedState.initialize($scope, "netStat");
	$scope.setHeartBeatInterval = function(interval) {
		$scope.info = new Date() + "heartbeat interval is set to: " + interval;
		WL.Client.setHeartBeatInterval(interval);
	};
	$scope.disconnect = function() {
		$scope.info = new Date() + " : déconnexion détectée";
		SharedState.turnOff('netStat');
		$scope.$apply();
	};
	$scope.connect = function() {
		$scope.info = new Date() + " : connexion détéctée";
		SharedState.turnOn('netStat');
		$scope.$apply();
	};
	$scope.getNetInfo = function() {
		WL.Device.getNetworkInfo(function(networkInfo) {
			if (Object.keys(networkInfo).length === 0) {
				var al = new PNotify({
					title : "Network",
					text : "Informations non disponible. Verifier le réseau MOBILE",
					type : 'warning'
				});
			} else {
				console.log(networkInfo)
				$scope.netInfo = networkInfo;
			}
		})
	};
});