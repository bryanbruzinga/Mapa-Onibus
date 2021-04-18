import React from "react";
import { Marker, Popup } from "react-leaflet";

const MarkerMap = ({ py, px, detalhes }) => {
  return (
    <Marker position={[py, px]}>
      <Popup>{detalhes}</Popup>
    </Marker>
  );
};

export default MarkerMap;
