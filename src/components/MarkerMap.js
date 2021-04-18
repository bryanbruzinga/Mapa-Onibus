import React from "react";
import { Marker, Popup } from "react-leaflet";

const MarkerMap = ({ py, px, detalhes, icon }) => {
  return (
    <Marker position={[py, px]} icon={icon}>
      <Popup>{detalhes}</Popup>
    </Marker>
  );
};

export default MarkerMap;
