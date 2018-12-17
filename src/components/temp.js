import React, { Component } from "react";
import { MapContext } from "../context/MapContext";
import {
  Map,
  Marker,
  Popup,
  TileLayer,
  Circle,
  Rectangle
} from "react-leaflet";

class MainMap extends Component {
  render() {
    const position = [32, -95];
    const position2 = [-4.341, -145.49];

    return (
      <MapContext.Consumer>
        {context => (
          <React.Fragment>
            <Map center={position} zoom={5}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | 2024 Eclipse Planner'
              />
              <Marker position={position}>
                <Popup>{context.state.eclipsePath.points}</Popup>
              </Marker>
              <Marker position={position2}>
                <Popup>{context.state.test}</Popup>
              </Marker>
              <Marker position={[-2.451, -140.03]}>
                <Popup>Test</Popup>
              </Marker>

              <Circle center={position} radius={200000} />
            </Map>
          </React.Fragment>
        )}
      </MapContext.Consumer>
    );
  }
}

export default MainMap;
