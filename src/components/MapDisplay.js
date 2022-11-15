import GoogleMapReact from 'google-map-react';
import { EnvironmentTwoTone } from '@ant-design/icons';

const MapDisplay = () => <h3><EnvironmentTwoTone /></h3>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 50.00242350556172, 
      lng: 8.272054595464294
    },
    zoom: 17
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEAPIKEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MapDisplay
          lat={50.00242350556172}
          lng={8.272054595464294}
        />
      </GoogleMapReact>
    </div>
  );
}