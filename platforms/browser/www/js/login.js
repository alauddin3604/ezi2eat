$(document).ready(function() {
	document.addEventListener("deviceready", onDeviceReady, false);
});

function onDeviceReady() {
	$("#login-form").submit(function(event) {
		event.preventDefault();
		
		var email = $("#email").val();
		var pass = $("#pass").val();
		var dataString = "email=" + email + "&pass=" + pass + "&login=";
		
		$.ajax({
			type: "POST",
			url: "http://localhost/ez2eat-v2/login.php",
			data: dataString,
			crossDomain: true,
			cache: false,
			success: function(data) {
				if (data == "success") {
					alert("Senyum");
				}
				else if (data == "failed") {
					alert("Pale buto");
				}
			}
		});
	});
}

