/*
 * Licensed Materials - Property of IBM 5725-I43 (C) Copyright IBM Corp. 2011,
 * 2013. All Rights Reserved. US Government Users Restricted Rights - Use,
 * duplication or disclosure restricted by GSA ADP Schedule Contract with IBM
 * Corp.
 */
/**
 * WL.Server.invokeHttp(parameters) accepts the following json object as an
 * argument: { // Mandatory method : 'get' , 'post', 'delete' , 'put' or 'head'
 * path: value, // Optional returnedContentType: any known mime-type or one of
 * "json", "css", "csv", "plain", "xml", "html" returnedContentEncoding :
 * 'encoding', parameters: {name1: value1, ... }, headers: {name1: value1, ... },
 * cookies: {name1: value1, ... }, body: { contentType: 'text/xml;
 * charset=utf-8' or similar value, content: stringValue }, transformation: {
 * type: 'default', or 'xslFile', xslFile: fileName } }
 */
/**
 * 
 * @returns json list of items
 */
function getFeeds(pQuery) {
	var input = {
		method : 'get',
		returnedContentType : 'json',
		path : 'ajax/services/feed/find',
		parameters : {
			'v' : '1.0',
			'q' : pQuery
		}
	};
	return WL.Server.invokeHttp(input);
}
function addFeed(param1) {
	var input = {
		method : 'put',
		returnedContentType : 'json',
		path : 'userInputRequired'
	};
	return WL.Server.invokeHttp(input);
}
function updateFeed(param1) {
	var input = {
		method : 'post',
		returnedContentType : 'json',
		path : 'userInputRequired'
	};
	return WL.Server.invokeHttp(input);
}
function deleteFeed(param1) {
	var input = {
		method : 'delete',
		returnedContentType : 'json',
		path : 'userInputRequired'
	};
	return WL.Server.invokeHttp(input);
}
/**
 * *******************************************************************************************
 * USSD Sample Code
 * ******************************************************************************************
 */
/*
 * Sample Description This sample illustrates a simple USSD service of a
 * fictitious telecom company "MyCompany Telecom Services" Balance and top up
 * services are the menu options. User selects options 1 or 2 based on whether
 * he/she wants to check balance or top up balance.
 */
/*
 * Run the Sample Since a real USSD gateway is a requirement to run the sample
 * on a mobile phone, here we will show how to run the sample in the web browser
 * by making http rest calls. To start, type this url in a web browser, http://<hostname>:<port>/<contextroot>/ussd?shortCode=123&sessionId=789&phoneNumber=90087659&sessionState=NEW
 * You should get the following response {"RESPONSE_TEXT":"Welcome to MyCompany
 * Telecom USSD Services Press 1. Balance Enquiry 2. Balance Top Up Service"}
 * Next, if you want to select Balance Top Up Service try, http://<hostname>:<port>/<contextroot>/ussd?shortCode=123&sessionId=789&phoneNumber=90087659&input=2
 * The response will be {"RESPONSE_TEXT":"Please enter the amount to top up"} To
 * enter amount of Rs 50 try, http://<hostname>:<port>/<contextroot>/ussd?shortCode=123&sessionId=789&phoneNumber=90087659&input=50
 * The response will be {"RESPONSE_TEXT":"Balance Top Up completed. Your current
 * balance is Rs 150. Thank you for using MyCompany Telecom USSD Service !!!
 * Have a good day !!!"}
 */
/*
 * Code Description There are three blocks below - Application Logic , Gateway
 * Logic, State Machine Logic Application & Gateway logic should be changed
 * based on your application and USSD gateway. The sessionState can be stored in
 * a global variable which will be persisted in the Worklight session
 */
// Global variable to store the state in the session
var sessionState = '';
// Event handler to route the request based on a specific filter, in the sample
// below filter is shortCode 123
WL.Server.setEventHandlers([WL.Server.createUSSDEventHandler({
	'shortCode' : '123'
}, handleUSSDRequest)]);
/*
 * Handler method which is the entry point from the Event Handler. It will get
 * the request object containing headers, parameters and body of the HTTP
 * request coming from the USSD Gateway
 */
function handleUSSDRequest(request) {
	// Call processUSSDRequest to parse the data from the USSD input request
	// object
	var inputObj = gateway.processUSSDRequest(request);
	if (!router.getRoutes()) {
		router.addRoutes(routingRules);
	}
	// This is state machine code which will return the response
	var routerData = router.handleRoute(inputObj.state, inputObj.input, inputObj);
	// From the state machine response prepare the final response based on the
	// gateway format and return
	return gateway.buildUSSDResponse(routerData.nextState, routerData.message, inputObj, routerData.isEnd);
}
/**
 * ************************************** Application Logic - Start
 * ***********************************************
 */
