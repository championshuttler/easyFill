/*
* @Author: championshuttler
* @Date:   2017-09-05  00:39:44
 @LastUpdated : 2017-09-05 00:45:45        coding with weedy eyes :P
*/

var list_keys = [ 'personal', 'email', 'github', 'linkedin', 'twitter', 'facebook', 'mobile'];

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
function animate_text(id){
	var text_div = $(id)

	text_div.show();
	text_div.fadeOut(2000);
}
