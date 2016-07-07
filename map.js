function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
      center: {lat: 50.008233, lng: 36.239398},
      zoom: 10
  });


  var iconUrl = 'http://maps.google.com/mapfiles/kml/paddle/red-stars.png';


  function addMarker(feature) {
            var marker = new google.maps.Marker({
              position: feature.position,
              icon: iconUrl,
              map: map
            });
          }
addMarker( {position: new google.maps.LatLng(50.008233, 36.239398)} );



}
