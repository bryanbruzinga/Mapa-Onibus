import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Mapa = ({ data, latitude, longitude }) => {
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
      {/* {data.map((item) =>
        item.vs.map((saida, index) => {
          return (
            <Marker key={index} position={[saida.px, saida.py]}>
              {console.log(saida.px)}
              <Popup>Estou aqui.</Popup>
            </Marker>
          );
        })
      )} */}
    </MapContainer>
  );
};

Mapa.defaultProps = {
  latitude: -23.5489,
  longitude: -46.6388,
};

export default Mapa;
