import React, { Component } from "react";
import axios from "axios";

export const MapContext = React.createContext({});

export class MapProvider extends Component {
  state = {
    test: "Test",
    eclipsePath: {}
  };

  async componentWillMount() {
    const res = await axios.get("http://localhost/eclipseAPI/index.php");
    this.setState({ eclipsePath: res.data });
  }

  render() {
    return (
      <MapContext.Provider
        value={{
          state: this.state
        }}
      >
        {this.props.children}
      </MapContext.Provider>
    );
  }
}
