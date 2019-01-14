import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SET_NOTE, SET_ACTIVE_NOTE_SELECTOR, SET_RECENT_NOTE } from "actions";
import { Wrapper, OptionsGrid, Heading, Selection } from "./atoms";
import { notes } from "./config";

function SingleNoteSelections({
  heading,
  notes,
  sectionId,
  chordId,
  noteId,
  dispatch
}) {
  return (
    <>
      {heading && <Heading>{heading}</Heading>}
      <OptionsGrid>
        {notes.map((note, i) => (
          <Selection
            onClick={() => {
              dispatch({ type: SET_NOTE, sectionId, chordId, noteId, note });
              dispatch({ type: SET_ACTIVE_NOTE_SELECTOR });
              dispatch({ type: SET_RECENT_NOTE, note });
            }}
            key={`h:${heading}-s:${sectionId}-c:${chordId}-n:${noteId}-f:${note}-i:${i}`}
          >
            {note}
          </Selection>
        ))}
      </OptionsGrid>
    </>
  );
}

function NoteSelector({ sectionId, chordId, noteId, recentNotes, dispatch }) {
  const selectorRef = React.createRef();

  function handleClick(event) {
    if (selectorRef && !selectorRef.current.contains(event.target)) {
      dispatch({ type: SET_ACTIVE_NOTE_SELECTOR });
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick, false);
    return () => {
      document.removeEventListener("mousedown", handleClick, false);
    };
  });

  return (
    <Wrapper ref={selectorRef}>
      <SingleNoteSelections
        heading="Single Notes"
        notes={notes}
        sectionId={sectionId}
        chordId={chordId}
        noteId={noteId}
        dispatch={dispatch}
      />
      <SingleNoteSelections
        heading="Recent Notes"
        notes={recentNotes}
        sectionId={sectionId}
        chordId={chordId}
        noteId={noteId}
        dispatch={dispatch}
      />
    </Wrapper>
  );
}

NoteSelector.propTypes = {
  sectionId: PropTypes.number,
  chordId: PropTypes.number,
  noteId: PropTypes.number
};

const mapStateToProps = state => ({ recentNotes: state.present.recentNotes });

export default connect(mapStateToProps)(NoteSelector);
