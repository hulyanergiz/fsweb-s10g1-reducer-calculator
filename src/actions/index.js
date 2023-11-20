export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const RESET_CE = "RESET_CE- resets the total on display";
export const M_PLUS = "M_PLUS adds to memory";
export const MR =
  "MR-does the operation between the total on display and memory";
export const MC = "MC-clears the memory";
export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};
