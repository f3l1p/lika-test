const initialState = {
  amount: 0,
};

export const savingReducer = (state = initialState, action = {}) => {
  if (action.type === 'CALC_SAVINGS') {
    return {
      ...state,
      amount: action.payload,
    };
  }

  return state;
};
