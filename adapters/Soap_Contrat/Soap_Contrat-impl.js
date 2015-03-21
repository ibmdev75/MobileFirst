
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Generated code - Do not edit																					 //
//																												 //
// This is a SOAP adapter that was auto-generated by Worklight for invocation of specific SOAP-based services.   //
// The adapter may invoke more than one service as long as they are all from the same enpdpoint (server host).   //
// Each adapter procedure matches a single operation for the same endpoint server and accepts:                   //
//   params  - Serialized JSON representation of the XML-based SOAP body to be sent to the service               //
//   headers - Custom HTTP headers to be specified when invoking the remote service. It is a JSON object with    //
//             the headers names and values. E.g. { 'name1' : 'value1', 'name2' : 'value2' }                     //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function ProductionServiceImplService_lireContrat(params, headers){
	var soapEnvNS = '';
    // The value of 'soapEnvNS' was set based on the version of the SOAP to be used (i.e. 1.1 or 1.2).
    soapEnvNS = 'http://schemas.xmlsoap.org/soap/envelope/';

	// The following mappings object was autogenerated from the XML schema of the input message to the service.
    // It is being used to support a params JSON when invoking this procedure that don't specify the namespace
    // prefix nor specifying whether a property is attribute or not.
    // 
    // The 'roots' object has the list of message parts within the invocation SOAP message. Each entry has a
    // mapping between the root element name and its namespace prefix and type.
    // Each root object may define 'nsPrefix' and 'type'. Both are optional - If there is no need for a NS prefix
    // then the 'nsPrefix' should not be specified. If the element is a simple type then the 'type' should not be
    // specified.
    //
    // The 'types' object has a list of types each defining the children of the type and the definition of each
    // child. If the child is a complext type, the 'type' property has a reference to the child type definition.
    // Each child object may define:
    // 'nsPrefix' (optional) - Holds the namespace prefix to be attached to the element. If there is no need for 
    //   a NS prefix then the 'nsPrefix' should not be specified. 
    // 'type' (optional) - If the element is a simple type then the 'type' should not be specified. If it is an 
    //   attribute then 'type' should have the value of '@'. Otherwise the value of 'type' is a reference to the 
    //   type definition within the 'types' object.
    var mappings = {
		roots: {
			'lireContrat': { nsPrefix: 'tns', type: 'tns:lireContrat' }				
		},
		
		types: {
			'tns:lireContrat': {
				children: [
					{'critereLireContrat': { type: 'tns:critereLireContrat' }}	
				]
			},

			'tns:critereLireContrat': {
				children: [
					{'noSocietaire': {  }},	
					{'idPolice': {  }},	
					{'noPolice': {  }},	
					{'cdCanalAcces': {  }},	
					{'nbAnneesSC': {  }}	
				]
			}
		}
	};
    var namespaces = 'xmlns:ns1="http://smabtp.fr/model/CommonTypes/1.0" xmlns:tns="http://smabtp.fr/service/transverse/ProductionService/1.0" ';
    var request = buildBody(params, namespaces, mappings, soapEnvNS);
    var soapAction = 'http://TRANSVERSE.smabtp.fr/LIRE_CONTRAT/1.0';
    return invokeWebService(request, headers, soapAction);
}


