//Information
  //Map, location, Views

var ourLoc;
var view;
var map;

//Initialize variables
function init() {
  //Initialize things here
  ourLoc = ol.proj.fromLonLat([-118.255074, 	34.142509]);

  view = new ol.View({
        center: ourLoc,
        zoom: 6 //We can adjust zoom levels later
  });

  map = new ol.Map({
    target: "map",
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM() //This is a required variable
      })
    ],
    loadTilesWhileAnimating: true,
    view: view
  });
}

//Animate the map
function panHome() {
  view.animate({
    center: ourLoc, //"home" location
    zoom: 6,
    duration: 2000  //two seconds
  });
}

//Goes to selected country
function panToLocation() {
  var countryName = document.getElementById("country-name").value;

  var query = "https://restcountries.eu/rest/v2/name" + countryName;
  query = query.replave(/ /g, "%20");
  alert(query);

  //makes request for country we want a query for
  var countryRequest = new XMLHttpRequest();
  countryRequest.open('GET', query, false);
  countryRequest.send();

  alert("Ready State " + countryRequest.readyState);
  alert("Status " + countryRequest.status);
  alert("Response " + countryRequest.responseText);

  var lon = 0.0;
  var lat = 0.0;
  var location = ol.proj.fromLonLat([lon, lat]);

  view.animate({
    center: location,
    zoom: 6,
    duration: 2000
  });
}

//Run the init function when the window loads
window.onload = init;
