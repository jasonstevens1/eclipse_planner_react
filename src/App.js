import React, { Component } from "react";
import { MapProvider } from "./context/MapContext";
import MapContainer from "./components/MapContainer";

class App extends Component {
  render() {
    return (
      <MapProvider>
        <div id="map-container" style={{ width: "99em", height: "98em" }}>
          <MapContainer />
        </div>
      </MapProvider>
    );
  }
}

export default App;
