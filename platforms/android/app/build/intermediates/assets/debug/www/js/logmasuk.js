$(document).ready(function() {
    document.addEventListener("deviceready", onDeviceReady, false);
});

function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false);
    $("#logMasuk").submit(function() {
        var noTelefon = $("#noTelefon").val();
        var nama = $("#nama").val();
        var noBilik = $("#noBilik").val();
        var dataString = "noTelefon="+noTelefon+"&nama="+nama+"&noBilik="+noBilik+"&logmasuk=";

        if ($.trim(noTelefon).length > 0 & $.trim(nama).length > 0 & $.trim(noBilik).length > 0) {
            sessionStorage.setItem("noTelefon", noTelefon);
            $.ajax({
                type: "POST",
                url: "http://192.168.43.134/ez2eat-v2/daftar.php",
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function() {
                    $("#logmasuk").val('Memuat...');
                },
                success: function(data) {
                    if(data == "success") {
                        navigator.notification.alert("Anda telah dilog masuk", alertDismissed, "Log masuk", "OK");
                        $("#logmasuk").val('Log Masuk');
                    }
                    else {
                        alert("Ralat");
                        console.log(data);
                        $("#logmasuk").val('Log Masuk');
                    }
                },
                error: function(err) {
                    alert("Error: " + err);
                    $("#logmasuk").val('Log Masuk');
                }
            });
        }
        return false;
    });
}

function onConfirm(button) {
    if(button == 1) { // If user select Yes, then exit
        navigator.app.exitApp();
    }
    else {
         return;
    }
}

function onBackKeyDown(e) {
    e.preventDefault();
    navigator.notification.confirm("Are you sure you want to exit?", onConfirm, "Confirmation", "Yes,No");
    //Prompt the user with the choice
}

function alertDismissed() {
    window.location.href = "tempahan.html";
}
