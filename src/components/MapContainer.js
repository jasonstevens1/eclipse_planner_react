import React, { Component } from "react";
import { Consumer } from "../context/MapContext";
import {
  Map,
  Marker,
  Popup,
  TileLayer,
  Circle,
  Rectangle,
  Polyline
} from "react-leaflet";
import Spinner from "./Spinner";

class MainMap extends Component {
  render() {
    const position = [32, -95];
    const position2 = [-4.341, -145.49];

    return (
      <Consumer>
        {value => {
          const { eclipsePath } = value;
          if (eclipsePath === undefined || eclipsePath.length === 0) {
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                <Map center={position} zoom={5}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | 2024 Eclipse Planner'
                  />

                  {eclipsePath.map(point => (
                    <Marker key={point[0]} position={[point[1], point[2]]}>
                      {point[0]}
                    </Marker>
                  ))}
                </Map>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default MainMap;
