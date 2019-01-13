import update from "immutability-helper";
import { SET_NOTE, SET_ACTIVE_NOTE_SELECTOR } from "actions";

export default {
  [SET_NOTE]: (state, action) => {
    const { sectionId, chordId, noteId, fret } = action;

    return update(state, {
      sections: {
        [sectionId]: {
          chords: {
            [chordId]: {
              notes: {
                [noteId]: { $set: { fret } }
              }
            }
          }
        }
      }
    });
  },
  [SET_ACTIVE_NOTE_SELECTOR]: (state, action) => {
    const { sectionId, chordId, noteId } = action;

    return update(state, {
      activeNoteSelector: { $set: { sectionId, chordId, noteId } }
    });
  },
  undoableActions: [SET_NOTE]
};
