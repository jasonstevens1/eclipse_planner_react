import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer, Circle } from "react-leaflet";
import { MapContext } from "../context/MapContext";

class MainMap extends Component {
  render() {
    const position = [32, -95];
    const map = (
      <MapContext.Consumer>
        {context => (
          <React.Fragment>
            <Map center={position} zoom={5}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | 2024 Eclipse Planner'
              />
              <Marker position={position}>
                <Popup>Nola</Popup>
              </Marker>
              <Circle center={position} radius={200000} />
            </Map>
            <div>{context.state.test}</div>
          </React.Fragment>
        )}
      </MapContext.Consumer>
    );
    return map;
  }
}

export default MainMap;
