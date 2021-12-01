import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger';
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import colorReducer from './colors/colorReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  colors: colorReducer
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
