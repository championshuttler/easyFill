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
