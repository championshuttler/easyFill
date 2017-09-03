/*
* @Author: championshuttler
* @Date:   2017-09-04 01:44:02 AM :O <3
*/


var email = browser.contextMenus.create({
	"title": "Email Address",
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


var github = browser.contextMenus.create({
	"title": "GitHub",
	"parentId": parent,
	"contexts": ["editable"],
	"onclick": pasteLink
});

var linkedin = browser.contextMenus.create({
	"title": "LinkedIn",
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


var mobile = browser.contextMenus.create({
	"title": "Paste easy link here",
	"contexts": ["editable"],
	"onclick": pasteLink
});
