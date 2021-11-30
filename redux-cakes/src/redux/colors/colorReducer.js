import { SET_COLOR_GREEN, SET_COLOR_RED } from "./colorTypes";

const initialState = {
  color: 'red',
};

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLOR_RED:
      return {
        ...state,
        color: 'red'
      };
    case SET_COLOR_GREEN: 
      return {
        ...state,
        color: 'green',
      }
    default:
      return state;
  }
};

export default colorReducer;