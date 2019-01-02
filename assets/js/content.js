/*
* @Author: championshuttler
* @Date:   2017-09-04 04:57:34
@Last Modified time: 2017-09-04 01:20:44
*/

var element;

document.addEventListener("contextmenu", function(e){
	element = e.target;
});

var textAcceptingInputTypes = [
	"text",
	"url",
	"search",
	"tel",
	"password"
];

var forbiddenTextAcceptingInputTypes = [
	"number",
	"email",
	"range",
	"date",
	"month",
	"week",
	"time",
	"datetime",
	"datetime-local",
	"color"
];

function getCaretPosition(field){
	// initialize
	var caretPos = 0;

	if($.inArray(field.type, textAcceptingInputTypes) > -1){
		// Standard-compliant browsers
		caretPos = field.selectionStart;
	}
	else if('selectionStart' in field && $.inArray(field.type, forbiddenTextAcceptingInputTypes) == -1){
		// Standard-compliant browsers
		caretPos = field.selectionStart;
	}
	else if(document.selection){
		// IE support

		// set focus on the element
		field.focus();

		// to get cursor position, get empty selection range
		var sel = document.selection.createRange();

		// move selection start to 0 position
		sel.moveStart('character', -field.value.length);

		// the caret position is selection length
		caretPos = sel.text.length;
	}

	return caretPos;
}



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

