/**
 * Notes Controllers
 */
var notesCtrl = app.controller('notesController', function($rootScope, $scope, $http, $anchorScroll, $location, jStore) {
	$scope.listnotes = null;
	$scope.notesInit = function() {
		$scope.getNotesInfo();
	};
	$scope.getNotesInfo = function() {
		var invocationDataNotes = {
				adapter : 'notes',
				procedure : 'getNotes',
				parameters : ['0','100']
			};
		WL.Client.invokeProcedure(invocationDataNotes, {
			onSuccess : $scope.searchNotesSuccess,
			onFailure : $scope.searchNotesFailure,
		});
	};
	
	$scope.searchNotesSuccess = function(result) {
		// console.log(result);
		var httpStatusCode = result.status;
		if (200 == httpStatusCode) {
			var invocationResult = result.invocationResult;
			var isSuccessful = invocationResult.isSuccessful;
			if (true == isSuccessful) {
				$scope.listnotes = invocationResult.content;
				$scope.$apply();
			} else {
				alert("isSuccessful == false !");
			}
		} else {
			alert("Error. httpStatusCode=" + httpStatusCode);
		}
	};
	
	$scope.searchNotesFailure = function(result) {
		alert("Error. result=" + result);
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