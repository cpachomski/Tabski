import update from 'immutability-helper';
import { initialSection, initialTuning } from 'store/defaults';
import {
  ADD_SECTION,
  REMOVE_SECTION,
  SET_SECTION_TITLE,
  ADD_SECTION_STRING,
  REMOVE_SECTION_STRING
} from 'actions';

export default {
  [ADD_SECTION]: state =>
    update(state, { sections: { $push: [initialSection] } }),
  [REMOVE_SECTION]: (state, action) => {
    const sectionId = action.sectionId || state.sections.length - 1;

    return update(state, {
      sections: { $splice: [[sectionId, 1]] }
    });
  },
  [SET_SECTION_TITLE]: (state, action) =>
    update(state, {
      sections: { [action.sectionId]: { $merge: { name: action.name } } }
    }),
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
  undoable: [
    ADD_SECTION,
    REMOVE_SECTION,
    ADD_SECTION_STRING,
    REMOVE_SECTION_STRING
  ]
};
