import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "store";

import Sheet from "organisms/sheet";

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Sheet />
      </Provider>
    );
  }
}

export default App;
