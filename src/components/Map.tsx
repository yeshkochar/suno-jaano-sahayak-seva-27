
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Navigation, Compass } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type MapProps = {
  lng?: number;
  lat?: number;
  zoom?: number;
};

// Data for map markers we'll use in the static image
const hospitals = [
  { position: [28.6548, 77.236721], name: "City General Hospital" },
  { position: [28.6248, 77.201721], name: "Medical Center" },
];

const offices = [
  { position: [28.6348, 77.226721], name: "Municipal Office" },
  { position: [28.6598, 77.196721], name: "District Administration" },
];

const Map: React.FC<MapProps> = ({
  lat = 28.6448,
  lng = 77.216721,
  zoom = 11,
}) => {
  const { toast } = useToast();
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [staticMapUrl, setStaticMapUrl] = useState("");
  const [fullMapUrl, setFullMapUrl] = useState("");
  
  // Function to get the user's current location
  const getUserLocation = () => {
    setLoading(true);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          
          setUserLocation({ lat: userLat, lng: userLng });
          
          // Update map URLs with the user's location
          setStaticMapUrl(`https://www.openstreetmap.org/export/embed.html?bbox=${userLng-0.1}%2C${userLat-0.1}%2C${userLng+0.1}%2C${userLat+0.1}&layer=mapnik&marker=${userLat}%2C${userLng}`);
          setFullMapUrl(`https://www.openstreetmap.org/?mlat=${userLat}&mlon=${userLng}#map=${zoom}/${userLat}/${userLng}`);
          
          setLoading(false);
          toast({
            title: "Location found",
            description: "Your current location has been set on the map",
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          setLoading(false);
          toast({
            title: "Location error",
            description: "Could not retrieve your location. Using default location.",
            variant: "destructive"
          });
          
          // Set default URLs if geolocation fails
          setStaticMapUrl(`https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.1}%2C${lat-0.1}%2C${lng+0.1}%2C${lat+0.1}&layer=mapnik&marker=${lat}%2C${lng}`);
          setFullMapUrl(`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=${zoom}/${lat}/${lng}`);
        },
        { timeout: 10000, enableHighAccuracy: true }
      );
    } else {
      setLoading(false);
      toast({
        title: "Geolocation not supported",
        description: "Your browser does not support geolocation.",
        variant: "destructive"
      });
      
      // Set default URLs if geolocation is not supported
      setStaticMapUrl(`https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.1}%2C${lat-0.1}%2C${lng+0.1}%2C${lat+0.1}&layer=mapnik&marker=${lat}%2C${lng}`);
      setFullMapUrl(`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=${zoom}/${lat}/${lng}`);
    }
  };
  
  // Calculate distances from user location to points of interest
  const calculateDistance = (point: number[]) => {
    if (!userLocation) return null;
    
    // Convert latitude and longitude from degrees to radians
    const lat1 = userLocation.lat * Math.PI / 180;
    const lon1 = userLocation.lng * Math.PI / 180;
    const lat2 = point[0] * Math.PI / 180;
    const lon2 = point[1] * Math.PI / 180;
    
    // Haversine formula
    const dlon = lon2 - lon1;
    const dlat = lat2 - lat1;
    const a = Math.sin(dlat/2)**2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon/2)**2;
    const c = 2 * Math.asin(Math.sqrt(a));
    const r = 6371; // Radius of earth in kilometers
    
    // Calculate the distance
    return (c * r).toFixed(2);
  };
  
  // Initialize map on component mount
  useEffect(() => {
    // Set default URLs initially
    setStaticMapUrl(`https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.1}%2C${lat-0.1}%2C${lng+0.1}%2C${lat+0.1}&layer=mapnik&marker=${lat}%2C${lng}`);
    setFullMapUrl(`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=${zoom}/${lat}/${lng}`);
    
    // Try to get user location on mount
    getUserLocation();
  }, []);
  
  return (
    <div className="space-y-4">
      <div className="relative w-full h-96 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-desi-blue"></div>
          </div>
        ) : (
          <iframe 
            src={staticMapUrl}
            style={{ height: '100%', width: '100%', border: 'none' }}
            title="Map of hospitals and government offices"
            className="rounded-lg"
          ></iframe>
        )}
        
        <div className="absolute top-3 right-3 flex gap-2">
          <Button 
            variant="secondary" 
            size="sm" 
            className="bg-white shadow-md hover:bg-gray-100" 
            onClick={getUserLocation}
          >
            <Compass className="h-4 w-4 mr-1" />
            Find My Location
          </Button>
        </div>
      </div>
      
      <div className="space-y-3">
        <div>
          <h3 className="font-medium text-gray-900 flex items-center gap-2">
            <Navigation className="h-4 w-4 text-red-500" />
            Nearby Hospitals
            {userLocation && <span className="text-sm text-gray-500 font-normal">(showing distance from your location)</span>}
          </h3>
          <ul className="mt-2 space-y-2">
            {hospitals.map((hospital, index) => (
              <li key={`hospital-${index}`} className="flex items-start gap-2">
                <div className="h-4 w-4 mt-0.5 rounded-full bg-red-500 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">{hospital.name}</p>
                  <p className="text-sm text-gray-500">
                    {userLocation 
                      ? `${calculateDistance(hospital.position)} km away` 
                      : `Lat: ${hospital.position[0]}, Lng: ${hospital.position[1]}`}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-900 flex items-center gap-2">
            <Navigation className="h-4 w-4 text-blue-500" />
            Nearby Government Offices
            {userLocation && <span className="text-sm text-gray-500 font-normal">(showing distance from your location)</span>}
          </h3>
          <ul className="mt-2 space-y-2">
            {offices.map((office, index) => (
              <li key={`office-${index}`} className="flex items-start gap-2">
                <div className="h-4 w-4 mt-0.5 rounded-full bg-blue-500 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">{office.name}</p>
                  <p className="text-sm text-gray-500">
                    {userLocation 
                      ? `${calculateDistance(office.position)} km away` 
                      : `Lat: ${office.position[0]}, Lng: ${office.position[1]}`}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <Button className="w-full gap-2" variant="outline" onClick={() => window.open(fullMapUrl, '_blank')}>
        Open in OpenStreetMap
        <ExternalLink className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Map;
