import React, { useRef, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const MapWithFixedCenter = (coords) => {
  const mapRef = useRef(null);
  const [userLocation, setUserLocation] = useState([0, 0]);

  const longitude = coords?.coords?.lon
  const latitude = coords?.coords?.lat

  console.log(longitude);
  console.log(latitude);

  useEffect(() => {
    setUserLocation([51.505, -0.09]); 
  }, []);

  return (
    <MapContainer center={userLocation} zoom={14} scrollWheelZoom={false} dragging={false} style={{ height: '100vh' }} ref={mapRef}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={userLocation}></Marker>
    </MapContainer>
  );
}

export default MapWithFixedCenter;