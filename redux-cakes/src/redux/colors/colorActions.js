import { SET_COLOR_GREEN, SET_COLOR_RED} from './colorTypes';

export const colorRed = () => {
  return {
    type: SET_COLOR_RED,
  };
};

export const colorGreen = () => {
  return {
    type: SET_COLOR_GREEN,
  };
};
