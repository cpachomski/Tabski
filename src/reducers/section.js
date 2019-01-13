import update from "immutability-helper";
import { initialSection, initialTuning } from "store/initial-state";
import {
  ADD_SECTION,
  REMOVE_SECTION,
  SET_SECTION_NAME,
  SET_SECTION_TUNING,
  ADD_SECTION_STRING,
  REMOVE_SECTION_STRING
} from "actions";

export default {
  [ADD_SECTION]: state => {
    return update(state, { sections: { $push: [initialSection] } });
  },
  [REMOVE_SECTION]: (state, action) => {
    const sectionId = action.sectionId || state.sections.length - 1;

    return update(state, {
      sections: { $splice: [[sectionId, 1]] }
    });
  },
  [SET_SECTION_NAME]: (state, action) => {
    const { sectionId, sectionName } = action;

    return update(state, {
      sections: { [sectionId]: { $merge: { sectionName } } }
    });
  },
  [SET_SECTION_TUNING]: (state, action) => {
    const { sectionId, tuningId, tuning } = action;

    return update(state, {
      sections: {
        [sectionId]: {
          tunings: {
            [tuningId]: { $set: tuning }
          }
        }
      }
    });
  },
  [ADD_SECTION_STRING]: (state, action) => {
    const { chords } = state.sections[action.sectionId];
    const newChords = chords.map(chord => ({ notes: chord.notes.concat({}) }));

    return update(state, {
      tunings: { $push: [initialTuning] },
      chords: { $set: newChords }
    });
  },
  [REMOVE_SECTION_STRING]: (state, action) => {
    const { tunings, chords } = state.sections[action.sectionId];
    const newChords = chords.map(chord => ({
      notes: chord.notes.slice(0, chord.notes.length - 1)
    }));

    return update(state, {
      sections: {
        [action.sectionId]: {
          tunings: { $splice: [[tunings.length - 1, 1]] },
          chords: { $set: newChords }
        }
      }
    });
  },
  undoableActions: [
    ADD_SECTION,
    REMOVE_SECTION,
    SET_SECTION_TUNING,
    ADD_SECTION_STRING,
    REMOVE_SECTION_STRING
  ]
};