// This part needs to be modified based on you application logic
// Menu transition rules
var routingRules = {
	'init' : ['init','balance','topup'],
	'balance' : ['balance','topup','end'],
	'topup' : ['end']
};
var bl = (function getLogic() {
	var logic = {};
	logic.preinit = function(state, code, options) {
		// Perform processing/call backend to formulate the response
		return {
			"nextState" : state,
			"message" : 'Welcome to MyCompany Telecom  Service.  Press 1. Balance Enquiry 2. Balance Top Up Service',
			"isEnd" : false
		};
	};
	logic.prebalance = function(state, code, options) {
		return {
			"nextState" : state,
			"message" : 'Your current account balance is Rs.100. Press 1. Balance Top Up 2. End',
			"isEnd" : false
		};
	};
	logic.pretopup = function(state, code, options) {
		return {
			"nextState" : state,
			"message" : 'Please enter the amount to top up',
			"isEnd" : false
		};
	};
	logic.posttopup = function(state, code, options) {
		var input = code;
		var bal = 100 + parseInt(input);
		return {
			"nextState" : state,
			"message" : "Balance Top Up completed. Your current balance is Rs " + bal + ". Thank you for using MyCompany Telecom USSD Service !!! Have a good day !!!",
			"isEnd" : true
		};
	};
	logic.postend = function(state, code, options) {
		return {
			"nextState" : state,
			"message" : "Thank you for using MyCompany Telecom Service !!! Have a good day !!!",
			"isEnd" : true
		};
	};
	return logic;
})();
/**
 * ************************************** Application Logic - End
 * ***********************************************
 */
/**
 * ************************************** Gateway Logic - Start
 * ***********************************************
 */
// This part needs to be modified based on the gateway logic
var gateway = (function() {
	var _contentType = 'application/json;charset=UTF-8';
	/*
	 * Common developer method to parse the USSD Request. Some gateways sends the
	 * request in the parameters, some in body with XML structure, JSON Structure.
	 */
	var _processUSSDRequest = function(request) {
		// Process the request parameters and return
		var firstReq = false;
		if (request.params.sessionState == 'NEW') {
			sessionState = '';
			firstReq = true;
		}
		return {
			"input" : request.params.input,
			"sessionId" : request.params.sessionID,
			"phoneNumber" : request.params.phoneNo,
			"state" : sessionState
		};
	};
	/*
	 * Common developer method to handle the USSD Response. Depending on the
	 * gateway developer has to set the response in XML, JSON or plain text
	 */
	var _buildUSSDResponse = function(nextState, message, inputObj, isEnd) {
		// Build the response object based on the format required by the gateway
		if (isEnd === true) {
			type = "END";
			sessionState = '';
		} else {
			sessionState = nextState;
		}
		var responseObj = {
			"RESPONSE_TEXT" : message,
			"SESSION_ID" : inputObj.sessionId,
			"PHONE_NUMBER" : inputObj.phoneNumber
		};
		return WL.Server.createUSSDResponse(JSON.stringify(responseObj), _contentType, (isEnd === true));
	};
	var _getContentType = function() {
		return _contentType;
	};
	return {
		processUSSDRequest : _processUSSDRequest,
		buildUSSDResponse : _buildUSSDResponse,
		getContentType : _getContentType
	};
})();
/**
 * ************************************** Gateway Logic - End
 * ***********************************************
 */
/**
 * *********************************** Generic Router/State Machine Logic -
 * Start ***************************
 */
// This is a state machine code which requires no change
var router = (function(logic) {
	var __routingrules = null, __logic = logic;
	var pre = 'pre'; // to send USSD message to user
	var post = 'post'; // to process USSD reply from user
	var init = 'init';
	var _routeTo = function(state, code, options) {
		WL.Logger.debug("in routeTo");
		WL.Logger.debug(state);
		var nextState = init;
		if (state) {
			nextState = __routingrules[state][code];
			if (!nextState) {
				nextState = __routingrules[state][0];
			}
		}
		WL.Logger.debug(nextState);
		if (typeof __logic[pre + nextState] === 'function') {
			return __logic[pre + nextState](nextState, code, options);
		} else {
			WL.Logger.error("Unable to find function '" + pre + nextState + "'");
		}
	};
	var _handleRoute = function(state, code, options) {
		// init call
		if (!state) {
			return _routeTo(null, 0, options);
		}
		if (typeof __logic[post + state] === 'function') {
			return __logic[post + state](state, code, options);
		} else {
			return _routeTo(state, code, options);
		}
	};
	var _addRoutes = function(routes) {
		__routingrules = routes;
	};
	var _getRoutes = function() {
		return __routingrules;
	};
	return {
		handleRoute : _handleRoute,
		routeTo : _routeTo,
		addRoutes : _addRoutes,
		getRoutes : _getRoutes
	};
})(bl); /*
				 * pass the logic object that has pre and post functions to send and
				 * process USSD messages
				 */
/**
 * *********************************** Generic Router/State Machine Logic - End
 * ***************************
 */
/**
 * *******************************************************************************************
 * USSD Sample Code
 * ******************************************************************************************
 */
