import React from 'react'
import GoogleMapReact from 'google-map-react';

const SimpleMap = (props) => {
  const { hight } = props
  const center = { lat: 28.4595, lng: 77.0266 }
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: hight, width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAnNWUpM2zJQ5XOhMdURFW18PiZ4w6QxXw" }}
        defaultCenter={center}
        defaultZoom={8}
      >
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap
