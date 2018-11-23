import update from 'immutability-helper';
import { SET_NOTE } from 'actions';

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
  undoableActions: [SET_NOTE]
};
