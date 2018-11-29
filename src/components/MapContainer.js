import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer, Circle } from "react-leaflet";

class MainMap extends Component {
  render() {
    const position = [30, -90];
    const map = (
      <Map center={position} zoom={6}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | 2024 Eclipse Planner'
        />
        <Marker position={position}>
          <Popup>Nola</Popup>
        </Marker>
        <Circle center={position} radius={200000} />
      </Map>
    );
    return map;
  }
}

export default MainMap;
