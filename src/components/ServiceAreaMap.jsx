import { useEffect } from 'react';
import { MapContainer, TileLayer, Polygon, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix leaflet's broken default icon URLs in Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom branded marker
const createCityIcon = (isHQ = false) =>
  L.divIcon({
    className: '',
    html: `
      <div style="
        width: ${isHQ ? 14 : 11}px;
        height: ${isHQ ? 14 : 11}px;
        background: ${isHQ ? '#273327' : '#4a7c59'};
        border: 2.5px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 6px rgba(0,0,0,0.35);
      "></div>
    `,
    iconSize: [isHQ ? 14 : 11, isHQ ? 14 : 11],
    iconAnchor: [isHQ ? 7 : 5.5, isHQ ? 7 : 5.5],
  });

// Traced from the actual service area boundary in the image (lat, lng)
const serviceAreaPolygon = [
  [43.73, -116.63],  // NW above Middleton
  [43.73, -116.49],  // top — near Star/Hwy 16
  [43.73, -116.36],  // top — north of Eagle
  [43.67, -116.17],  // NE — north Boise
  [43.63, -116.15],  // E  — east Boise upper
  [43.59, -116.17],  // E  — east Boise lower
  [43.55, -116.21],  // SE — I-84 corridor
  [43.49, -116.37],  // S  — toward Kuna
  [43.46, -116.42],  // S  — Kuna bottom
  [43.49, -116.58],  // SW — south Nampa
  [43.52, -116.63],  // W  — west Nampa
  [43.65, -116.72],  // W  — west Caldwell
  [43.70, -116.72],  // NW — north Caldwell
];

const cities = [
  { name: 'Boise',      pos: [43.615,  -116.202], hq: true  },
  { name: 'Meridian',   pos: [43.612,  -116.391], hq: false },
  { name: 'Eagle',      pos: [43.696,  -116.354], hq: false },
  { name: 'Nampa',      pos: [43.541,  -116.563], hq: false },
  { name: 'Caldwell',   pos: [43.663,  -116.687], hq: false },
  { name: 'Star',       pos: [43.693,  -116.490], hq: false },
  { name: 'Middleton',  pos: [43.707,  -116.621], hq: false },
  { name: 'Kuna',       pos: [43.492,  -116.420], hq: false },
];

const center = [43.60, -116.42];

export default function ServiceAreaMap() {
  return (
    <div className="rounded-3xl overflow-hidden shadow-xl" style={{ height: '480px' }}>
      <MapContainer
        center={center}
        zoom={10}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
        zoomControl={true}
      >
        {/* Clean, muted map tiles */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {/* Service area shading */}
        <Polygon
          positions={serviceAreaPolygon}
          pathOptions={{
            color: '#4a7c59',
            weight: 2.5,
            opacity: 0.7,
            fillColor: '#4a7c59',
            fillOpacity: 0.15,
            dashArray: '6 4',
          }}
        />

        {/* City markers */}
        {cities.map((city) => (
          <Marker
            key={city.name}
            position={city.pos}
            icon={createCityIcon(city.hq)}
          >
            <Tooltip
              permanent
              direction="top"
              offset={[0, city.hq ? -10 : -8]}
              className="city-label"
            >
              {city.name}{city.hq ? ' ★' : ''}
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
