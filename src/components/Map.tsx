
import React, { useEffect, useRef } from 'react';
// @ts-ignore
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = '<mapbox-public-token>'; // TODO: Replace with your Mapbox public token.

type MapProps = {
  lng?: number;
  lat?: number;
  zoom?: number;
};

const Map: React.FC<MapProps> = ({
  lng = 77.216721,
  lat = 28.6448,
  zoom = 10,
}) => {
  const mapNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapNode.current) return;
    mapboxgl.accessToken = MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: mapNode.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom,
    });

    // Add controls
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add user location if supported
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        new mapboxgl.Marker({ color: "blue" })
          .setLngLat([longitude, latitude])
          .setPopup(new mapboxgl.Popup().setText("You are here!"))
          .addTo(map);
        map.flyTo({ center: [longitude, latitude], zoom: 13 });
      });
    }

    return () => map.remove();
  }, [lng, lat, zoom]);

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden bg-gray-100">
      <div ref={mapNode} className="absolute inset-0" />
      {MAPBOX_TOKEN === '<mapbox-public-token>' && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-white/80 text-red-600 font-semibold">
          Please set your Mapbox public token in <code>src/components/Map.tsx</code>
        </div>
      )}
    </div>
  );
};

export default Map;
