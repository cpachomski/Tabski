import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import NoteSelector from "../note-selector";
import { Square, Line, Dot } from "./atoms";

class Note extends Component {
  static propTypes = {
    fret: PropTypes.number
  };

  state = {
    isSelectorVisible: false,
    isHovered: false
  };

  render() {
    const { fret } = this.props;
    const { isHovered, isSelectorVisible } = this.state;

    return (
      <Square
        onMouseEnter={() =>
          this.setState({
            isHovered: true
          })
        }
        onMouseLeave={() => this.setState({ isHovered: false })}
      >
        <Line isHovered={isHovered} />
        {fret && <Dot>{fret}</Dot>}
        {isSelectorVisible && <NoteSelector />}
      </Square>
    );
  }
}

export default connect()(Note);
