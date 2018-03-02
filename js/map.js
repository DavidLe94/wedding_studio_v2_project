// JavaScript Document
function myMap() {
  var myCenter = new google.maps.LatLng(10.8278871,106.69120889999999);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 5};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
}
