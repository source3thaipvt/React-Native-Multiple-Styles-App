export const setReduxState = (state: any) => {
  return {
    type: 'SET_STATE',
    ...state,
  };
};
