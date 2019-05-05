import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'; 
import {Popup, Icon} from 'semantic-ui-react' 
  const Marker = ({ text }) => (
    <Popup
      trigger={<Icon disabled name='map marker' size='huge'/>}
      content={text}
      basic
    />
  );
  const mapAPIKey = process.env.MAPS_API_KEY;

  class Map extends Component {
    static defaultProps = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    };
  
    render() {
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100%', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: mapAPIKey }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
           
          <Marker
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text={"You"}
          />
        
             {this.props.bars.map(bar => (
                <Marker
                lat={bar.lat}
                lng={bar.lng}
                text={bar.name}
              />
            ))}
          </GoogleMapReact>
        </div>
      );
    }
  }
  
  export default Map;