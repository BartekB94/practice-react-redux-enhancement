import types from "./stackoverflow.types";
import StackoverflowApi from "./stackoverflow.api";

const api = new StackoverflowApi();

export const addPosts = (data) => {
  return {
    type: types.ADD_POSTS,
    payload: data,
  };
};

export const setTitle = (title) => {
  return {
    type: types.SET_TITLE,
    payload: title,
  };
};

export const setOption = (option) => {
  return {
    type: types.SET_OPTION,
    payload: option,
  };
};

export const getPosts = (title, option) => (dispatch) => {
  api
    .fetchPosts(title, option)
    .then((data) => dispatch(addPosts(data.items)))
    .catch((error) => {
      dispatch(addPosts([]));
      console.error(error);
    });
};
