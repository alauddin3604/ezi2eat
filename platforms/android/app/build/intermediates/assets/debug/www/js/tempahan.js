$(document).ready(function() {
    document.addEventListener("deviceready", onDeviceReady, false);
});

function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false);
    
    if(sessionStorage.getItem("noTelefon") === null) {
        window.location.href = "err_logmasuk.html";
    }

    var noTelefon = sessionStorage.getItem("noTelefon");
    var table = document.getElementById("jadual");

    $("#tempah").click(function() {
        var namaMakanan = $("#namaMakanan").val();
        var kuantiti = $("#kuantiti").val();
        var tarikh = $("#tarikh").val();

        var dataString = "namaMakanan="+namaMakanan+"&kuantiti="+kuantiti+"&tarikh="+tarikh+"&noTelefon="+noTelefon+"&tempah=";
        if ($.trim(namaMakanan).length > 0 & $.trim(kuantiti).length > 0 & $.trim(tarikh).length > 0) {
            $.ajax({
                type: "POST",
                url: "http://192.168.43.134/ez2eat-v2/tempahan.php",
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function() {
                    $("#tempah").val('Memuat...');
                },
                success: function(data) {
                    if(data == "success") {
                        alert("Tempahan anda berjaya dibuat : " + namaMakanan + " - " + kuantiti);
                        $("#tempah").val('Tempah');
                    }
                    else {
                        alert("Tempahan gagal dibuat.");
                        $("#tempah").val('Tempah');
                        console.log(data);
                    }
                }
            });
        }
        return false;
    });

    $("#logkeluar").click(function() {
        if(sessionStorage.getItem("noTelefon") !== null) {
            sessionStorage.clear();
        }
        
        window.location.href = "logkeluar.html";
    });

    $("#refresh").click(function() {
        var url = "http://192.168.43.134/ez2eat-v2/json.php"
        var dataString = "noTelefon="+noTelefon+"&refresh=";
        $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            crossDomain: true,
            cache: false,
            success: function(data) {
                if(data == "error") {
                    alert("Error");
                }
            }
        });

        $.getJSON(url, function(result) {
            console.log(result);
            $.each(result, function(i, field) {
                var namaMakanan = field.namaMakanan;
                var tarikh = field.tarikh;
                var status = field.status;
                $("#jadual").append("<td>namaMakanan=" + namaMakanan + "</td><td>&tarikh=" + tarikh + "</td><td>&status=" + status +"</td>");
            });
        });
    });
}

function onBackKeyDown(e) {
    e.preventDefault();
    navigator.notification.confirm("Are you sure you want to exit?", onConfirm, "Confirmation", "Yes,No");
    //Prompt the user with the choice
}

function onConfirm(button) {
    if(button == 1) { // If user select Yes, then exit
        navigator.app.exitApp();
    }
    else {
         return;
    }
}