var jsParam = function(sourceID, logParams) {	
	if (typeof logParams === 'undefined') {
		logParams = false;
	}
	if(sourceID.substring(0) != '#') {
		sourceID = '#' + sourceID;
	}
	js = $(sourceID);
	var params = [];
	var parts = js.attr('src').split('?');
	if (typeof parts[1] !== 'undefined') {
		parts = parts[1].split('&');
		for(i=0;i<parts.length;i++) {
			var t = parts[i].split('=');
			//Because everything comes in as a string, we're going to do some cleanup for Booleans and Numbers.
			//Fix booleans
			if (t[1] === "true") {
				t[1] = true;
			} else if (t[1] === "false") {
				t[1] = false;
			}
			//Fix numbers			
			else if (t[1] == parseFloat(t[1])) {
				t[1] = parseFloat(t[1]);
			}
			params[decodeURIComponent(t[0])] = decodeURIComponent(t[1]); //Decode that ugly URI stuff.
		}
		if(logParams) {
			console.log('*** jsParam ('+sourceID+') ***');
			for(strName in params) {
				var c = params[strName];			
				console.log(strName + " : " + c + " (" + typeof c + ")");
			}
		}
		return params;
	} else {
		//No Params found.
		return null;
	}	
};