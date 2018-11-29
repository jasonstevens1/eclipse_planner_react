import React, { Component } from "react";
import MapContainer from "./components/MapContainer";

class App extends Component {
  render() {
    return (
      <div id="map-container" style={{ width: "99em", height: "98em" }}>
        <MapContainer />
      </div>
    );
  }
}

export default App;
