import React, { memo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SET_ACTIVE_NOTE_SELECTOR } from "actions";

import NoteSelector from "../note-selector";
import { Square, Line, Dot } from "./atoms";

function isActiveNoteSelector(activeNoteSelector, sectionId, chordId, noteId) {
  if (!activeNoteSelector) {
    return false;
  }

  return (
    activeNoteSelector.sectionId === sectionId &&
    activeNoteSelector.chordId === chordId &&
    activeNoteSelector.noteId === noteId
  );
}

function areEqual(prevProps, nextProps) {
  return (
    isActiveNoteSelector(
      prevProps.activeNoteSelector,
      prevProps.sectionId,
      prevProps.chordId,
      prevProps.noteId
    ) ===
      isActiveNoteSelector(
        nextProps.activeNoteSelector,
        nextProps.sectionId,
        nextProps.chordId,
        nextProps.noteId
      ) && prevProps.fret === nextProps.fret
  );
}

const Note = memo(
  ({ activeNoteSelector, sectionId, chordId, noteId, fret, dispatch }) => {
    return (
      <Square
        onMouseDown={() =>
          dispatch({
            type: SET_ACTIVE_NOTE_SELECTOR,
            sectionId,
            chordId,
            noteId
          })
        }
      >
        <Line />
        {fret && <Dot>{fret}</Dot>}
        {activeNoteSelector &&
          isActiveNoteSelector(
            activeNoteSelector,
            sectionId,
            chordId,
            noteId
          ) && (
            <NoteSelector
              sectionId={sectionId}
              chordId={chordId}
              noteId={noteId}
            />
          )}
      </Square>
    );
  },
  areEqual
);

Note.propTypes = {
  sectionId: PropTypes.number,
  chordId: PropTypes.number,
  noteId: PropTypes.number,
  fret: PropTypes.number
};

const mapStateToProps = state => ({
  activeNoteSelector: state.present.activeNoteSelector
});

export default connect(mapStateToProps)(Note);
