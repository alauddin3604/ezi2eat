cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "id": "cordova-plugin-dialogs.notification",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/browser/notification.js",
        "id": "cordova-plugin-dialogs.notification_browser",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/mobi.moica.whatsapp/www/whatsapp.js",
        "id": "mobi.moica.whatsapp.whatsapp",
        "pluginId": "mobi.moica.whatsapp",
        "clobbers": [
            "cordova.plugins.Whatsapp"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-dialogs": "2.0.1",
    "mobi.moica.whatsapp": "0.0.1"
}
// BOTTOM OF METADATA
});