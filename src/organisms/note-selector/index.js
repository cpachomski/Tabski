import React, { useEffect } from "react";
import PropTypes from "prop-types";
import PieMenu, { Slice } from "react-pie-menu";
import { connect } from "react-redux";
import { SET_ACTIVE_NOTE_SELECTOR } from "actions";
import { Wrapper } from "./atoms";
import { frettings } from "./config";

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
      <PieMenu
        radius="125px"
        centerRadius="30px"
        centerX={"50%"}
        centerY={"50%"}
      >
        {frettings.map((fretting, i) => (
          <Slice key={`s:${sectionId}-c:${chordId}-n:${noteId}-f:${fretting}`}>
            {fretting}
          </Slice>
        ))}
      </PieMenu>
    </Wrapper>
  );
}

NoteSelector.propTypes = {
  sectionId: PropTypes.number,
  chordId: PropTypes.number,
  noteId: PropTypes.number
};

export default connect()(NoteSelector);
