
import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

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
  // Create a static map URL using OpenStreetMap
  const staticMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.1}%2C${lat-0.1}%2C${lng+0.1}%2C${lat+0.1}&layer=mapnik&marker=${lat}%2C${lng}`;
  
  // Create a link to the full map
  const fullMapUrl = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=${zoom}/${lat}/${lng}`;
  
  return (
    <div className="space-y-4">
      <div className="relative w-full h-96 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
        <iframe 
          src={staticMapUrl}
          style={{ height: '100%', width: '100%', border: 'none' }}
          title="Map of hospitals and government offices"
          className="rounded-lg"
        ></iframe>
      </div>
      
      <div className="space-y-3">
        <div>
          <h3 className="font-medium text-gray-900">Nearby Hospitals</h3>
          <ul className="mt-2 space-y-2">
            {hospitals.map((hospital, index) => (
              <li key={`hospital-${index}`} className="flex items-start gap-2">
                <div className="h-4 w-4 mt-0.5 rounded-full bg-red-500 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">{hospital.name}</p>
                  <p className="text-sm text-gray-500">
                    Lat: {hospital.position[0]}, Lng: {hospital.position[1]}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-900">Nearby Government Offices</h3>
          <ul className="mt-2 space-y-2">
            {offices.map((office, index) => (
              <li key={`office-${index}`} className="flex items-start gap-2">
                <div className="h-4 w-4 mt-0.5 rounded-full bg-blue-500 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">{office.name}</p>
                  <p className="text-sm text-gray-500">
                    Lat: {office.position[0]}, Lng: {office.position[1]}
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
