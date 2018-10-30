$(document).ready(function () {
	document.addEventListener("deviceready", onDeviceReady, false);
});

function onDeviceReady() {
	$("#register-form").submit(function(event) {
		event.preventDefault();
		
		var email = $("#email").val();
		var password = $("#password").val();
		var confirm_password = $("#confirm_password").val();
		
		/* if(email == "" || password == "" || confirm_password == "") {
			if (email == "") {
				$("#email").css("border","1px solid red");
				$("#email").css("background-color", "#fbe7e7");
				$("#emailErr").css("display", "");
				$("#emailErr").html("Please provide an email address");
				e.preventDefault();
			}
			if(password == "") {
				$("#passErr").css("display", "");
				$("#passErr").html("Please provide a password");
			}
			if (confirm_password == "") {
				
			}
		} */
		//else {
			$.ajax({
				type: "POST",
				url: "http://localhost/ez2eat-v2/register.php",
				data: "email=" + email + "&password=" + password + "&submit=",
				crossDomain: true,
				cache: false,
				success: function(data) {
					if (data == "error_registered") {
						$("#emailErr").css("display", "");
						$("#emailErr").html("Email is already registered!");
					}
					else if (data == "success")
						alert("Registered");
					else if (data == "failed")
						alert("Nokharam");
				}
			});
		// }
	});
	
	$("#email").on("input", onInputEmail);
	
	$("#password").on("input", onInputPass);
	
	$("#confirm_password").on("input", onBlurConfirm);
	
	function onInputEmail() {
		$("#emailErr").css("display", "none");
	}
	
	function onInputPass() {
		$("#passErr").css("display", "none");
		$("#passErr").html("");
		if($(this).val().length == 0) {
			$("#passErr").css("display", "");
			$("#passErr").html("Please provide a password");
		}
	}
	
	function onBlurConfirm() {
		if ($(this).val() != $("#password").val()) {
			$(this).css("border", "1px solid red");
			$("#confpassErr").css("display", "");
			$("#confpassErr").html("Password not match");
		}
		else {
			$("#confpassErr").css("display", "none");
			$(this).css("border", "");
		}
	}
} 