function ProductionServiceImplService_lireGarantie(params, headers){
	var soapEnvNS = '';
    // The value of 'soapEnvNS' was set based on the version of the SOAP to be used (i.e. 1.1 or 1.2).
    soapEnvNS = 'http://schemas.xmlsoap.org/soap/envelope/';

	// The following mappings object was autogenerated from the XML schema of the input message to the service.
    // It is being used to support a params JSON when invoking this procedure that don't specify the namespace
    // prefix nor specifying whether a property is attribute or not.
    // 
    // The 'roots' object has the list of message parts within the invocation SOAP message. Each entry has a
    // mapping between the root element name and its namespace prefix and type.
    // Each root object may define 'nsPrefix' and 'type'. Both are optional - If there is no need for a NS prefix
    // then the 'nsPrefix' should not be specified. If the element is a simple type then the 'type' should not be
    // specified.
    //
    // The 'types' object has a list of types each defining the children of the type and the definition of each
    // child. If the child is a complext type, the 'type' property has a reference to the child type definition.
    // Each child object may define:
    // 'nsPrefix' (optional) - Holds the namespace prefix to be attached to the element. If there is no need for 
    //   a NS prefix then the 'nsPrefix' should not be specified. 
    // 'type' (optional) - If the element is a simple type then the 'type' should not be specified. If it is an 
    //   attribute then 'type' should have the value of '@'. Otherwise the value of 'type' is a reference to the 
    //   type definition within the 'types' object.
    var mappings = {
		roots: {
			'lireGarantie': { nsPrefix: 'tns', type: 'tns:lireGarantie' }				
		},
		
		types: {
			'tns:lireGarantie': {
				children: [
					{'critereLireGarantie': { type: 'tns:critereLireGarantie' }}	
				]
			},

			'tns:critereLireGarantie': {
				children: [
					{'noSocietaire': {  }},	
					{'noPolice': {  }},	
					{'idPolice': {  }},	
					{'idObjet': {  }},	
					{'idGarantie': {  }},	
					{'cdCanalAcces': {  }}	
				]
			}
		}
	};
    var namespaces = 'xmlns:ns1="http://smabtp.fr/model/CommonTypes/1.0" xmlns:tns="http://smabtp.fr/service/transverse/ProductionService/1.0" ';
    var request = buildBody(params, namespaces, mappings, soapEnvNS);
    var soapAction = 'http://TRANSVERSE.smabtp.fr/LIRE_GARANTIE/1.0';
    return invokeWebService(request, headers, soapAction);
}


function ProductionServiceImplService_rechercherObjets(params, headers){
	var soapEnvNS = '';
    // The value of 'soapEnvNS' was set based on the version of the SOAP to be used (i.e. 1.1 or 1.2).
    soapEnvNS = 'http://schemas.xmlsoap.org/soap/envelope/';

	// The following mappings object was autogenerated from the XML schema of the input message to the service.
    // It is being used to support a params JSON when invoking this procedure that don't specify the namespace
    // prefix nor specifying whether a property is attribute or not.
    // 
    // The 'roots' object has the list of message parts within the invocation SOAP message. Each entry has a
    // mapping between the root element name and its namespace prefix and type.
    // Each root object may define 'nsPrefix' and 'type'. Both are optional - If there is no need for a NS prefix
    // then the 'nsPrefix' should not be specified. If the element is a simple type then the 'type' should not be
    // specified.
    //
    // The 'types' object has a list of types each defining the children of the type and the definition of each
    // child. If the child is a complext type, the 'type' property has a reference to the child type definition.
    // Each child object may define:
    // 'nsPrefix' (optional) - Holds the namespace prefix to be attached to the element. If there is no need for 
    //   a NS prefix then the 'nsPrefix' should not be specified. 
    // 'type' (optional) - If the element is a simple type then the 'type' should not be specified. If it is an 
    //   attribute then 'type' should have the value of '@'. Otherwise the value of 'type' is a reference to the 
    //   type definition within the 'types' object.
    var mappings = {
		roots: {
			'rechercherObjets': { nsPrefix: 'tns', type: 'tns:rechercherObjets' }				
		},
		
		types: {
			'tns:critereRechercherObjets': {
				children: [
					{'noSocietaire': {  }},	
					{'noPolice': {  }},	
					{'cdSociete': {  }},	
					{'idPolice': {  }},	
					{'cdEtat': {  }},	
					{'cdCanalAcces': {  }}	
				]
			},

			'tns:rechercherObjets': {
				children: [
					{'critereRechercherObjets': { type: 'tns:critereRechercherObjets' }},	
					{'criterePagination': { type: 'ns1:criterePagination' }}	
				]
			},

			'ns1:criterePagination': {
				children: [
					{'nbItem': {  }},	
					{'noPage': {  }},	
					{'critereTri': {  }}	
				]
			}
		}
	};
    var namespaces = 'xmlns:ns1="http://smabtp.fr/model/CommonTypes/1.0" xmlns:tns="http://smabtp.fr/service/transverse/ProductionService/1.0" ';
    var request = buildBody(params, namespaces, mappings, soapEnvNS);
    var soapAction = 'http://TRANSVERSE.smabtp.fr/RECHERCHE_OBJETS_CONTRAT/1.0';
    return invokeWebService(request, headers, soapAction);
}


