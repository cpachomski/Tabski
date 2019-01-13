import React from "react";
import PropTypes from "prop-types";
import { frettings } from "./config";

import { Wrapper } from "./atoms";

function NoteSelector({ sectionId, chordId, noteId }) {
  return (
    <Wrapper>
      {frettings.map(fretting => (
        <li key={`s:${sectionId}-c:${chordId}-n:${noteId}-f:${fretting}`}>
          {fretting}
        </li>
      ))}
    </Wrapper>
  );
}

NoteSelector.propTypes = {
  sectionId: PropTypes.number,
  chordId: PropTypes.number,
  noteId: PropTypes.number
};

export default NoteSelector;
