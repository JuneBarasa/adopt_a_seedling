function initMap() {
 var image = {
 url:"images/trees.png",
 size: new google.maps.Size(71, 71),
 origin: new google.maps.Point(0, 0),
 anchor: new google.maps.Point(17, 34),
 scaledSize: new google.maps.Size(25, 25)
};


 var uluru = {lat: -1.8997, lng: 36.3010};
 var map = new google.maps.Map(document.getElementById('map'), {
   zoom: 8,
   center: uluru
 });

 var marker = new google.maps.Marker({
   position: uluru,
   icon:image,
   map: map


 });

 marker.addListener('click', toggleBounce);

//Animation for Marker
function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }


 google.maps.event.addListener(map, 'click', function(event) {
    placeMarker(event.latLng);
 });

 function placeMarker(location) {
   var marker = new google.maps.Marker({
     position: location,
     icon:image,
     map: map

   });
 }
