function get_mid(){
	var mid= document.getElementById('np_track').getAttribute('mid');
	return mid;
}
var mid = get_mid();
console.log(mid);
var xhr = new XMLHttpRequest();
xhr.onreadystatechange=function(){
	if(xhr.readyState==4 && xhr.status==200)
		var data=xhr.responseText;
	else
		console.log(xhr.readyState);
}
xhr.open("GET","https://sdslabs.co.in/muzi/ajax/track/?id="+mid,true);
xhr.send();
console.log(data);