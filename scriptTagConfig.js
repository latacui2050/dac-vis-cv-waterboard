//Create element
const apiScriptTag = document.createElement("script")
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
//Set src attribute
apiScriptTag.setAttribute("src","https://maps.googleapis.com/maps/api/js?key=" + apiKey + "&callback=initMap&libraries=geometry&v=weekly");
apiScriptTag.setAttribute("type","module");

// Append to DOM
document.head.appendChild(apiScriptTag)