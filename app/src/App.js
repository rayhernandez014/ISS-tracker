import { useState } from 'react'
import locationService from './services/location'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

function App() {

  const [location, setLocation] = useState(null)

  const getCoordinates = async () => {
    const result = await locationService.getLocation()
    const coordinates = result.coordinates.reverse()
    setLocation(coordinates)
  }

  setTimeout(() => getCoordinates(), 10000)

  const mapStyle = {
    width: '100vw',
    height: '100vh'
  }

  if (location) {
    return (
      <MapContainer center={location} zoom={5} scrollWheelZoom={false} style={mapStyle}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={location}>
        </Marker>
      </MapContainer>
    )
  }
  else {
    return (
      <div>
        loading icon
      </div>
    )
  }
}

export default App
