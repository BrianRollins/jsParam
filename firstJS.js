var firstParams = jsParam('firstJS', true);

document.write('<h2>'+firstParams['name']+'</h2>');
for (strName in firstParams) {
	document.write('<b>'+strName+'</b> / <em>'+ firstParams[strName] + '</em><br/>');
}