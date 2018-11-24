import React, { Component, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Chord from 'organisms/chord';

const SectionName = styled.input``;
const SectionControls = styled.div``;

const SectionChords = memo(({ sectionId, chords, tunings }) => (
  <>
    {chords &&
      chords.length > 0 &&
      chords.map((chord, i) => (
        <Chord sectionId={sectionId} chordId={i} tunings={tunings} {...chord} />
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
        <SectionName value={sectionName} />
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