function ProductionServiceImplService_lireObjet(params, headers){
	var soapEnvNS = '';
    // The value of 'soapEnvNS' was set based on the version of the SOAP to be used (i.e. 1.1 or 1.2).
    soapEnvNS = 'http://schemas.xmlsoap.org/soap/envelope/';

	// The following mappings object was autogenerated from the XML schema of the input message to the service.
    // It is being used to support a params JSON when invoking this procedure that don't specify the namespace
    // prefix nor specifying whether a property is attribute or not.
    // 
    // The 'roots' object has the list of message parts within the invocation SOAP message. Each entry has a
    // mapping between the root element name and its namespace prefix and type.
    // Each root object may define 'nsPrefix' and 'type'. Both are optional - If there is no need for a NS prefix
    // then the 'nsPrefix' should not be specified. If the element is a simple type then the 'type' should not be
    // specified.
    //
    // The 'types' object has a list of types each defining the children of the type and the definition of each
    // child. If the child is a complext type, the 'type' property has a reference to the child type definition.
    // Each child object may define:
    // 'nsPrefix' (optional) - Holds the namespace prefix to be attached to the element. If there is no need for 
    //   a NS prefix then the 'nsPrefix' should not be specified. 
    // 'type' (optional) - If the element is a simple type then the 'type' should not be specified. If it is an 
    //   attribute then 'type' should have the value of '@'. Otherwise the value of 'type' is a reference to the 
    //   type definition within the 'types' object.
    var mappings = {
		roots: {
			'lireObjet': { nsPrefix: 'tns', type: 'tns:lireObjet' }				
		},
		
		types: {
			'tns:lireObjet': {
				children: [
					{'critereLireObjet': { type: 'tns:critereLireObjet' }}	
				]
			},

			'tns:critereLireObjet': {
				children: [
					{'noSocietaire': {  }},	
					{'noPolice': {  }},	
					{'idObjet': {  }},	
					{'cdCanalAcces': {  }}	
				]
			}
		}
	};
    var namespaces = 'xmlns:ns1="http://smabtp.fr/model/CommonTypes/1.0" xmlns:tns="http://smabtp.fr/service/transverse/ProductionService/1.0" ';
    var request = buildBody(params, namespaces, mappings, soapEnvNS);
    var soapAction = 'http://TRANSVERSE.smabtp.fr/LIRE_OBJET/1.0';
    return invokeWebService(request, headers, soapAction);
}


function ProductionServiceImplService_rechercherGaranties(params, headers){
	var soapEnvNS = '';
    // The value of 'soapEnvNS' was set based on the version of the SOAP to be used (i.e. 1.1 or 1.2).
    soapEnvNS = 'http://schemas.xmlsoap.org/soap/envelope/';

	// The following mappings object was autogenerated from the XML schema of the input message to the service.
    // It is being used to support a params JSON when invoking this procedure that don't specify the namespace
    // prefix nor specifying whether a property is attribute or not.
    // 
    // The 'roots' object has the list of message parts within the invocation SOAP message. Each entry has a
    // mapping between the root element name and its namespace prefix and type.
    // Each root object may define 'nsPrefix' and 'type'. Both are optional - If there is no need for a NS prefix
    // then the 'nsPrefix' should not be specified. If the element is a simple type then the 'type' should not be
    // specified.
    //
    // The 'types' object has a list of types each defining the children of the type and the definition of each
    // child. If the child is a complext type, the 'type' property has a reference to the child type definition.
    // Each child object may define:
    // 'nsPrefix' (optional) - Holds the namespace prefix to be attached to the element. If there is no need for 
    //   a NS prefix then the 'nsPrefix' should not be specified. 
    // 'type' (optional) - If the element is a simple type then the 'type' should not be specified. If it is an 
    //   attribute then 'type' should have the value of '@'. Otherwise the value of 'type' is a reference to the 
    //   type definition within the 'types' object.
    var mappings = {
		roots: {
			'rechercherGaranties': { nsPrefix: 'tns', type: 'tns:rechercherGaranties' }				
		},
		
		types: {
			'tns:rechercherGaranties': {
				children: [
					{'critereRechercherGaranties': { type: 'tns:critereRechercherGaranties' }},	
					{'criterePagination': { type: 'ns1:criterePagination' }}	
				]
			},

			'tns:critereRechercherGaranties': {
				children: [
					{'cdSociete': {  }},	
					{'noSocietaire': {  }},	
					{'noPolice': {  }},	
					{'idPolice': {  }},	
					{'idObjet': {  }},	
					{'cdEtat': {  }},	
					{'cdCanalAcces': {  }}	
				]
			},

			'ns1:criterePagination': {
				children: [
					{'nbItem': {  }},	
					{'noPage': {  }},	
					{'critereTri': {  }}	
				]
			}
		}
	};
    var namespaces = 'xmlns:ns1="http://smabtp.fr/model/CommonTypes/1.0" xmlns:tns="http://smabtp.fr/service/transverse/ProductionService/1.0" ';
    var request = buildBody(params, namespaces, mappings, soapEnvNS);
    var soapAction = 'http://TRANSVERSE.smabtp.fr/RECHERCHE_GARANTIES_OBJET/1.0';
    return invokeWebService(request, headers, soapAction);
}


