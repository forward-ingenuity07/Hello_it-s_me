// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);

        document.getElementById("ButtPress").onclick = function () {
            
            var onSuccess = function (position) {
                var posLat = -25.750;
                var testing;
                testing = ((Math.round((position.coords.latitude * Math.pow(10, 4)).toFixed(1)) / Math.pow(10, 4)).toFixed(4)) * 1;
                if (testing == posLat)
                /*{
                    alert('You have arrived');

                }*/
                
                alert(testing);
                /*alert('Latitude: ' + position.coords.latitude + '\n' +
                      'Longitude: ' + position.coords.longitude + '\n' +
                      'Altitude: ' + position.coords.altitude + '\n' +
                      'Accuracy: ' + position.coords.accuracy + '\n' +
                      'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
                      'Heading: ' + position.coords.heading + '\n' +
                      'Speed: ' + position.coords.speed + '\n' +
                      'Timestamp: ' + position.timestamp + '\n');*/
            };

            // onError Callback receives a PositionError object
            //
            function onError(error) {
                alert('code: ' + error.code + '\n' +
                      'message: ' + error.message + '\n');
            }

            navigator.geolocation.getCurrentPosition(onSuccess, onError);




        };
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        

    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();