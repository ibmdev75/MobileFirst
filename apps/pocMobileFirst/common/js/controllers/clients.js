/**
 * Clients Controllers
 */
var clientCtrl = app.controller('clientController', function($rootScope, $scope, $http, $anchorScroll, $location, jStore) {
	var collectionName = "lireInformationsPersonneRetour";
	$scope.InfoClient = {}
	$scope.init = function() {
		// ===== DEMO : Load a list of clients for demo
		var url = "./demo/dossiers.json";
		$http.get(url).success(function(data, status, headers, config) {
			$scope.demoData = data.refData;
			$scope.nbCas = data.refData.length;
		}).error(function(data, status, headers, config) {
			alert("Erreur de chargement du référentiel");
		});
	};
	$scope.searchExec = function(idClient) {
		console.log("Read Data for id:", idClient);
		var invocationDataCli = {
			adapter : 'Soap_Personne',
			procedure : 'DonneesClientServiceImplService_lireInformationsPersonne',
			parameters : [{
				'lireInformationsPersonne' : {
					'critereLireInformationsPersonne' : {
						'noSocietaire' : idClient,
						'noSIRET' : null,
						'noGRC' : null,
						'cdCanalAcces' : '0'
					}
				}
			}]
		};
		var invocationDataCtn = {
			adapter : 'Soap_Contrat',
			procedure : 'ProductionServiceImplService_rechercherContrats',
			parameters : [{
				'rechercherContrats' : {
					'critereRechercherContrats' : {
						'noSocietaire' : idClient,
						'noSiren' : null,
						'typContrat' : null,
						'listeCodeBranche' : null,
						'cdEtat' : null,
						'dureeAncienneteResil' : null,
						'UniteAncienneteResil' : null,
						'cdCanalAcces' : null,
						'codesSociete' : null,
						'nbAnneesSC' : null
					},
					'criterePagination' : {
						'nbItem' : 50,
						'noPage' : 1,
						'critereTri' : ''
					}
				}
			}]
		};
		WL.Client.invokeProcedure(invocationDataCli, {
			onSuccess : $scope.searchClientSuccess,
			onFailure : $scope.searchClientFailure,
		});
		WL.Client.invokeProcedure(invocationDataCtn, {
			onSuccess : $scope.searchContratSuccess,
			onFailure : $scope.searchContratFailure,
		});
	}
	$scope.searchClientSuccess = function(result) {
		// console.log(result);
		var httpStatusCode = result.status;
		if (200 == httpStatusCode) {
			var invocationResult = result.invocationResult;
			var isSuccessful = invocationResult.isSuccessful;
			if (true == isSuccessful) {
				$scope.infoClient = invocationResult.Envelope.Body.lireInformationsPersonneResponse.lireInformationsPersonneRetour;
				$scope.$apply();
				console.log($scope.infoClient);
				// ===== Gestion du store local=====
				var key = "personne.noGRC";
				var nGrc = $scope.infoClient.personne.noGRC;
				console.log("JSONSTORE - Add/Update noGrc=", nGrc);
				var queryPart1 = WL.JSONStore.QueryPart().equal(key, nGrc);
				var options = {};
				WL.JSONStore.get(collectionName).advancedFind([queryPart1], options).then(function(arrayResults) {
					console.log("JSONSTORE - Return :", arrayResults);
					if (arrayResults.length > 0) {
						// Update info in Json Store
						console.log("JSONSTORE - Update with id:", arrayResults[0]._id)
						var docs = [{
							_id : arrayResults[0]._id,
							json : $scope.infoClient
						}];
						WL.JSONStore.get(collectionName).replace(docs, {}).then(function(numberOfDocumentsReplaced) {
						});
					} else {
						// add info in JsonSTore
						console.log("JSONSTORE - Add info");
						WL.JSONStore.get(collectionName).add($scope.infoClient);
					}
				}).fail(function(errorObject) {
					// Handle failure.
				});
				// ===== Fin de la gestion du store
				var al = new PNotify({
					title : "Dossier",
					text : "Lecture du client",
					type : 'success'
				});
			} else {
				alert("Error. isSuccessful=" + isSuccessful);
			}
		} else {
			alert("Error. httpStatusCode=" + httpStatusCode);
		}
	};
	$scope.searchContratSuccess = function(result) {
		// console.log(result);
		var httpStatusCode = result.status;
		if (200 == httpStatusCode) {
			var invocationResult = result.invocationResult;
			var isSuccessful = invocationResult.isSuccessful;
			if (true == isSuccessful) {
				$scope.infoContrat = invocationResult.Envelope.Body.rechercherContratsResponse.rechercherContratsRetour;
				$scope.$apply();
				console.log($scope.infoContrat);
				var al = new PNotify({
					title : "Dossier",
					text : "Lecture des contrats terminés",
					type : 'success'
				});
			} else {
				alert("Error. isSuccessful=" + isSuccessful);
			}
		} else {
			alert("Error. httpStatusCode=" + httpStatusCode);
		}
	};
	$scope.searchClientFailure = function(result) {
		alert("searchClientFailure");
	};
	$scope.searchContratFailure = function(result) {
		alert("searchContratFailure");
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