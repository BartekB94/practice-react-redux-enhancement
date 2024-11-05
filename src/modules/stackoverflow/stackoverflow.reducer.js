import types from "./stackoverflow.types";

const initialState = {
  items: [],
  title: "",
  option: "",
};

export const stackoverflowReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_POSTS:
      return { ...state, items: [...action.payload] };
    case types.SET_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case types.SET_OPTION:
      return {
        ...state,
        option: action.payload,
      };
    default:
      return state;
  }
};
