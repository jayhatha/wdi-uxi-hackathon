add all asks to map on main get route to '/map'
asks.forEach(function(ask) {
  if(ask.lng && ask.lat) {
    var marker = new mapboxgl.Marker()
    .setLngLat([ask.lng, ask.lat])
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML("<a href='/asks/" + ask.id + "'>" + ask.title + "</a>"))
    .addTo(map);
   markerArray.push(marker);
  }
});

hijack post route to reload map with new data based on selected tag
$(".filter-map").on('submit', function(e) {
  // prevent page refresh
  e.preventDefault();

  var newData = $(this).serialize();
  var url = $(this).attr('action');

  // async call to the server side post route, passing the current map state
  $.ajax({
    method: 'POST',
    url: url,
    data: newData
  }).done(function(data) {
    // server post route sends JSON data back with projects

    // remove markers from map
    markerArray.forEach(function(marker) {
      marker.remove();
    });

    // add markers for the filtered asks that were passed back
    data.ask.forEach(function(project) {
      if(ask.lng && ask.lat) {
       var marker = new mapboxgl.Marker()
        .setLngLat([project.lng, project.lat])
       .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
       .setHTML("<a href='/asks/" + ask.id + "'>" + ask.title + "</a>"))
       .addTo(map);
       markerArray.push(marker);
      }
    });
  });
});
