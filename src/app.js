import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from 'store';

import Note from 'organisms/note';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Note />
      </Provider>
    );
  }
}

export default App;
