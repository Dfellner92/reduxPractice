import { BUY_ICE_CREAM, RESTOCK_ICE_CREAM } from './iceCreamTypes';

const initialState2 = {
  numIceCream: 10,
};

const iceCreamReducer = (state = initialState2, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numIceCream: state.numIceCream - 1,
      };
    case RESTOCK_ICE_CREAM: 
      return {
        ...state,
        numIceCream: state.numIceCream + 5,
      }
    default:
      return state;
  }
};

export default iceCreamReducer;