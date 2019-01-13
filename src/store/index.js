import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "reducers";

const logger = createLogger();
const isProd = () => process.env.NODE_ENV === "production";

export default initialState =>
  isProd()
    ? createStore(rootReducer, initialState)
    : createStore(rootReducer, initialState, applyMiddleware(logger));
