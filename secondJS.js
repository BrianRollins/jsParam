var secondParams = jsParam('secondJS',true);

$('#output').append('<h1>'+secondParams['name']+'</h1>');
for (strName in secondParams) {
	$('#output').append('<b>'+strName+'</b> / <em>'+ secondParams[strName] + '</em><br/>');
}