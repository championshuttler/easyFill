/*
* @Author: championshuttler
* @Date:   2016-09-05  00:39:44
*/

var list_keys = [ 'personal', 'email', 'github', 'linkedin', 'twitter', 'facebook', 'personal', 'email', 'mobile'];

// updateUI show saved links when popup page is opened by clicking on browser icon
function updateUI(){
	for(var i in list_keys){
		var key = list_keys[i];
		var link = localStorage.getItem(key);
		if(typeof link == "string"){
			document.getElementById(key).value = link;
		}
		else{
			document.getElementById(key).value = "";
		}
	}
}
