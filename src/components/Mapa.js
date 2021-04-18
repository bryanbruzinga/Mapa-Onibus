import { MapContainer, TileLayer } from "react-leaflet";
import MarkerMap from "./MarkerMap";

const Mapa = ({ dataParada, latitude, longitude }) => {
  if (dataParada)
    return (
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {dataParada.map((item, index) => (
          <MarkerMap key={index} py={item.py} px={item.px} detalhes={item.np} />
        ))}
      </MapContainer>
    );
};

Mapa.defaultProps = {
  latitude: -23.5489,
  longitude: -46.6388,
};

export default Mapa;
