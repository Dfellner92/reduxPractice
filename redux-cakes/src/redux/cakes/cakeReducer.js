import { BUY_CAKE, RESTOCK_CAKE } from "./cakeTypes";

const initialState = {
  numOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case RESTOCK_CAKE: 
      return {
        ...state,
        numOfCakes: state.numOfCakes + 1,
      }
    default:
      return state;
  }
};

export default cakeReducer;
