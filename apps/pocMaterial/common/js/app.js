/**
 * 
 */
var app = angular.module('StarterApp', [ 'ngMaterial', 'ngRoute', 'ngResource', 'ngTouch', 'ngAnimate','ngMdIcons' ]);
app.config(function($routeProvider, $locationProvider) { 
	// ===== Définition des routes et scope
	$routeProvider.when('/', {
		templateUrl : "views/home.html",
		controller : 'homeCtrl'
	});
	$routeProvider.when('/tabs', {
		templateUrl : "views/tabs.html",
		controller : 'tabsCtrl'
	});
});
app.config(function($mdThemingProvider) {
	$mdThemingProvider.theme('altTheme')
    	.primaryPalette('purple'); 
	$mdThemingProvider.theme('default')
	    .primaryPalette('blue')
	    .accentPalette('orange');
});
app.controller('AppCtrl', function($scope, $timeout, $mdSidenav, $log, $timeout, $mdBottomSheet, $mdToast) {
	$scope.alert = '';
	$scope.data = {
		cb1 : true,
		cb4 : true
	};
	$scope.openToast = function($event, msg) {
		$mdToast.show($mdToast.simple().content(msg));
	};
	$scope.closeLeft = function() {
		$mdSidenav('left').close();
	};
	$scope.closeRight = function() {
		$mdSidenav('right').close();
	};
	$scope.showListBottomSheet = function($event) {
		$scope.alert = '';
		$mdBottomSheet.show({
			templateUrl : 'views/bottom-list.html',
			controller : 'ListBottomSheetCtrl',
			targetEvent : $event
		}).then(function(clickedItem) {
			$scope.alert = clickedItem.name + ' clicked!';
		});
	};
	$scope.showGridBottomSheet = function($event) {
		$scope.alert = '';
		$mdBottomSheet.show({
			templateUrl : 'views/bottom-grid.html',
			controller : 'GridBottomSheetCtrl',
			targetEvent : $event
		}).then(function(clickedItem) {
			$scope.alert = clickedItem.name + ' clicked!';
		});
	};
	$scope.toggleLeft = function() {
		$mdSidenav('left').toggle();
	};
	$scope.toggleRight = function() {
		$mdSidenav('right').toggle();
	};
})
// ===== Barre de Gauche
app.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
	$scope.todos = [ {
		icone : 'home',
		menu : 'Accueil',
		link : '#/'
	},{
		icone : 'tab',
		menu : 'Tabs',
		link : '#/tabs'
	} ];
	$scope.close = function() {
		$mdSidenav('left').close().then(function() {
			$log.debug("close LEFT is done");
		});
	};
})
app.controller('RightCtrl', function($scope, $timeout, $mdSidenav, $log) {
	$scope.close = function() {
		$mdSidenav('right').close().then(function() {
			$log.debug("close RIGHT is done");
		});
	};
});
app.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
	$scope.items = [ {
		name : 'Share',
		icon : 'share'
	}, {
		name : 'Upload',
		icon : 'upload'
	}, {
		name : 'Copy',
		icon : 'copy'
	}, {
		name : 'Print this page',
		icon : 'print'
	}, ];
	$scope.listItemClick = function($index) {
		var clickedItem = $scope.items[$index];
		$mdBottomSheet.hide(clickedItem);
	};
});
app.controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet) {
	$scope.items = [ {
		name : 'Hangout',
		icon : 'hangout'
	}, {
		name : 'Mail',
		icon : 'mail'
	}, {
		name : 'Message',
		icon : 'message'
	}, {
		name : 'Copy',
		icon : 'copy'
	}, {
		name : 'Facebook',
		icon : 'facebook'
	}, {
		name : 'Twitter',
		icon : 'twitter'
	}, ];
	$scope.listItemClick = function($index) {
		var clickedItem = $scope.items[$index];
		$mdBottomSheet.hide(clickedItem);
	};
});
app.controller('homeCtrl', function($scope, $timeout,$q) {
	var self = this;
  // list of `state` value/display objects
  self.states        = loadAll();
  self.selectedItem  = null;
  self.searchText    = null;
  self.querySearch   = querySearch;
  self.simulateQuery = false;
  self.isDisabled    = false;
  // ******************************
  // Internal methods
  // ******************************
  /**
   * Search for states... use $timeout to simulate
   * remote dataservice call.
   */
  function querySearch (query) {
    var results = query ? self.states.filter( createFilterFor(query) ) : [],
        deferred;
    if (self.simulateQuery) {
      deferred = $q.defer();
      $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      return deferred.promise;
    } else {
      return results;
    }
  }
  /**
   * Build `states` list of key/value pairs
   */
  function loadAll() {
    var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';
    return allStates.split(/, +/g).map( function (state) {
        return {
          value: state.toLowerCase(),
          display: state
        };
    });
  }
  /**
   * Create filter function for a query string
   */
  function createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);
    return function filterFn(state) {
      return (state.value.indexOf(lowercaseQuery) === 0);
    };
  }
});
app.controller('tabsCtrl', function($scope, $timeout) {
	var tabs = [{
		title: 'One',
		content: "Tabs will become paginated if there isn't enough room for them."
	}, {
		title: 'Two',
		content: "You can swipe left and right on a mobile device to change tabs."
	}, {
		title: 'Three',
		content: "You can bind the selected tab via the selected attribute on the md-tabs element."
	}, {
		title: 'Four',
		content: "If you set the selected tab binding to -1, it will leave no tab selected."
	}, {
		title: 'Five',
		content: "If you remove a tab, it will try to select a new one."
	}, {
		title: 'Six',
		content: "There's an ink bar that follows the selected tab, you can turn it off if you want."
	}, {
		title: 'Seven',
		content: "If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab."
	}, {
		title: 'Eight',
		content: "If you look at the source, you're using tabs to look at a demo for tabs. Recursion!"
	}, {
		title: 'Nine',
		content: "If you set md-theme=\"green\" on the md-tabs element, you'll get green tabs."
	}, {
		title: 'Ten',
		content: "If you're still reading this, you should just go check out the API docs for tabs!"
	}];
	$scope.tabs = tabs;
	$scope.selectedIndex = 2;
	$scope.announceSelected = announceSelected;
	$scope.announceDeselected = announceDeselected;
	$scope.addTab = function(title, view) {
		view = view || title + " Content View";
		tabs.push({
			title: title,
			content: view,
			disabled: false
		});
	};
	$scope.removeTab = function(tab) {
		for (var j = 0; j < tabs.length; j++) {
			if (tab.title == tabs[j].title) {
				$scope.tabs.splice(j, 1);
				break;
			}
		}
	};

	function announceDeselected(tab) {
		$scope.farewell = 'Goodbye ' + tab.title + '!';
	}

	function announceSelected(tab) {
		$scope.greeting = 'Hello ' + tab.title + '!';
	}
});