/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import Map, { Marker, Popup, GeolocateControl } from 'react-map-gl';
import { useState, useEffect } from 'react';
import getCenter from 'geolib/es/getCenter';
import 'mapbox-gl/dist/mapbox-gl.css';
import Image from 'next/image';

function Mapbox({ results, selectedPop, setSelectedPop }) {
  const points = results?.map((e) => e.puntos);

  const arr = [];

  for (let i = 0; i < points?.length; i += 1) {
    points[i].forEach((e) => {
      arr.push({
        title: e.name,
        image: e.image,
        longitude: e.long,
        latitude: e.lat,
      });
    });
  }

  const center = getCenter(arr);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 6,
    longitude: -75,
    zoom: 6.5,
  });

  useEffect(() => {
    if (center) {
      setViewport({
        ...viewport,
        latitude: center?.latitude,
        longitude: center?.longitude,
        zoom: results.length === 1 ? 17 : 6.5,
      });
    }
  }, [results]);

  return (
    <>
      <Map
        mapStyle={process.env.NEXT_PUBLIC_MAPBOX_MAPSTYLE}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESSTOKEN}
        {...viewport}
        onMove={(e) => setViewport(e.viewState)}
      >
        {arr.map((e) => (
          <div key={`${e.latitude}${Math.random()}`}>
            <Marker
              longitude={e.longitude}
              latitude={e.latitude}
              anchor="bottom"
            >
              <p
                onClick={() => {
                  setSelectedPop(e.latitude);
                  if (selectedPop === e.latitude) {
                    setSelectedPop(null);
                  }
                }}
              >
                🐝
              </p>
            </Marker>
          </div>
        ))}
        {arr.map(
          (e) =>
            selectedPop === e.latitude && (
              <Popup
                key={`${e.longitude}${Math.random()}`}
                onClose={() => {}}
                latitude={e.latitude}
                longitude={e.longitude}
                closeOnClick={false}
                closeOnMove={false}
              >
                <div
                  onClick={() => {
                    setSelectedPop(null);
                  }}
                >
                  <div className="popImage">
                    <Image
                      src={e.image}
                      width="200px"
                      height="200px"
                      objectFit="cover"
                    />
                  </div>
                  <span>{`Punto: ${e.title} 🍯`}</span>
                </div>
              </Popup>
            )
        )}
        <GeolocateControl />
      </Map>
      <style jsx>{`
        p {
          font-size: 1.5rem;
          animation: bounce 1.2s ease;
          cursor: pointer;
        }

        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-16px);
          }
          60% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </>
  );
}

export default Mapbox;
