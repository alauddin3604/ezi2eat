$(document).ready(function() {
    document.addEventListener("deviceready", onDeviceReady, false);
});

function onDeviceReady() {
    $("#logmasuk").submit(function() {
        var noTelefon = $("#noTelefon").val();
        var nama = $("#nama").val();
        var noBilik = $("#noBilik").val();
        var dataString = "noTelefon="+noTelefon+"&nama="+nama+"&noBilik="+noBilik+"&log_masuk=";
        if ($.trim(noTelefon).length > 0 & $.trim(nama).length > 0 & $.trim(noBilik).length > 0) {
            $.ajax({
                type: "POST",
                url: "http://192.168.43.134/ez2eat-v2/daftar.php",
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function() {
                    $("#log_masuk").val('Menyambung...');
                },
                success: function(data) {
                    if(data == "success") {
                        alert("Anda telah didaftarkan");
                        window.location.href = "breakfast.html";
                    }
                    else {
                        alert("Ralat");
                        console.log(data);
                        $("#log_masuk").val('Log Masuk');
                    }
                }
            });
        }
        return false;
    });
}
