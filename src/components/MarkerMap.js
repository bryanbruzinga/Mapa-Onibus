import React from "react";
import { Marker, Popup } from "react-leaflet";
import { GET_PREVISAO_PARADA } from "../api";

const MarkerMap = ({ py, px, nomeParada, codParada, icon }) => {
  const [previsao, setPrevisao] = React.useState(null);

  function puxarPrevisaoParada(codParada) {
    if (codParada != null) {
      const { url, options } = GET_PREVISAO_PARADA(codParada);
      fetch(url, options)
        .then((r) => r.json())
        .then((json) => setPrevisao(json.p));
    }
  }

  return (
    <Marker
      position={[py, px]}
      icon={icon}
      onClick={puxarPrevisaoParada(codParada)}
    >
      <Popup>{nomeParada}</Popup>
    </Marker>
  );
};

export default MarkerMap;
