/**
 * Notes Controllers
 */
var notesCtrl = app.controller('editNotesController', function($rootScope, $scope, $http, $anchorScroll, $location, jStore, $routeParams) {
	$scope.editedNote = null;
	$scope.editNotesInit = function() {
		if($routeParams.noteId) {
			$scope.getNoteInfo();
		} else {
			$scope.editedNote = {};
		}
	};
	$scope.getNoteInfo = function() {
		var invocationDataNotes = {
				adapter : 'notes',
				procedure : 'getNote',
				parameters : [$routeParams.noteId]
			};
		WL.Client.invokeProcedure(invocationDataNotes, {
			onSuccess : $scope.searchNoteSuccess,
			onFailure : $scope.searchNoteFailure,
		});
	};
	
	$scope.searchNoteSuccess = function(result) {
		// console.log(result);
		var httpStatusCode = result.status;
		if (200 == httpStatusCode) {
			var invocationResult = result.invocationResult;
			var isSuccessful = invocationResult.isSuccessful;
			if (true == isSuccessful) {
				$scope.editedNote = invocationResult;
				$scope.$apply();
			} else {
				alert("isSuccessful == false !");
			}
		} else {
			alert("Error. httpStatusCode=" + httpStatusCode);
		}
	};
	
	$scope.searchNoteFailure = function(result) {
		alert("Error. result=" + result);
	};

	$scope.backNote = function(result) {
		$location.path('/notes');
	};
	
	$scope.modifyNote = function(result) {
		saveScopedNote();
	};
	
	$scope.deleteNote = function(result) {
		var theNoteId = $scope.editedNote.noteId;
		var invocationDataNotes = {
				adapter : 'notes',
				procedure : 'deleteNote',
				parameters : [theNoteId]
			};
		WL.Client.invokeProcedure(invocationDataNotes, {
			onSuccess : function(result) {
				$location.path('/notes');
			},
			onFailure : $scope.searchNoteFailure
		});
	};
	
	saveScopedNote = function() {
		var theNoteFiltered = {};
		theNoteFiltered.dateModif = new Date();
		theNoteFiltered.dateAutoPurge = $scope.editedNote.dateAutoPurge?$scope.editedNote.dateAutoPurge:new Date();
		theNoteFiltered.badge = $scope.editedNote.badge?$scope.editedNote.badge:'a14100';
		theNoteFiltered.texte = $scope.editedNote.texte;
		theNoteFiltered.noteId = $scope.editedNote.noteId?$scope.editedNote.noteId:null;
		theNoteFiltered.dateCreation = $scope.editedNote.dateCreation?$scope.editedNote.dateCreation:new Date();
		var invocationDataNotes = {
				adapter : 'notes',
				procedure : 'updateNote',
				parameters : [theNoteFiltered]
			};
		WL.Client.invokeProcedure(invocationDataNotes, {
			onSuccess : function(result) {
//				setTimeout(function () {
					$location.path('/notes');
//				}, 1000); 
			},
			onFailure : $scope.searchNoteFailure
		});		
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