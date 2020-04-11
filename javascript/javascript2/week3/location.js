
const locationButton = document.getElementById('button2');
const findMyLocation = function() {

          navigator.geolocation.getCurrentPosition(function(position) {
          console.log(`This is the latitude ${position.coords.latitude}`);
          console.log(`This is the longitude ${position.coords.longitude}`);
        });
      };


locationButton.addEventListener("click",findMyLocation);

      function initMap() {
        const map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -55.6932659, lng: 55.6932659},
          zoom: 8
        });
      }

     