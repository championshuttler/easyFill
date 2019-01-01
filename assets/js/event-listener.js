/*
* @Author: championshuttler
* @Contributors: Athyk
* @Date:   2017-09-05
* @LastUpdated: 2017-10-02
*/

var list_keys = ['linkedin', 'github', 'twitter', 'facebook', 'personal', 'email'];

// updateUI show saved links when popup page is opened by clicking on browser icon
function updateUI() {
	for (var i in list_keys) {
		var key = list_keys[i];
		var link = localStorage.getItem(key);
		if (typeof link == "string") {
			document.getElementById(key).value = link;
		}
		else {
			document.getElementById(key).value = "";
		}
	}
}

function animate_text(id) {
	var text_div = document.getElementById(id);

	text_div.style.display = 'block';
	text_div.className += " fadeOut";
}

document.addEventListener("DOMContentLoaded", function (event) {

	document.getElementById("save_links").onclick = function () {
		document.getElementById("save_links").innerHTML = "Saving..";
		for (var i in list_keys) {
			var key = list_keys[i];
			var newValue = document.getElementById(key).value;
			localStorage.setItem(key, newValue);
		}
		// trigger to show the saved links
		updateUI();
		animate_text("success_text");

		document.getElementById("save_links").innerHTML = "Save links";
	};

	document.getElementById("remove").onclick = function () {
		localStorage.clear();
		updateUI();

		animate_text("remove_text")
	};

	// trigger to show the saved links
	updateUI();

});
function CopyFunction(eltId) {
	var copyText = document.getElementById(eltId);
	copyText.select();
	document.execCommand("copy");
}

document.getElementsByName("CopyButton")[0].addEventListener("click", () => CopyFunction("linkedin"));
document.getElementsByName("CopyButton")[1].addEventListener("click", () => CopyFunction("github"));
document.getElementsByName("CopyButton")[2].addEventListener("click", () => CopyFunction("twitter"));
document.getElementsByName("CopyButton")[3].addEventListener("click", () => CopyFunction("facebook"));
document.getElementsByName("CopyButton")[4].addEventListener("click", () => CopyFunction("personal"));
document.getElementsByName("CopyButton")[5].addEventListener("click", () => CopyFunction("email"));