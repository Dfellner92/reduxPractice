import { createStore, combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import colorReducer from './colors/colorReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  colors: colorReducer
});
const store = createStore(rootReducer);

export default store;
