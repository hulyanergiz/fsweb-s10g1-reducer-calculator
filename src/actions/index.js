export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR = "CLEAR";
export const MEMORY_PLUS = "MEMORY_PLUS şuanki totali memory'e kaydet";
export const MEMORY_RECALL =
  "MEMORY_RECALL şuanki memory ile total'i APPLY_NUMBER";
export const MEMORY_CLEAR = "MEMORY_CLEAR memory'i sıfırla";
export const DIGIT = "DIGIT ekrana yaz";
export const EQUAL = "hesaplamalardan sonraki sonuç";
export const C = "ekrandaki son karakteri siler";
export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};
export const typeToScreen = (number) => {
  return { type: DIGIT, payload: number };
};
