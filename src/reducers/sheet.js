import update from 'immutability-helper';
import { SET_SHEET_NAME } from 'actions';

export default {
  [SET_SHEET_NAME]: (state, action) =>
    update(state, { sheetName: { $set: action.sheetName } }),
  undoableActions: [SET_SHEET_NAME]
};
