import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class MapProvider extends Component {
  state = {
    test: "Test",
    eclipsePath: []
  };

  componentDidMount() {
    axios
      .get("http://localhost/eclipseAPI/index.php")
      .then(res => {
        this.setState({ eclipsePath: res.data.points });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
