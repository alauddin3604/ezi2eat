function onDeviceReady() {
	"use strict";
    $("#loginForm").submit(function(e) {
		e.preventDefault();
		var dataString = $(this).serialize();
		alert(dataString);
	});
}

$(document).ready(function () {
    "use strict";
    document.addEventListener("deviceready", onDeviceReady, false);
});