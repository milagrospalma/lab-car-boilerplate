function initMap() {
  var center = {
    lat: -34.397,
    lng: 150.644
  };

  var map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 15
  });

  var marker = new google.maps.Marker({
    map: map,
    position: center
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      marker.setPosition(pos);
      map.setCenter(pos);
    });
  } else {
    console.log('error');
  }
}