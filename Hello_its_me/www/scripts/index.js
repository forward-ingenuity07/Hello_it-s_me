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
                var posLat = -25.750;
                var Latsi;
                Latsi = ((Math.round((position.coords.latitude * Math.pow(10, 4)).toFixed(1)) / Math.pow(10, 4)).toFixed(4)) * 1;
                /*if (testing == posLat)
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
                //var posLat = -25.750;
                var Longit;
                Longit = ((Math.round((position.coords.longitude * Math.pow(10, 4)).toFixed(1)) / Math.pow(10, 4)).toFixed(4)) * 1;
                /*if (testing == posLat)
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
                var posLat = -25.702;
                var posLon = 28.2379;
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
                true1 = 0;
                true2 = 0;
                for(i=0;i<=1;i++)   //Wanted to use a for loop to add and subtract tolerances
                {
                    t1 = t1 + 0.001;
                    if(t1==posLat)
                    {
                        true1 = 1;

                    }
                    t2 = t2 + 0.001;
                    if(t2==posLon)
                    {
                        true2 = 1;
                    }

                }

                t1 = Lat;
                t2 = Lon;

                for (i = 0; i <= 1; i++)   //Wanted to use a for loop to add and subtract tolerances
                {
                    t1 = t1 - 0.001;
                    if (t1 == posLat) {
                        true1 = 1;

                    }
                    t2 = t2 - 0.001;
                    if (t2 == posLon) {
                        true2 = 1;
                    }

                }
                //||
                //
                if(true1==1 && true2==1) 
                {
                    alert('You are in your room');

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