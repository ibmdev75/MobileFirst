function wlCommonInit() {
	/*
	 * Use of WL.Client.connect() API before any connectivity to a MobileFirst
	 * Server is required. This API should be called only once, before any other
	 * WL.Client methods that communicate with the MobileFirst Server. Don't
	 * forget to specify and implement onSuccess and onFailure callback functions
	 * for WL.Client.connect(), e.g:
	 * 
	 * WL.Client.connect({ onSuccess: onConnectSuccess, onFailure:
	 * onConnectFailure });
	 * 
	 */
	// Common initialization code goes here
	document.addEventListener(WL.Events.WORKLIGHT_IS_CONNECTED, connectDetected, false);
	document.addEventListener(WL.Events.WORKLIGHT_IS_DISCONNECTED, disconnectDetected, false);
}
function connectionFailure() {
	alert("Could not connect to the MobileFirst Server.");
	var output = new Date() + "<hr />Working offline";
	$('#info').html(output);
}
function disconnectDetected() {
	angular.element(document.getElementById('network')).scope().disconnect();
}
function connectDetected() {
	angular.element(document.getElementById('network')).scope().connect();
}
