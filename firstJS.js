var firstParams = jsParam('firstJS',true);

$('#output').append('<h1>'+firstParams['name']+'</h1>');
for (strName in firstParams) {
	$('#output').append('<b>'+strName+'</b> / <em>'+ firstParams[strName] + '</em><br/>');
}