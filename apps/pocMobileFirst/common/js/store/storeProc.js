/**
 * Proc for JSONSTore
 */
'use strict';
angular.module('jStore', []).service('jStore', function($rootScope, $q) {
	this.update = function(collectionName, key, id, data) {
		// Add or Update a JSONStore entries
		var deferred = $q.defer();
		var retValue = {
			'ret' : true,
			'add' : false,
			'modify' : false
		};
		console.log("JSONStore : ", collectionName, key, id, data);
		var queryPart1 = WL.JSONStore.QueryPart().equal(key, id);
		var options={};
		WL.JSONStore.get(collectionName)
			.advancedFind([queryPart1], options)
			.then(function (arrayResults) {
				console.log("Return JSONStore:", arrayResults);	
			})
			.fail(function (errorObject) {
			// Handle failure.
			});
/*		
		console.log("Query:", queryPart1);
		var w = WL.JSONStore.get(collectionName);
		console.log(w);
		w.advancedFind([queryPart1]);
		w.then(function(arrayResults) {
			console.log("Update JSONStore with id:", arrayResults);			
			if (arrayResults !== []) {
				// Update info in Json Store
				console.log("Update JSONStore with id:", arrayResults)
				var docs = [{
					_id : arrayResults[0]._id,
					json : data
				}];
				WL.JSONStore.get(collectionName).replace(docs, {}).then(function(numberOfDocumentsReplaced) {
					retValue.modify = true;
					retValue.add = false;
					retValue.ret = true;
					deferred.resolve(retValue);
				});
			} else {
				// add info in JsonSTore
				console.log("Add info to JSONStore");
				WL.JSONStore.get(collectionName).add(data);
				retValue.modify = false;
				retValue.add = true;
				retValue.ret = true;
				deferred.resolve(retValue);
			}

		});
		w.fail(function(errorObject) {
			// Handle failure.
			alert("ERR : ",errorObject);
		});
*/
	}; // End function update
	// ===== Get all content off the store by collection =====
	this.getAll = function(collectionName) {
		var deferred = $q.defer();
		var query = {};
		var options = {};
		var w = WL.JSONStore.get(collectionName).findAll(options).then(function(arrayResults) {
			// console.log(arrayResults);
			deferred.resolve(arrayResults);
		});
		w.fail(function(errorObject) {
			// Handle failure.
			deferred.reject(errorObject);
		});
		return deferred.promise;
	};// End function getAll
});