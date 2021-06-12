import * as Types from '../types';

export const setMessage = (message) => ({
  type: Types.SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: Types.CLEAR_MESSAGE,
});
