import { THEME_CHANGE } from '../constants/theme';

export const switchMode = ({ mode }: any) => {
  return {
    type: THEME_CHANGE,
    payload: mode,
  };
};
