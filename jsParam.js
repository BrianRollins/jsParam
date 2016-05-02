/*
	Copyright 2013-2016 by Brian Rollins.
	For the latest version, checkout https://github.com/BrianRollins/jsParam
	Questions/Comments: me at brianrollins.com
	Released under a Creative Commons Attribution 4.0 International License
	http://creativecommons.org/licenses/by/4.0/
*/
/**
	Function jsParam
	Params:
		sourceID: (String) ID of the script tag you want examined for parameters. Do not use # before the ID.
		logParams: (Boolean | Optional) Sends a log of the parameters and their types to the console.
	Returns: Array (or null if no params are found);
*/

var jsParam = function(sourceID, logParams) {
	if (typeof logParams === 'undefined') {
		logParams = false;
	}
	var params = [];
	var parts = document.getElementById(sourceID).src.split('?');
	if (typeof parts[1] !== 'undefined') {
		parts = parts[1].split('&');
		for(i=0; i<parts.length; i++) {
			var t = parts[i].split('=');
			//Because everything comes in as a string, we're going to do some
			//cleanup for Booleans, Numbers, and Arrays.

			//Fix booleans
			if (t[1] === "true") {
				params[decodeURIComponent(t[0])] = true;
			} else if (t[1] === "false") {
				params[decodeURIComponent(t[0])] = false;
			}

			//Fix numbers
			else if (t[1] == parseFloat(t[1])) {
				params[decodeURIComponent(t[0])] = parseFloat(t[1]);
			}

			//Fix arrays (has a pipe | in the string).
			else if (t[1].indexOf('|') !== -1) {
				params[decodeURIComponent(t[0])] = decodeURIComponent(t[1]).split('|');
			}
			//Everything else (Assume it's a string).
			else {
				params[decodeURIComponent(t[0])] = decodeURIComponent(t[1]); //Decode that ugly URI stuff.
			}
		} //end loop through params.
		if(logParams) {
			console.log('*** jsParam ('+sourceID+') ***');
			for(var strName in params) {
				var c = params[strName];
				console.log(strName + " : " + c + " (" + typeof c + ")");
			}
		}
		return params; //Array of params.
	} else {
		//No params found.
		return null;
	}
};
