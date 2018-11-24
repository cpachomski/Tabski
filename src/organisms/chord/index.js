import React, { Component, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Note from 'organisms/note';

const Column = styled.div``;
const Row = styled.div`
  display: flex;
`;

const ChordNotes = memo(({ chordId, sectionId, notes }) => (
  <Column>
    {notes &&
      notes.length > 0 &&
      notes.map((note, i) => (
        <Note chordId={chordId} sectionId={sectionId} noteId={i} {...note} />
      ))}
  </Column>
));

class Chord extends Component {
  static propTypes = {
    sectionId: PropTypes.number,
    chordId: PropTypes.number,
    notes: PropTypes.array,
    tunings: PropTypes.array
  };

  state = {
    tuningIsVisible: false
  };

  render() {
    const { tuningIsVisible } = this.state;
    const { sectionId, chordId, notes, tunings } = this.props;
    console.log(`Tunings for section${sectionId}: ${JSON.stringify(tunings)}`);

    return (
      <Row>
        {tuningIsVisible && <div>Tunings</div>}
        <ChordNotes chordId={chordId} sectionId={sectionId} notes={notes} />
      </Row>
    );
  }
}

export default connect()(Chord);