function ProductionServiceImplService_rechercherContrats(params, headers){
	var soapEnvNS = '';
    // The value of 'soapEnvNS' was set based on the version of the SOAP to be used (i.e. 1.1 or 1.2).
    soapEnvNS = 'http://schemas.xmlsoap.org/soap/envelope/';

	// The following mappings object was autogenerated from the XML schema of the input message to the service.
    // It is being used to support a params JSON when invoking this procedure that don't specify the namespace
    // prefix nor specifying whether a property is attribute or not.
    // 
    // The 'roots' object has the list of message parts within the invocation SOAP message. Each entry has a
    // mapping between the root element name and its namespace prefix and type.
    // Each root object may define 'nsPrefix' and 'type'. Both are optional - If there is no need for a NS prefix
    // then the 'nsPrefix' should not be specified. If the element is a simple type then the 'type' should not be
    // specified.
    //
    // The 'types' object has a list of types each defining the children of the type and the definition of each
    // child. If the child is a complext type, the 'type' property has a reference to the child type definition.
    // Each child object may define:
    // 'nsPrefix' (optional) - Holds the namespace prefix to be attached to the element. If there is no need for 
    //   a NS prefix then the 'nsPrefix' should not be specified. 
    // 'type' (optional) - If the element is a simple type then the 'type' should not be specified. If it is an 
    //   attribute then 'type' should have the value of '@'. Otherwise the value of 'type' is a reference to the 
    //   type definition within the 'types' object.
    var mappings = {
		roots: {
			'rechercherContrats': { nsPrefix: 'tns', type: 'tns:rechercherContrats' }				
		},
		
		types: {
			'tns:listeCodeBranche': {
				children: [
					{'cdBranche': {  }}	
				]
			},

			'tns:critereRechercherContrats': {
				children: [
					{'noSocietaire': {  }},	
					{'noSiren': {  }},	
					{'typContrat': {  }},	
					{'listeCodeBranche': { type: 'tns:listeCodeBranche' }},	
					{'cdEtat': {  }},	
					{'dureeAncienneteResil': {  }},	
					{'UniteAncienneteResil': {  }},	
					{'cdCanalAcces': {  }},	
					{'codesSociete': { type: 'tns:codesSociete' }},	
					{'nbAnneesSC': {  }}	
				]
			},

			'tns:codesSociete': {
				children: [
					{'codeSociete': {  }}	
				]
			},

			'tns:rechercherContrats': {
				children: [
					{'critereRechercherContrats': { type: 'tns:critereRechercherContrats' }},	
					{'criterePagination': { type: 'ns1:criterePagination' }}	
				]
			},

			'ns1:criterePagination': {
				children: [
					{'nbItem': {  }},	
					{'noPage': {  }},	
					{'critereTri': {  }}	
				]
			}
		}
	};
    var namespaces = 'xmlns:ns1="http://smabtp.fr/model/CommonTypes/1.0" xmlns:tns="http://smabtp.fr/service/transverse/ProductionService/1.0" ';
    var request = buildBody(params, namespaces, mappings, soapEnvNS);
    var soapAction = 'http://TRANSVERSE.smabtp.fr/RECHERCHE_CONTRATS_SOCIETAIRE/1.0';
    return invokeWebService(request, headers, soapAction);
}


	
function buildBody(params, namespaces, mappings, soapEnvNS){
    var body =
        '<soap:Envelope xmlns:soap="' + soapEnvNS + '">\n' +
        '<soap:Body>\n';
	
	var fixedParams = {};
	for (var paramName in params) {
		if (mappings['roots'][paramName]) { //There is mapping for this param
    		var root = mappings['roots'][paramName];
    		var name = paramName;
    		if (root['nsPrefix'])
    			name = root['nsPrefix'] + ':' + paramName;
    		fixedParams[name] = handleMappings(params[paramName], root['type'], mappings['types']); 
		}
		else {
			fixedParams[paramName] = params[paramName];
		}
	}

    body = jsonToXml(fixedParams, body, namespaces);
		
    body += 
        '</soap:Body>\n' +
        '</soap:Envelope>\n';
    return body;
}

