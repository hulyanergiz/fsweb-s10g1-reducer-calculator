import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  MC,
  MR,
  M_PLUS,
  RESET_CE,
} from "./../actions";

export const initialState = {
  total: 100,
  operation: "*",
  memory: 100,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    default:
      return;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };

    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
      };
    case RESET_CE:
      return { ...state, total: 0 };
    case M_PLUS:
      return { ...state, memory: state.total };
    case MR:
      return {
        ...state,
        total: calculateResult(state.total, state.memory, state.operation),
      };
    case MC:
      return { ...state, memory: 0 };
    default:
      return state;
  }
};

export default reducer;
