
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Default marker fix for Leaflet + Webpack
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

type MapProps = {
  lng?: number;
  lat?: number;
  zoom?: number;
};

const defaultPosition: [number, number] = [28.6448, 77.216721];

const hospitals = [
  { lat: 28.6548, lng: 77.236721, name: "City General Hospital" },
  { lat: 28.6248, lng: 77.201721, name: "Medical Center" },
];

const offices = [
  { lat: 28.6348, lng: 77.226721, name: "Municipal Office" },
  { lat: 28.6598, lng: 77.196721, name: "District Administration" },
];

const UserLocationMarker: React.FC = () => {
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
      () => {}
    );
  }, [map]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here!</Popup>
    </Marker>
  );
};

const Map: React.FC<MapProps> = ({
  lng = defaultPosition[1],
  lat = defaultPosition[0],
  zoom = 11,
}) => {
  const mapPoints = [
    ...hospitals.map((h) => ({
      ...h,
      type: "hospital" as const,
      position: [h.lat, h.lng] as [number, number],
    })),
    ...offices.map((o) => ({
      ...o,
      type: "govt" as const,
      position: [o.lat, o.lng] as [number, number],
    })),
  ];

  const center: [number, number] = [lat, lng];

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden bg-gray-100">
      <MapContainer
        center={center}
        zoom={zoom}
        className="absolute inset-0 w-full h-full z-0"
        scrollWheelZoom={true}
        style={{ minHeight: 384, width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        />
        <UserLocationMarker />
        {mapPoints.map((point, idx) => (
          <Marker
            key={idx}
            position={point.position}
            icon={
              point.type === 'hospital'
                ? new L.Icon({
                    iconUrl: "https://unpkg.com/leaflet-color-markers@1.1.0/img/marker-icon-red.png",
                    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41],
                  })
                : new L.Icon({
                    iconUrl: "https://unpkg.com/leaflet-color-markers@1.1.0/img/marker-icon-blue.png",
                    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41],
                  })
            }
          >
            <Popup>
              <strong>{point.name}</strong>
              <br />
              {point.type === "hospital"
                ? "Hospital"
                : "Government Office"}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
