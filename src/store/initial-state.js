export const dummyChord = {
  notes: [{ fret: 1 }, { fret: 2 }, {}, {}, {}, {}]
};

export const emptyChord = { notes: [{}, {}, {}, {}, {}, {}] };

// export const dummyFrame = {
//   measureId: null,
//   prevChordId: null,
//   start: 0,
//   end: null
// };

export const initialSection = {
  sectionName: "",
  tunings: ["E", "B", "G", "D", "A", "E"],
  chords: [
    emptyChord,
    emptyChord,
    emptyChord,
    emptyChord,
    emptyChord,
    emptyChord,
    emptyChord,
    emptyChord
  ]
};

export const initialTuning = "E";

export const initialState = {
  chordHovered: false,
  // clipboard: {
  //   mousedown: false,
  //   selectionFrame: dummyFrame,
  //   pastableFrame: {
  //     measureId: null,
  //     start: null,
  //     end: null
  //   },
  //   chord: { measureId: 0, chordId: 0 }
  // },
  sections: [initialSection],
  sheetName: "",
  recentNotes: []
};
