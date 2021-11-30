import { BUY_ICE_CREAM, RESTOCK_ICE_CREAM } from './iceCreamTypes'

export const buyIceCream = () => {
  return {
    type: BUY_ICE_CREAM,
  };
};

export const restockIceCream = () => {
  return {
    type: RESTOCK_ICE_CREAM,
  };
};