function handleMappings(jsonObj, type, mappings) {
	var fixedObj = {};
	var typeMap = mappings[type]['children']; //Get the object that defines the mappings for the specific type
	
	// loop through the types and see if there is an input param defined
	for(var i = 0; i < typeMap.length; i++) {
		var childType = typeMap[i];
		
		for(var key in childType) {
			if(jsonObj[key] !== null) { // input param exists
				var childName = key;
				if (childType[key]['nsPrefix'])
					childName = childType[key]['nsPrefix'] + ':' + key;
			
				if (!childType[key]['type']) //Simple type element
					fixedObj[childName] = jsonObj[key];
				else if (typeof jsonObj[key] === 'object' && jsonObj[key].length != undefined) { //Array of complex type elements
					fixedObj[childName] = [];
					for (var i=0; i<jsonObj[key].length; i++)
						fixedObj[childName][i] = handleMappings(jsonObj[key][i], childType[key]['type'], mappings);
				}
				else if (typeof jsonObj[key] === 'object') //Complex type element
					fixedObj[childName] = handleMappings(jsonObj[key], childType[key]['type'], mappings);
				else if (childType[key]['type'] == '@') //Attribute
					fixedObj['@' + childName] = jsonObj[key];
			}
		}
    }
	
	return fixedObj;
}

function getAttributes(jsonObj) {
	var attrStr = '';
	for(var attr in jsonObj) {
		if (attr.charAt(0) == '@') {
		    var val = jsonObj[attr];
			attrStr += ' ' + attr.substring(1);
			attrStr += '="' + xmlEscape(val) + '"';
		}
	}
	return attrStr;
}

function jsonToXml(jsonObj, xmlStr, namespaces) {
	var toAppend = '';
	for(var attr in jsonObj) {
		if (attr.charAt(0) != '@') {
		    var val = jsonObj[attr];
			if (typeof val  === 'object'  &&  val.length != undefined) {
				for(var i=0; i<val.length; i++) {
					toAppend += "<" + attr + getAttributes(val[i]);
					if (namespaces != null)
						toAppend += ' ' + namespaces;
					toAppend += ">\n";
					toAppend = jsonToXml(val[i], toAppend);
					toAppend += "</" + attr + ">\n";
				}
			}
			else {
				toAppend += "<" + attr;
			    if (typeof val  === 'object') {
					toAppend += getAttributes(val);
					if (namespaces != null)
						toAppend += ' ' + namespaces;
					toAppend += ">\n";
					toAppend = jsonToXml(val, toAppend);
				}
				else {
					toAppend += ">" + xmlEscape(val);
				}
				toAppend += "</" + attr + ">\n";
			}
		}
	}
	return xmlStr += toAppend;
}


function invokeWebService(body, headers, soapAction){
    var input = {
        method : 'post',
        returnedContentType : 'xml',
        path : '/ba-web/production-service',
        body: {
            content : body.toString(),
            contentType : 'text/xml; charset=utf-8'
        }
    };
    
    //Adding custom HTTP headers if they were provided as parameter to the procedure call
    //Always add header for SOAP action 
    headers = headers || {};
    if (soapAction != 'null')
    	headers.SOAPAction = soapAction;
    input['headers'] = headers;
        
    return WL.Server.invokeHttp(input);
}

function xmlEscape(obj) {
    if(typeof obj !== 'string') {
    	return obj;
    }
    return obj.replace(/&/g, '&amp;')
           .replace(/"/g, '&quot;')
           .replace(/'/g, '&apos;')
           .replace(/</g, '&lt;')
           .replace(/>/g, '&gt;');
}
