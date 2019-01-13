import update from "immutability-helper";
import { ADD_CHORD, REMOVE_CHORD } from "actions";

export default {
  [ADD_CHORD]: (state, action) => {
    const { notes } = state.sections[action.sectionId].chords[0];
    const emptyChord = notes.map(note => ({}));

    return update(state, {
      sections: {
        [action.sectionId]: {
          chords: { $push: [{ notes: emptyChord }] }
        }
      }
    });
  },
  [REMOVE_CHORD]: (state, action) => {
    if (state.sections[action.sectionId].chords.length < 2) {
      return state;
    }

    return update(state, {
      sections: {
        [action.sectionId]: { chords: { $splice: [[action.chordId, 1]] } }
      }
    });
  },
  undoableActions: [ADD_CHORD, REMOVE_CHORD]
};
