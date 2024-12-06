// Import React and Google Maps components
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MyMapComponent = () => {
  // Define the map container style
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  // Define the initial center of the map
  const center = {
    lat: 37.7749, // Latitude for San Francisco, for example
    lng: -122.4194, // Longitude for San Francisco
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Example of adding a marker */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMapComponent;
