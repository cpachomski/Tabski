import undoable, { includeAction } from 'redux-undo';
import { initialState } from 'store/initial-state';

const { reducers, undoableActions } = [
  require('./chord').default,
  require('./section').default,
  require('./sheet').default
].reduce(
  (a, c) => ({
    reducers: { ...a.reducers, ...c },
    undoableActions: [...a.undoableActions, ...c.undoableActions]
  }),
  { reducers: {}, undoableActions: [] }
);

const rootReducer = (state = initialState, action) =>
  !!reducers[action.type] ? reducers[action.type](state, action) : state;

export default undoable(rootReducer, {
  filter: includeAction(undoableActions)
});
