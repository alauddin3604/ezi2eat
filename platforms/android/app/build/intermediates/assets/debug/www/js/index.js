$(document).ready(function() {
    document.addEventListener("deviceready", onDeviceReady, false);
});

function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false); // For back button event
}

function onBackKeyDown(e) {
    e.preventDefault();
    navigator.notification.confirm("Are you sure you want to exit?", onConfirmExit, "Confirmation", "Yes,No");
}

function onConfirmExit(button) {
    if(button == 1) { // If the user selected Yes, quit the app
        navigator.app.exitApp();
    }
    else {
        return; // Otherwise, return
    }
}
