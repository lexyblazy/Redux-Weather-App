import React, { Component } from "react";
import { Map, GoogleApiWrapper,Marker} from "google-maps-react";

const style = {
  width: "250px",
  height: "100px"
};

class MapContainer extends Component {
  render() {
    const { lat, lon } = this.props;

    return (
      <Map
        style={style}
        google={this.props.google}
        initialCenter={{
          lat: lat,
          lng: lon
        }}
        zoom={8}
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBfVzwe0LByaEtUzq7EDvITkYTyAvIAKSg"
})(MapContainer);
