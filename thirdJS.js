var thirdParams = jsParam('thirdJS', true);

document.write('<h2>'+thirdParams['name']+'</h2>');
for (strName in thirdParams) {
  if (typeof(thirdParams[strName]) !== "object") {
	   document.write('<b>'+strName+'</b> / <em>'+ thirdParams[strName] + '</em><br/>');
  } else {
    for(var i=0; i < thirdParams[strName].length; i++) {
      document.write('<b>'+strName+'['+i+']</b> / <em>'+ thirdParams[strName][i] + '</em><br/>');
    }
  }
}
