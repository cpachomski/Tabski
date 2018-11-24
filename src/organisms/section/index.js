import React, { Component, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { SET_SECTION_NAME } from 'actions';

import Chord from 'organisms/chord';
import { Row, SectionName, SectionControls } from './atoms';

const SectionChords = memo(({ sectionId, chords, tunings }) => (
  <Row>
    {chords &&
      chords.length > 0 &&
      chords.map((chord, i) => (
        <Chord
          key={`s:${sectionId}-c:${i}`}
          sectionId={sectionId}
          chordId={i}
          tunings={tunings}
          {...chord}
        />
      ))}
  </Row>
));

class Section extends Component {
  static propTypes = {
    sectionId: PropTypes.number,
    chords: PropTypes.array,
    tunings: PropTypes.array,
    sectionName: PropTypes.string
  };

  render() {
    const { sectionId, chords, tunings, sectionName, dispatch } = this.props;

    return (
      <>
        <SectionName
          value={sectionName}
          placeholder="Section Name"
          onChange={e =>
            dispatch({
              type: SET_SECTION_NAME,
              sectionId,
              sectionName: e.target.value
            })
          }
        />
        <SectionChords
          sectionId={sectionId}
          chords={chords}
          tunings={tunings}
        />
        <SectionControls />
      </>
    );
  }
}

export default connect()(Section);
