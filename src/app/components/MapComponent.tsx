// components/MapComponent.tsx
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface MapComponentProps {
  lat: number;
  lng: number;
}

const containerStyle = {
  width: '100%',
  height: '400px',
};

const MapComponent: React.FC<MapComponentProps> = ({ lat, lng }) => {
  const center = { lat, lng };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
