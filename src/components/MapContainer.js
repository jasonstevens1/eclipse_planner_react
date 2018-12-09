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
                <Popup>{console.log(context.state.eclipsePath)}</Popup>
              </Marker>
              <Circle center={position} radius={200000} />
              <Rectangle
                bounds={[[50.11, -7.825], [-19.7866666667, -158.531666667]]}
              />
            </Map>
          </React.Fragment>
        )}
      </MapContext.Consumer>
    );
  }
}

export default MainMap;
