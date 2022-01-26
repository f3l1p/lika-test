export const CALC_SAVINGS = 'CALC_SAVINGS';

export const savingAction = result => {
  return {
    type: 'CALC_SAVINGS',
    payload: result,
  };
};
