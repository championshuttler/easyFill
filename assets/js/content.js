/*
* @Author: championshuttler
* @Date:   2017-09-04 04:57:34
@Last Modified time: 2017-09-04 01:20:44
*/

var element;

 document.addEventListener("contextmenu", function(e){
   element = e.target ;
 });


 var textAcceptingInputTypes = [
 	"text",
 	"url",
  "number",
 	"search",             // Enough?
 	"tel",
 	"password"
 ];


 var forbiddenTextAcceptingInputTypes = [
	"number",
	"email",
	"range",
	"date",
	"month",
	"week",         // Have to check again :D
	"time",
	"datetime",
	"datetime-local",
	"color"
];


$(document).on('ready', function(){

	browser.runtime.onMessage.addListener(function(message, sender, sendResponse) {
		if(message.status == "success" && message.type == "string"){
			var caretPos = getCaretPosition(element),
				initialValue = element.value,
				firstPart = initialValue.substr(0,caretPos),
				selectedText = initialValue.substring(element.selectionStart, element.selectionEnd),
				lastPart;

			// This makes sure the selected text is removed while pasting the link
			if (selectedText != '') {
				lastPart = initialValue.substr(caretPos + selectedText.length);
			} else {
				lastPart = initialValue.substr(caretPos);
			}

			element.value = firstPart + message.link + lastPart;
		}
	});


  browser.runtime.sendMessage({ method: "getLocalStorage", key: "status" }, function(response) {
		for (var key in response.data) {
			$('input').each(function(index, data) {
				if (data.type != 'hidden' && $.inArray(data.type, forbiddenTextAcceptingInputTypes) == -1) {
					if (data.name.toUpperCase().search(key.toUpperCase()) != -1) {
						$(`[name="${data.name}"]`).val(response.data[key]);
					}
					else if(data.id.toUpperCase().search(key.toUpperCase()) != -1) {
						$(`[id="${data.id}"]`).val(response.data[key]);
					}
				}
			});
		}
	});

});
