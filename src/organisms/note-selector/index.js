import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SET_NOTE, SET_ACTIVE_NOTE_SELECTOR } from "actions";
import { Wrapper, OptionsGrid, Heading, Selection } from "./atoms";
import { frets } from "./config";

function SingleFretSelections({
  heading,
  frets,
  sectionId,
  chordId,
  noteId,
  dispatch
}) {
  return (
    <>
      {heading && <Heading>{heading}</Heading>}
      <OptionsGrid>
        {frets.map((fret, i) => (
          <Selection
            onClick={() => {
              dispatch({ type: SET_NOTE, sectionId, chordId, noteId, fret });
              dispatch({ type: SET_ACTIVE_NOTE_SELECTOR });
            }}
            key={`s:${sectionId}-c:${chordId}-n:${noteId}-f:${fret}`}
          >
            {fret}
          </Selection>
        ))}
      </OptionsGrid>
    </>
  );
}

function NoteSelector({ sectionId, chordId, noteId, dispatch }) {
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
      <SingleFretSelections
        heading="Single Notes"
        frets={frets}
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

export default connect()(NoteSelector);
