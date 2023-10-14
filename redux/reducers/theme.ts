import { THEME_CHANGE } from '../constants/theme';

const inititalState = {
  mode: 'light',
};

export const themeReducer = ({ state = inititalState, action }: any) => {
  switch (action.type) {
    case THEME_CHANGE:
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};
