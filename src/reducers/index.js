import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR,
  MEMORY_PLUS,
  MEMORY_RECALL,
  MEMORY_CLEAR,
  DIGIT,
  EQUAL,
  C,
} from "./../actions";

export const initialState = {
  total: 100,
  operation: "*",
  memory: 100,
  screen: 0,
  ram: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return Number(num1) + Number(num2);
    case "-":
      return Number(num1) - Number(num2);
    case "*":
      return Number(num1) * Number(num2);
    case "/":
      return Number(num1) / Number(num2);
    default:
      return;
  }
};
const stringDigit = (screen, number) => {
  return screen.toString() + number.toString();
};
const lastNumberClear = (screen) => {
  let screenString = screen.toString();
  return screenString.slice(0, -1);
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
        ram: state.screen,
        screen: 0,
      };

    case CLEAR:
      return { ...state, total: 0, screen: 0, ram: 0 };

    case MEMORY_PLUS:
      return { ...state, memory: state.total };
    case MEMORY_RECALL:
      return {
        ...state,
        total: calculateResult(state.total, state.memory, state.operation),
        screen: calculateResult(state.total, state.memory, state.operation),
      };
    case MEMORY_CLEAR:
      return { ...state, memory: 0 };

    case DIGIT:
      return {
        ...state,
        screen:
          state.screen == 0
            ? action.payload
            : stringDigit(state.screen, action.payload),
      };

    case EQUAL:
      const calculation = calculateResult(
        state.screen,
        state.ram,
        state.operation
      );
      return { ...state, total: calculation, screen: calculation, RAM: 0 };
    case C:
      return {
        ...state,
        screen: lastNumberClear(state.screen),
      };

    default:
      return state;
  }
};

export default reducer;
