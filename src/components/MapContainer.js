import React, { Component } from "react";
import {
  Map,
  Marker,
  Popup,
  TileLayer,
  Circle,
  Rectangle
} from "react-leaflet";
import { MapContext } from "../context/MapContext";

class MainMap extends Component {
  componentDidMount() {
    console.log("mounted");
  }

  render() {
    const position = [32, -95];
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
                <Popup>{context.state.eclipsePath.year}</Popup>
              </Marker>
              <Circle center={position} radius={200000} />
              <Rectangle
                bounds={[[49.11, -7.825], [-19.786666666667, -158.53166666667]]}
              />
            </Map>
          </React.Fragment>
        )}
      </MapContext.Consumer>
    );
  }
}

export default MainMap;
