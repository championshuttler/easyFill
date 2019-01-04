/*
* @Author: championshuttler
* @Date:   2017-09-04 01:44:02 AM :O <3
*/



var parent = browser.contextMenus.create({
	"title": "Paste links here",
	"contexts": ["editable"],
	"onclick": pasteLink
});

var linkedin = browser.contextMenus.create({
	"title": "LinkedIn",
	"parentId": parent,
	"contexts": ["editable"],
	"onclick": pasteLink
});

var github = browser.contextMenus.create({
	"title": "GitHub",
	"parentId": parent,
	"contexts": ["editable"],
	"onclick": pasteLink
});

var twitter = browser.contextMenus.create({
	"title": "Twitter",
	"parentId": parent,
	"contexts": ["editable"],
	"onclick": pasteLink
});

var facebook = browser.contextMenus.create({
	"title": "Facebook",
	"parentId": parent,
	"contexts": ["editable"],
	"onclick": pasteLink
});

var personal = browser.contextMenus.create({
	"title": "Personal Website",
	"parentId": parent,
	"contexts": ["editable"],
	"onclick": pasteLink
});

var email = browser.contextMenus.create({
	"title": "Email Address",
	"parentId": parent,
	"contexts": ["editable"],
	"onclick": pasteLink
});


function pasteLink(info, tab) {

	var requested_key, requested_link, status;

	if (info.menuItemId == linkedin) {
		requested_key = "linkedin";
	}
	else if (info.menuItemId == github) {
		requested_key = "github";
	}
	else if (info.menuItemId == twitter) {
		requested_key = "twitter";
	}
	else if (info.menuItemId == facebook) {
		requested_key = "facebook";
	}
	else if (info.menuItemId == personal) {
		requested_key = "personal";
	}
	else if (info.menuItemId == email) {
		requested_key = "email"
	}

	//Add all you functional Logic here
	browser.tabs.query({
		"active": true,
		"currentWindow": true
	}, function (tabs) {
		requested_link = localStorage.getItem(requested_key);
		status = "success";
		if (typeof requested_link == "object" || requested_link == "") {
			status = "fail";
		}

		// send message to the current tab
		browser.tabs.sendMessage(tabs[0].id, {
			status: status,
			link: requested_link,
			type: typeof requested_link
		});
	});
}

browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	var allLinks = {};

	for (var key in localStorage) {
		if (localStorage.hasOwnProperty(key) && localStorage.getItem(key) !== '') {
			allLinks[key] = localStorage.getItem(key);
		}
	}
	if (request.method == "getLocalStorage")
		sendResponse({ data: allLinks });
	else
		sendResponse({}); // snub them.
});
