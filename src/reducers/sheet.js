import update from "immutability-helper";
import { SET_SHEET_NAME, SET_SHEET_STATE } from "actions";

export default {
  [SET_SHEET_NAME]: (state, action) => {
    const { sheetName } = action;

    return update(state, { sheetName: { $set: sheetName } });
  },
  undoableActions: [SET_SHEET_NAME]
};
