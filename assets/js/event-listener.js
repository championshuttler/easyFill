/*
* @Author: championshuttler
* @Contributors: Athyk
* @Date:   2017-09-05
* @LastUpdated: 2017-10-02
*/

var list_keys = ['linkedin', 'github', 'twitter', 'facebook', 'personal', 'email'];

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
	var text_div = document.getElementById(id);

	text_div.style.display = 'block';
	text_div.className += " fadeOut";
}

document.addEventListener("DOMContentLoaded", function(event) {
	var saveLinksNode = document.getElementById("save_links");

	saveLinksNode.onclick = function(){
		saveLinksNode.removeChild(saveLinksNode.lastChild);
		saveLinksNode.appendChild(document.createTextNode("Saving.."));
		for(var i in list_keys){
			var key = list_keys[i];
			var newValue = document.getElementById(key).value;
			localStorage.setItem(key, newValue);
		}
		// trigger to show the saved links
		updateUI();
		animate_text("success_text");

		saveLinksNode.removeChild(saveLinksNode.lastChild);
		saveLinksNode.appendChild(document.createTextNode("Save links"));
	};

	document.getElementById("remove").onclick = function(){
		localStorage.clear();
		updateUI();

		animate_text("remove_text")
	};

	// trigger to show the saved links
	updateUI();

});
