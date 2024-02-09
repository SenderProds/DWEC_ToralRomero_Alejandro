import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {fromLonLat} from 'ol/proj';
import {Vector as VectorLayer} from 'ol/layer';
import {Vector as VectorSource} from 'ol/source';


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


