/**
 * Login Controller
 */
var loginCtrl = app.controller('loginController', function($rootScope, $scope, $http, $location) {
	// DEMO : Fonction de vérification local de compte - Service à positionner sur
	// le serveur
	var authenticate = function(credentials, callback) {
		if (Object.keys(credentials).length === 0) {
			$rootScope.authenticated = false;
			callback && callback();
		} else {
			$http.get('demo/user.json').success(function(data) {
				$scope.lstUser = data;
				var result = $.grep(data, function(e) {
					return e.username == credentials.username;
				});
				if (result.length > 0) {
					$rootScope.authenticated = true;
					$rootScope.greeting = {
						"name" : result[0].name,
						"content" : "Fonctionnées débloquées"
					};
				} else {
					$rootScope.authenticated = false;
				}
				callback && callback();
			}).error(function() {
				$rootScope.authenticated = false;
				callback && callback();
			});
		}
	}
	$scope.start = function() {
		$scope.credentials = {};
		$scope.lstUser = {};
		$rootScope.authenticated = false;
		$rootScope.greeting = {
			"name" : "",
			"content" : ""
		};
	};
	// ===== Scope functions ======
	$scope.login = function() {
		authenticate($scope.credentials, function() {
			if ($rootScope.authenticated) {
				$location.path("/");
				$scope.error = false;
			} else {
				$location.path("/login");
				$scope.error = true;
			}
		});
	};
	$scope.logout = function() {
		$rootScope.authenticated = false;
		$location.path("/");
		$scope.error = false;
	};
});