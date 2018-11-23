import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from 'store';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <h1>hi</h1>
      </Provider>
    );
  }
}

export default App;
