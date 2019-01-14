import React, { useEffect } from "react";
import { Spring } from "react-spring";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SET_NOTE, SET_ACTIVE_NOTE_SELECTOR, SET_RECENT_NOTE } from "actions";
import { Wrapper, OptionsGrid, Heading, Selection } from "./atoms";
import { notes } from "./config";

function SingleNoteSelections({
  rows,
  heading,
  notes,
  sectionId,
  chordId,
  noteId,
  dispatch
}) {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {style => (
        <div style={style}>
          {heading && <Heading>{heading}</Heading>}
          <OptionsGrid rows={rows}>
            {notes.map((note, i) => (
              <Selection
                onClick={() => {
                  dispatch({
                    type: SET_NOTE,
                    sectionId,
                    chordId,
                    noteId,
                    note
                  });
                  dispatch({ type: SET_ACTIVE_NOTE_SELECTOR });
                  dispatch({ type: SET_RECENT_NOTE, note });
                }}
                key={`h:${heading}-s:${sectionId}-c:${chordId}-n:${noteId}-f:${note}`}
              >
                {note}
              </Selection>
            ))}
          </OptionsGrid>
        </div>
      )}
    </Spring>
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
        heading="Single Frets"
        rows={Math.floor(notes.length / 9)}
        notes={notes}
        sectionId={sectionId}
        chordId={chordId}
        noteId={noteId}
        dispatch={dispatch}
      />
      <SingleNoteSelections
        rows={Math.floor(recentNotes.length / 9)}
        heading="Recent Frets"
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
