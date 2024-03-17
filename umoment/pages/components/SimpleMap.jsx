// File path: components/SimpleMap.js
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const SimpleMap = () => {
  return (
    <MapContainer center={[40.7128, -74.0060]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default SimpleMap;
