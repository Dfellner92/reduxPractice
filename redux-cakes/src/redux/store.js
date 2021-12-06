import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger';
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import colorReducer from './colors/colorReducer';
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  colors: colorReducer,
  users: userReducer
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
