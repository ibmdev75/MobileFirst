/**
 * 
 */
app.controller('feedController', function($rootScope, $scope, $http, $window, $location, $anchorScroll, $sce) {
	$scope.lstFeeds = {};
	$scope.key = "";
	$scope.curFeed = {};
	$scope.init = function() {}
	$scope.getFeeds = function(search) {
		console.log("Read Data for :", search);
		var invocationDataFeed = {
			adapter: 'feeds',
			procedure: 'getFeeds',
			parameters: [search]
		};
		WL.Client.invokeProcedure(invocationDataFeed, {
			onSuccess: $scope.searchFeedSuccess,
			onFailure: $scope.searchFeedFailure,
		});
	}
	$scope.searchFeedSuccess = function(result) {
		//console.log(result);
		var httpStatusCode = result.status;
		if (200 == httpStatusCode) {
			var invocationResult = result.invocationResult;
			var isSuccessful = invocationResult.isSuccessful;
			if (true == isSuccessful) {
				$scope.lstFeeds = invocationResult.responseData.entries;
				$scope.$apply();
				console.log($scope.lstFeeds);
			} else {
				alert("Error. isSuccessful=" + isSuccessful);
			}
		} else {
			alert("Error. httpStatusCode=" + httpStatusCode);
		}
	};
	$scope.searchFeedFailure = function(result) {
		alert("searchFeedFailure");
	};
	
	$scope.feedSelect = function(item) {
		if (item.url) {
			$scope.curFeed = item;
			$scope.loadFeed = {};
			var invocationDataFeedLoad = {
					adapter: 'feedLoad',
					procedure: 'getFeedLoads',
					parameters: [item.url]
				};
			WL.Client.invokeProcedure(invocationDataFeedLoad, {
				onSuccess: $scope.searchFeedLoadSuccess,
				onFailure: $scope.searchFeedLodFailure,
			});
		}else {
			$scope.goSite(item.link);
		}
	};
	$scope.searchFeedLoadSuccess = function(result) {
		//console.log(result);
		var httpStatusCode = result.status;
		if (200 == httpStatusCode) {
			var invocationResult = result.invocationResult;
			var isSuccessful = invocationResult.isSuccessful;
			if (true == isSuccessful) {
				$scope.loadFeeds = invocationResult.responseData.feed;
				$scope.$apply();
				console.log($scope.loadFeeds);
			} else {
				alert("Error. isSuccessful=" + isSuccessful);
			}
		} else {
			alert("Error. httpStatusCode=" + httpStatusCode);
		}
	};
	$scope.searchFeedLoadFailure = function(result) {
		alert("searchFeedFailure");
	};

	$scope.renderHtml = function(html_code) {
		return $sce.trustAsHtml(unescape(html_code));
	};
	$scope.trustPage = function(page) {
		return $sce.trustAsUrl(page);
	};
	$scope.goSite = function(url) {
		if (url) {
			window.open(url, 'sitePreview');
		}
	};
});