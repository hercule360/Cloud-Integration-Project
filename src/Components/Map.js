import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  static defaultProps = {
      // const location = {
  //   address: 'GoMyCode Hackerspace, 1 Place Tahar Haddad, 1 Tunis 1053, Tunis 1053.',
  //   lat: 37.42216,
  //   lng: -122.08427,
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key= '}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
    
  }

}

export default Map;
