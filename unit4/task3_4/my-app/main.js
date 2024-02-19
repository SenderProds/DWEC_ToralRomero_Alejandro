import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import Draw from 'ol/interaction/Draw.js';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {fromLonLat} from 'ol/proj';
import {Vector as VectorLayer} from 'ol/layer';
import {Vector as VectorSource} from 'ol/source';


/*
if(navigator.geolocation){
  const map = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    view: new View({
      center: [0, 0],
      zoom: 2
    })
  });
  
  
  // Función para obtener la ubicación del usuario y agregar un marcador al mapa
  function mostrarLocalizacion() {
    
      navigator.geolocation.getCurrentPosition(function(position) {
        const lon = position.coords.longitude;
        const lat = position.coords.latitude;
  
        const userLocation = new Feature({
          geometry: new Point(fromLonLat([lon, lat]))
        });
  
        const vectorSource = new VectorSource({
          features: [userLocation]
        });
  
        const vectorLayer = new VectorLayer({
          source: vectorSource
        });
  
        map.addLayer(vectorLayer);
      }, function(error) {
        console.error('Error getting geolocation:', error);
        alert('Error getting geolocation: ' + error.message);
      });
    
  }
  
  // Llamar a la función para mostrar la ubicación del usuario después de que el mapa se haya cargado
  map.once('postrender', mostrarLocalizacion());
}else{
  alert('Su navegador no es compatible con la geolocalizacion');
}
*/



const raster = new TileLayer({
  source: new OSM(),
});

const source = new VectorSource({wrapX: false});

const vector = new VectorLayer({
  source: source,
});

const map = new Map({
  layers: [raster, vector],
  target: 'map',
  view: new View({
    center: [-11000000, 4600000],
    zoom: 4,
  }),
});

const typeSelect = document.getElementById('type');

let draw; // global so we can remove it later
function addInteraction() {
  const value = typeSelect.value;
  if (value !== 'None') {
    draw = new Draw({
      source: source,
      type: typeSelect.value,
    });
    console.log(source);
    console.log(draw);
    console.log(map);
    map.addInteraction(draw);
  }
}

/**
 * Handle change event.
 */
typeSelect.onchange = function () {
  map.removeInteraction(draw);
  addInteraction();
};

document.getElementById('undo').addEventListener('click', function () {
  draw.removeLastPoint();
});

addInteraction();

