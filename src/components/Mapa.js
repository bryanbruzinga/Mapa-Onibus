import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Mapa = () => {
    return (
        <MapContainer center={[-23.5489, -46.6388]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-23.5489, -46.6388]}>
          <Popup>
            Estou aqui.
          </Popup>
        </Marker>
      </MapContainer>
    )
}

export default Mapa
