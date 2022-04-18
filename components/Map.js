/* eslint-disable react/jsx-props-no-spreading */
import ReactMapGL from 'react-map-gl';
import { useState } from 'react';

function Map() {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/lorddoh/cl23ejoft000014na33o7q0dk"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(nextViewport) => setViewport(nextViewport)}
    />
  );
}

export default Map;
