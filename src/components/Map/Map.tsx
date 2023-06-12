import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import { MapWrapper } from './styles'
const Map = () => {
  return (
    <MapWrapper zIndex1>
      <MapContainer
        center={[40.8054, -74.0241]}
        zoom={14}
        scrollWheelZoom={false}
        style={{ height: '394px', width: '800px' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[40.8054, -74.0241]} draggable={true}>
          <Popup>Localização da ong</Popup>
        </Marker>
      </MapContainer>
    </MapWrapper>
  )
}

export default Map
