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

export const getPosts = (title) => (dispatch) => {
  dispatch(addPosts([]));
  api
    .fetchPosts(title)
    .then((data) => dispatch(addPosts(data)))
    .catch((error) => console.error(error));
};
