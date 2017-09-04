/*
* @Author: championshuttler
* @Date:   2017-09-04 04:57:34
*/

var element;

 document.addEventListener("contextmenu", function(e){
   element = e.target ;
 });


 var textAcceptingInputTypes = [
 	"text",
 	"url",
  "number",
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
