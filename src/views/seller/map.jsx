// Map.jsx
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map = ({ location, onLocationUpdate }) => {
  const initialPosition = [24.8900002, 67.0557045];
  const [markerPosition, setMarkerPosition] = useState(initialPosition);

  const customIcon = new L.Icon({
    iconUrl: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const handleMarkerDragend = (e) => {
    setMarkerPosition([e.target._latlng.lat, e.target._latlng.lng]);
    onLocationUpdate(e.target._latlng.lat, e.target._latlng.lng);
  };

  const handleSetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setMarkerPosition([position.coords.latitude, position.coords.longitude]);
          onLocationUpdate(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser');
    }
  };

  function LocationMarker() {
    const map = useMapEvent({
      click() {
        map.locate();
      },
      locationfound(e) {
        setMarkerPosition([e.latlng.lat, e.latlng.lng]);
        onLocationUpdate(e.latlng.lat, e.latlng.lng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return <Marker draggable={true} position={markerPosition} icon={customIcon} eventHandlers={{ dragend: handleMarkerDragend }} />;
  }

  return (
    <div style={{ width: '150vw', height: '200vh' }}>
      <h1>Map</h1>
      <MapContainer center={markerPosition} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker />
      </MapContainer>
      <button style={{backgroundColor: 'blue', color: 'white', height: '50px', width: '50px', fontSize: '30px', display:'flex', alignItems:'center', justifyContent:'center' }} onClick={handleSetCurrentLocation}>
        <i className="fa-solid fa-location-crosshairs"></i>
      </button>
      <p>Marker Position: {JSON.stringify(markerPosition)}</p>
    </div>
  );
};

export default Map;
