import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableInvariant from "redux-immutable-state-invariant";

export default function configurestore(initialState) {
  const composenhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composenhancers(applyMiddleware(reduxImmutableInvariant()))
  );
}
