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
	"title": "Mobile Number",
	"contexts": ["editable"],
	"onclick": pasteLink
});

// var extra = browser.contextMenus.create({
// 	"title": "Any Other Link",
// 	"contexts": ["editable"],
// 	"onclick": pasteLink
// });



function pasteLink(info, tab){

	var requested_key, requested_link, status;

	 if(info.menuItemId == email){
		requested_key = "email"
	}
	else if(info.menuItemId == personal){
		requested_key = "personal";
	}
	else if(info.menuItemId == github){
		requested_key = "github";
	}
	else if(info.menuItemId == linkedin){
		requested_key = "linkedin";
	}

	else if(info.menuItemId == twitter){
		requested_key = "twitter";
	}
	else if(info.menuItemId == facebook){
		requested_key = "facebook";
	}

	else if (info.menuItemId == mobile) {
		requested_key = "mobile";
	}
	// else if (info.menuItemId == extra) {
	// 	requested_key = "extra";
	// }
