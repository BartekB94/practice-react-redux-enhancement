import types from "./stackoverflow.types";

const initialState = {
  posts: [],
  title: "",
};

export const stackoverflowReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_POSTS:
      return { ...state, posts: action.payload };
    case types.SET_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
};
