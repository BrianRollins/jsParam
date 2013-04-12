var secondParams = jsParam('secondJS', true);

document.write('<h2>'+secondParams['name']+'</h2>');
for (strName in secondParams) {
	document.write('<b>'+strName+'</b> / <em>'+ secondParams[strName] + '</em><br/>');
}