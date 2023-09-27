import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

const Map = ({ coordinates }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const L = require('leaflet');

      if (!mapRef.current._leaflet_id) {
        const map = L.map(mapRef.current).setView([51.505, -0.09], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
        }).addTo(map);

        // Remova o marcador fixo existente
        map.eachLayer((layer: any) => {
          if (layer instanceof L.Marker) {
            map.removeLayer(layer);
          }
        });

        // Adicione marcadores com base nas coordenadas passadas
        coordinates.forEach((coord: { latitude: any; longitude: any; }) => {
          L.marker([coord.latitude, coord.longitude]).addTo(map)
            .bindPopup(`Latitude: ${coord.latitude}, Longitude: ${coord.longitude}`).openPopup();
        });
      }
    }
  }, [coordinates]);

  return (
    <div ref={mapRef} style={{ width: '50%', height: '60vh', marginLeft: '49%' }}></div>
  );
};

export default Map;
