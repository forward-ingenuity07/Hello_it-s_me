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

        document.getElementById("Latti").onclick = function () {
            
            var onSuccess = function (position) {
                var HomLat = -25.750;
                var Latsi;
                Latsi = ((Math.round((position.coords.latitude * Math.pow(10, 4)).toFixed(1)) / Math.pow(10, 4)).toFixed(4)) * 1;
                /*if (testing == HomLat)
                {
                    alert('You have arrived');

                }*/
                
                alert(Latsi);
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
        //Longitude
        document.getElementById("Longi").onclick = function () {

            var onSuccess = function (position) {
                //var HomLat = -25.750;
                var Longit;
                Longit = ((Math.round((position.coords.longitude * Math.pow(10, 4)).toFixed(1)) / Math.pow(10, 4)).toFixed(4)) * 1;
                /*if (testing == HomLat)
                {
                    alert('You have arrived');

                }*/

                alert(Longit);
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

        //Where am I
        document.getElementById("posi").onclick = function () {

            var onSuccess = function (position) {
                var HomLat = -25.7502*1;
                var HomLon = 28.2379 * 1;
                var LabLat = -25.7546*1;
                var LabLon = 28.2281 * 1;
                var LibLat = -25.7554 * 1;
                var LibLon = 28.2305 * 1;
                var ENG3Lat = -25.7541;
                var ENG3Lon = 28.2281;
                var Lat;
                var Lon;
                var t1;
                var t2;
                var true1;
                var true2;
                Lon = ((Math.round((position.coords.longitude * Math.pow(10, 4)).toFixed(1)) / Math.pow(10, 4)).toFixed(4)) * 1;
                Lat = ((Math.round((position.coords.latitude * Math.pow(10, 4)).toFixed(1)) / Math.pow(10, 4)).toFixed(4)) * 1;
                t1=Lat;
                t2 = Lon;
                
                if ((Lat == HomLat || Lat == HomLat + 0.001 || Lat == HomLat + 0.002 || Lat == HomLat - 0.001 || Lat == HomLat - 0.002) && (Lon == HomLon || Lon == HomLon+0.001 || Lon == HomLon+0.002 || Lon == HomLon-0.001 || Lon == HomLon-0.002)) 
                {
                    alert('You are in your room');

                }

               else if ((Lat == LabLat || Lat == LabLat + 0.001 || Lat == LabLat - 0.001) && (Lon == LabLon || Lon == LabLon + 0.001 || Lon == LabLon - 0.001)) {
                    alert('You are in the ENG-3 Labs(A-B-C)');

               }

               else if ((Lat == LibLat || Lat == LibLat + 0.001 || Lat == LibLat - 0.001) && (Lon == LibLon || Lon == LibLon + 0.001 || Lon == LibLon - 0.001)) {
                   alert('You are in the Study centre');

               }

               else if ((Lat == ENG3Lat || Lat == ENG3Lat + 0.001 || Lat == ENG3Lat - 0.001) && (Lon == ENG3Lon || Lon == ENG3Lon + 0.001 || Lon == ENG3Lon + 0.002 || Lon == ENG3Lon - 0.001)) {
                   alert('You are in the Engineering 3 building');

               }
                else
                {
                    alert('Position not recognised');

                }
                //else if()
                //alert(Latsi);
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