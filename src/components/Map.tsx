
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default icon issues in Leaflet with webpack
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Define marker icons
const hospitalIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet-color-markers@1.1.0/img/marker-icon-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const govtIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet-color-markers@1.1.0/img/marker-icon-blue.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

type MapProps = {
  lng?: number;
  lat?: number;
  zoom?: number;
};

// Data for map markers
const hospitals = [
  { position: [28.6548, 77.236721] as [number, number], name: "City General Hospital" },
  { position: [28.6248, 77.201721] as [number, number], name: "Medical Center" },
];

const offices = [
  { position: [28.6348, 77.226721] as [number, number], name: "Municipal Office" },
  { position: [28.6598, 77.196721] as [number, number], name: "District Administration" },
];

// Component to get and show user location
function UserLocationMarker() {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const map = useMap();

  useEffect(() => {
    if (!navigator.geolocation) return;
    
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userPos: [number, number] = [pos.coords.latitude, pos.coords.longitude];
        setPosition(userPos);
        map.setView(userPos, 13);
      },
      () => {
        console.log("Could not get user location");
      }
    );
  }, [map]);

  if (!position) return null;
  
  return (
    <Marker position={position}>
      <Popup>You are here!</Popup>
    </Marker>
  );
}

const Map: React.FC<MapProps> = ({
  lat = 28.6448,
  lng = 77.216721,
  zoom = 11,
}) => {
  // Default center position
  const defaultPosition: [number, number] = [lat, lng];
  
  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden bg-gray-100">
      <MapContainer
        style={{ height: '100%', width: '100%' }}
        center={defaultPosition}
        zoom={zoom}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <UserLocationMarker />
        
        {/* Hospital markers */}
        {hospitals.map((hospital, index) => (
          <Marker 
            key={`hospital-${index}`} 
            position={hospital.position}
            icon={hospitalIcon}
          >
            <Popup>
              <strong>{hospital.name}</strong><br />Hospital
            </Popup>
          </Marker>
        ))}
        
        {/* Government office markers */}
        {offices.map((office, index) => (
          <Marker 
            key={`office-${index}`} 
            position={office.position}
            icon={govtIcon}
          >
            <Popup>
              <strong>{office.name}</strong><br />Government Office
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
