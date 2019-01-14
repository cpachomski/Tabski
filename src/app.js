import React, { Component } from "react";
import { Provider } from "react-redux";
import { ThemeProvider, css } from "styled-components";
import configureStore from "store";

import Sheet from "organisms/sheet";

const theme = {
  pieMenu: {
    container: css``,
    list: css`
      background-color: #000;
    `,
    item: css`
      background-color: #000;
    `,
    center: css`
      background: #333;
    `
  },
  slice: {
    container: css`
      background-color: #000;
      color: white;
      &:hover {
        background-color: #333;
      }
    `,
    content: css`
      font-size: 30px;
    `
  }
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={configureStore()}>
          <Sheet />
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
