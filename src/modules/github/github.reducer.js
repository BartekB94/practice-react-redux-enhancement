import types from "./github.types";

const initialState = {
  repositories: [],
  username: "",
  searchQuery: "",
};

export const githubReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_REPOSITORIES:
      return {
        ...state,
        repositories: action.payload,
      };
    case types.SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case types.SET_SEARCHQUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};
