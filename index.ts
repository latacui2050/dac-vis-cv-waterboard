/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// This example requires the Geometry library. Include the libraries=geometry
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=geometry">

// app.ts
// require('dotenv').config();
// import dotenv from 'dotenv';

// dotenv.config();

// import { readFileSync } from 'fs';

// const config = JSON.parse(readFileSync('./config.json'));

// const apiKey = config.apiKey;

// const apiKey = process.env.API_KEY;
// console.log(apiKey); // Output: your_api_key_here

console.log(import.meta.env.VITE_GOOGLE_MAPS_API_KEY);

// import {dac} from "./dbdac.js";
import {cvdac} from "./dbnotfl.js";
// console.log(dac[0].lat);

// import dac1 from "./config.json" assert { type: "json" };

const map = new google.maps.Map(
  document.getElementById("map") as HTMLElement,
  {
    center: { lat: 37.9577, lng: -121.2908 },
    zoom: 5.5,
  }
);
let markers: google.maps.Marker[] = [];
let markerscl: google.maps.Marker[] = [];

// let markColor: string = 'green';
// let a: number = 38.575764;
// let b: number = -121.478851;

let colors: string[] = ['red', 'magenta', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple', 'violet', 'brown'];


// let d: number = 0;
// Get a reference to the checkbox element by its ID or any other means
const checkbox = document.getElementById('filter') as HTMLInputElement;

// Assuming you have loaded a GeoJSON layer and added it to the map
const geojsonLayer = new google.maps.Data();

geojsonLayer.loadGeoJson("db1cv.geojson");

// geojsonLayer.loadGeoJson();

geojsonLayer.setMap(map); // Assuming 'map' is your Google Maps instance

// Function to remove the GeoJSON layer from the map
function removeGeoJSONLayer() {
    geojsonLayer.setMap(null); // Remove the layer from the map
}

 for (let i = 0; i < cvdac.length; i++) {

 const marker = new google.maps.Marker({
  position: {lat: cvdac[i].latitude, lng: cvdac[i].longitude},
  map,
  icon: {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: colors[-1],
    fillOpacity: 0.5,
    strokeColor: "white",
    strokeWeight: 0.5,
    scale: 3,
  },

        });
markers.push(marker);
}

// setMapOnAll(markers, null);

 for (let i = 0; i < cvdac.length; i++) {

 const marker = new google.maps.Marker({
  position: {lat: cvdac[i].latitude, lng: cvdac[i].longitude},
  map,
  icon: {
    path: google.maps.SymbolPath.CIRCLE,

    fillColor: colors[cvdac[i].clusterNo],
    fillOpacity: 0.5,
    strokeColor: "white",
    strokeWeight: 0.5,
    scale: 3,
  },

        });
markerscl.push(marker);
}

setMapOnAll(markerscl, null);


checkbox.addEventListener('change', (event) => {

  // Event handler function to be executed when the checkbox state changes
  if (checkbox.checked) {
      // // console.log('Checkbox is checked');
      // marker.setMap(null);
      // d = 0;
      setMapOnAll(markers, null);
      setMapOnAll(markerscl, map);
  } else {
      // // console.log('Checkbox is unchecked');
      // marker.setMap(map);
      // d = 20;
      setMapOnAll(markerscl, null);
      setMapOnAll(markers, map)
  }
  // marker.setMap(null);

  // marker.setPosition({lat: a, lng: b+d});

});

  // // Adds a marker to the map and push to the array.
  // function addMarker(position: google.maps.LatLng | google.maps.LatLngLiteral) {
  //   const marker = new google.maps.Marker({
  //     position,
  //     map,
  //     icon: {
  //       path: google.maps.SymbolPath.CIRCLE,
  //       // fillColor: resultColor,
  //       fillColor: colors[dac[i].clusterNo],
  //       fillOpacity: 0.2,
  //       strokeColor: "white",
  //       strokeWeight: 0.5,
  //       scale: 10,
  //     },
  //   });
  
  //   markers.push(marker);
  // }


function initMap(): void {
// function initMap(c: number): void {

  // map.data.loadGeoJson(
  //   // "https://storage.googleapis.com/mapsdevsite/json/google.json"
  //   "db1.geojson"
  // );


let d: number = 0;
// c = d;
// let marker = new google.maps.Marker({
//     map,
//     position: { lat: a, lng: b+c },
//     });

// const marker = new google.maps.Marker({
//   map,
//   position: { lat: a, lng: b },
//   });

// checkbox.addEventListener('change', (event) => {

//   // Event handler function to be executed when the checkbox state changes
//   if (checkbox.checked) {
//       // // console.log('Checkbox is checked');
//       // marker.setMap(null);
//       // d = 0;
//       setMapOnAll(markers, null);
//       setMapOnAll(markerscl, map);
//   } else {
//       // // console.log('Checkbox is unchecked');
//       // marker.setMap(map);
//       // d = 20;
//       setMapOnAll(markers, map);
//       setMapOnAll(markerscl, null)
//   }
//   // marker.setMap(null);

//   // marker.setPosition({lat: a, lng: b+d});

// });
  
//   const triangleCoords = [
//     { lat: 25.774, lng: -80.19 },
//     { lat: 18.466, lng: -66.118 },
//     { lat: 32.321, lng: -64.757 },
//   ];

//   const bermudaTriangle = new google.maps.Polygon({ paths: triangleCoords });

//   google.maps.event.addListener(map, "click", (e) => {
//     console.log(d);
//     const resultColor = google.maps.geometry.poly.containsLocation(
//       e.latLng,
//       bermudaTriangle
//     )
//       ? "blue"
//       : "red";

//     const resultPath = google.maps.geometry.poly.containsLocation(
//       e.latLng,
//       bermudaTriangle
//     )
//       ? // A triangle.
//         "m 0 -1 l 1 2 -2 0 z"
//       : google.maps.SymbolPath.CIRCLE;

//     // new google.maps.Marker({
//     //   position: e.latLng,
//     //   map,
//     //   icon: {
//     //     path: resultPath,
//     //     // fillColor: resultColor,
//     //     fillColor: markColor,
//     //     fillOpacity: 0.2,
//     //     strokeColor: "white",
//     //     strokeWeight: 0.5,
//     //     scale: 10,
//     //   },
//     // });
//   });
}


  
  // Sets the map on all markers in the array.
  function setMapOnAll(layer, map: google.maps.Map | null) {
    for (let i = 0; i < markers.length; i++) {
      layer[i].setMap(map);
    }
  }
  



declare global {
  interface Window {
    initMap: () => void;
  }
}

// declare global {
//   interface Window {
//     initMap: (c: number) => void;
//   }
// }
window.initMap = initMap;

export {};
