import { BUY_ICE_CREAM, RESTOCK_ICE_CREAM } from './iceCreamTypes'

export const buyIceCream = (number) => {
  return {
    type: BUY_ICE_CREAM,
    payload: number
  };
};

export const restockIceCream = () => {
  return {
    type: RESTOCK_ICE_CREAM,
  };
};
