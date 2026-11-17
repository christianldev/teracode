'use client';

import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { CircleMarker, Popup, TileLayer } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer';

const position: [number, number] = [-2.1894, -79.8891];

const Map = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="bg-background-3 dark:bg-background-7 flex h-full w-full items-center justify-center text-sm text-gray-400">
        Cargando mapa de Guayaquil...
      </div>
    );
  }

  return (
    <MapContainer
      className="z-0 h-full w-full"
      center={position}
      zoom={12}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CircleMarker
        center={position}
        radius={12}
        pathOptions={{
          color: '#1E62F5',
          fillColor: '#1E62F5',
          fillOpacity: 0.75,
          weight: 3,
        }}
      >
        <Popup>
          <div className="text-center font-sans text-xs">
            <strong className="block text-sm text-slate-900">TeraCode Ecuador</strong>
            <span className="text-slate-600">Guayaquil • Desarrollo Web &amp; E-commerce</span>
          </div>
        </Popup>
      </CircleMarker>
    </MapContainer>
  );
};

export default Map;