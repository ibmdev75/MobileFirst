// 
// Here is how to define your module
// has dependent on mobile-angular-ui
// 
var app = angular.module('pocMF', ['ngRoute','mobile-angular-ui','mobile-angular-ui.gestures','mobile-angular-ui.core.capture','mobile-angular-ui.core.fastclick','angular-loading-bar','jStore']);
// touch/drag feature: this is from 'mobile-angular-ui.gestures.js'
// it is at a very beginning stage, so please be careful if you like to use
// in production. This is intended to provide a flexible, integrated and and
// easy to use alternative to other 3rd party libs like hammer.js, with the
// final pourpose to integrate gestures into default ui interactions like
// opening sidebars, turning switches on/off ..
// 
// You can configure ngRoute as always, but to take advantage of SharedState
// location
// feature (i.e. close sidebar on backbutton) you should setup 'reloadOnSearch:
// false'
// in order to avoid unwanted routing.
//
app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'views/home.html',
		controller : 'demoController',
		reloadOnSearch : false
	});
	$routeProvider.when('/login', {
		templateUrl : 'views/login.html',
		controller : 'loginController',
		reloadOnSearch : false
	});
	$routeProvider.when('/logout', {
		templateUrl : 'views/logout.html',
		controller : 'loginController',
		reloadOnSearch : false
	});
	// ===== pocMF =====================================
	$routeProvider.when('/client', {
		templateUrl : 'views/pocMF/client.html',
		controller : 'clientController',
		reloadOnSearch : false
	});
	$routeProvider.when('/store', {
		templateUrl : 'views/pocMF/store.html',
		controller : 'storeController',
		reloadOnSearch : false
	});
	$routeProvider.when('/network', {
		templateUrl : 'views/pocMF/network.html',
		controller : 'networkController',
		reloadOnSearch : false
	});
	$routeProvider.when('/feed', {
		templateUrl : 'views/pocMF/feed.html',
		controller : 'feedController',
		reloadOnSearch : false
	});
	$routeProvider.when('/notes', {
		templateUrl : 'views/pocMF/notes.html',
		controller : 'notesController',
		reloadOnSearch : false
	});
	$routeProvider.when('/note/:noteId', {
		templateUrl : 'views/pocMF/editNotes.html',
		controller : 'editNotesController',
		reloadOnSearch : false
	});
	$routeProvider.when('/template', {
		templateUrl : 'views/pocMF/template.html',
		controller : 'xxxxxController',
		reloadOnSearch : false
	});
	$routeProvider.when('/geolocation', {
		templateUrl : 'views/pocMF/geoLocation.html',
		controller : 'geoLocationController',
		reloadOnSearch : false
	});
	// ===== DemoUI ================================
	$routeProvider.when('/scroll', {
		templateUrl : 'views/demoUI/scroll.html',
		controller : 'demoController',
		reloadOnSearch : false
	});
	$routeProvider.when('/toggle', {
		templateUrl : 'views/demoUI/toggle.html',
		controller : 'demoController',
		reloadOnSearch : false
	});
	$routeProvider.when('/tabs', {
		templateUrl : 'views/demoUI/tabs.html',
		controller : 'demoController',
		reloadOnSearch : false
	});
	$routeProvider.when('/accordion', {
		templateUrl : 'views/demoUI/accordion.html',
		controller : 'demoController',
		reloadOnSearch : false
	});
	$routeProvider.when('/overlay', {
		templateUrl : 'views/demoUI/overlay.html',
		controller : 'demoController',
		reloadOnSearch : false
	});
	$routeProvider.when('/forms', {
		templateUrl : 'views/demoUI/forms.html',
		controller : 'demoController',
		reloadOnSearch : false
	});
	$routeProvider.when('/dropdown', {
		templateUrl : 'views/demoUI/dropdown.html',
		controller : 'demoController',
		reloadOnSearch : false
	});
	$routeProvider.when('/drag', {
		templateUrl : 'views/demoUI/drag.html',
		controller : 'demoController',
		reloadOnSearch : false
	});
	$routeProvider.when('/carousel', {
		templateUrl : 'views/demoUI/carousel.html',
		controller : 'demoController',
		reloadOnSearch : false
	});
});
// ===== Filters =====
app.filter('lstDate', function() {
	return function(value) {
		var d = new Date(value).toLocaleString()
		console.log(d);
		return $filter('date')(d, 'short');
	};
});
// ==== Default =====
$(document).ready(function() {
	$(document).ajaxSend(function(event, request, settings) {
		$('#loading-indicator').show();
	});
	$(document).ajaxComplete(function(event, request, settings) {
		$('#loading-indicator').hide();
	});
	// ===== PNotify default values
	PNotify.prototype.options.delay = 3000;
	PNotify.prototype.options.animation = 'fade';
	PNotify.prototype.options.opacity = .6;
	// PNotify.prototype.options.addclass = "stack-bottomright";
	// PNotify.prototype.options.stack = stack_bottomright;
});