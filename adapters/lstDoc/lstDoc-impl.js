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
function getLstDocs() {
	var input = {
		method : 'get',
		returnedContentType : 'json',
		path : 'od/arswww/wk-web/services/rechercherDocMulti/iard/O-doc-pli-iard-reg-tous/json',
		parameters : {
			"params" : [{
				"name" : "N_Client",
				"values" : ["020103A",""],
				"operator" : "1"
			},{
				"name" : "E_Consultation",
				"values" : ["OUI",""],
				"operator" : "1"
			},{
				"name" : "D_Emission",
				"values" : ["01/11/2014","01/12/2014"],
				"operator" : "1024"
			}]
		}
	};
	return WL.Server.invokeHttp(input);
}
