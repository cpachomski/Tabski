import update from "immutability-helper";
import { SET_NOTE, SET_ACTIVE_NOTE_SELECTOR, SET_RECENT_NOTE } from "actions";

export default {
  [SET_NOTE]: (state, action) => {
    const { sectionId, chordId, noteId, note } = action;

    return update(state, {
      sections: {
        [sectionId]: {
          chords: {
            [chordId]: {
              notes: {
                [noteId]: { $set: { note } }
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
  [SET_RECENT_NOTE]: (state, action) => {
    const { recentNotes } = state;
    const { note } = action;
    const MAX_RECENT_NOTES = 10;

    const dedup = [...recentNotes];

    // prevent duplicates
    if (recentNotes.indexOf(note) >= 0) {
      dedup.splice(recentNotes.indexOf(note), 1);
    }

    // remove last element if we are showing too many
    if (recentNotes.length > MAX_RECENT_NOTES) {
      dedup.pop();
    }

    return update(state, {
      recentNotes: {
        $set: [note, ...dedup]
      }
    });
  },
  undoableActions: [SET_NOTE]
};
