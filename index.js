const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";

const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
};

const buyIceCream = () => {
  return {
    type: BUY_ICE_CREAM,
    info: "Second redux action",
  };
};

const initialCakes = {
  numOfCakes: 10,
};

const initialIceCream = {
  numOfIceCream: 20,
};

const iceCreamReducer = (state = initialIceCream, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};

const cakeReducer = (state = initialCakes, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cakeReducer: cakeReducer,
  iceCreamReducer: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
