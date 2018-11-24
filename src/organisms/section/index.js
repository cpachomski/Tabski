import React, { Component, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Chord from 'organisms/chord';
import { SectionName, SectionControls } from './atoms';

const SectionChords = memo(({ sectionId, chords, tunings }) => (
  <>
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
  </>
));

class Section extends Component {
  static propTypes = {
    sectionId: PropTypes.number,
    chords: PropTypes.array,
    tunings: PropTypes.array,
    sectionName: PropTypes.string
  };

  render() {
    const { sectionId, chords, tunings, sectionName } = this.props;

    return (
      <>
        <SectionName value={sectionName} placeholder="Section Name" />
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
