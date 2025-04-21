
import React, { useEffect, useRef, useState } from 'react';
// @ts-ignore
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

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
  const [mapboxToken, setMapboxToken] = useState<string>(() => {
    return localStorage.getItem('mapbox_token') || '';
  });
  const [showTokenDialog, setShowTokenDialog] = useState(!localStorage.getItem('mapbox_token'));
  const [map, setMap] = useState<mapboxgl.Map | null>(null);

  const initializeMap = () => {
    if (!mapNode.current || !mapboxToken) return;
    
    mapboxgl.accessToken = mapboxToken;

    try {
      const newMap = new mapboxgl.Map({
        container: mapNode.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom,
      });

      // Add controls
      newMap.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Add user location if supported
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          const { latitude, longitude } = pos.coords;
          new mapboxgl.Marker({ color: "blue" })
            .setLngLat([longitude, latitude])
            .setPopup(new mapboxgl.Popup().setText("You are here!"))
            .addTo(newMap);
          newMap.flyTo({ center: [longitude, latitude], zoom: 13 });
        });
      }

      // Add sample points for hospitals and government offices
      const samplePoints = [
        { type: 'hospital', name: 'City General Hospital', lng: lng + 0.02, lat: lat + 0.01 },
        { type: 'hospital', name: 'Medical Center', lng: lng - 0.015, lat: lat - 0.02 },
        { type: 'govt', name: 'Municipal Office', lng: lng + 0.01, lat: lat - 0.01 },
        { type: 'govt', name: 'District Administration', lng: lng - 0.02, lat: lat + 0.015 }
      ];

      samplePoints.forEach(point => {
        const color = point.type === 'hospital' ? "#FF5757" : "#4A7CFF";
        new mapboxgl.Marker({ color })
          .setLngLat([point.lng, point.lat])
          .setPopup(new mapboxgl.Popup().setHTML(`<strong>${point.name}</strong><br/>${point.type === 'hospital' ? 'Hospital' : 'Government Office'}`))
          .addTo(newMap);
      });

      setMap(newMap);
    } catch (error) {
      console.error("Error initializing map:", error);
      // Invalid token, clear it and show dialog
      if (error instanceof Error && error.message.includes('API key')) {
        localStorage.removeItem('mapbox_token');
        setShowTokenDialog(true);
      }
    }
  };

  useEffect(() => {
    if (mapboxToken) {
      initializeMap();
    }

    return () => {
      if (map) map.remove();
    };
  }, [mapboxToken]);

  const handleSaveToken = () => {
    localStorage.setItem('mapbox_token', mapboxToken);
    setShowTokenDialog(false);
    // Reinitialize map with the new token
    if (map) map.remove();
    initializeMap();
  };

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden bg-gray-100">
      <div ref={mapNode} className="absolute inset-0" />
      
      {!mapboxToken && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-white/80 text-red-600 font-semibold">
          Please set your Mapbox public token
        </div>
      )}

      <Dialog open={showTokenDialog} onOpenChange={setShowTokenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter your Mapbox Public Token</DialogTitle>
            <DialogDescription>
              To use the map functionality, you need to enter your Mapbox public token. 
              You can create one for free at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">mapbox.com</a>.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <Input
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              placeholder="Enter your Mapbox public token"
              className="w-full"
            />
            <Button onClick={handleSaveToken} className="w-full">Save Token</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Map;
