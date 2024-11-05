import types from "./github.types";
import GitHubAPI from "./github.api";

const api = new GitHubAPI();

export const setRepositories = (data) => {
  return {
    type: types.SET_REPOSITORIES,
    payload: data,
  };
};

export const setUsername = (username) => {
  return {
    type: types.SET_USERNAME,
    payload: username,
  };
};

export const setSearchQuery = (searchQuery) => {
  return {
    type: types.SET_SEARCHQUERY,
    payload: searchQuery,
  };
};

export const getRepositories = (username) => (dispatch) => {
  api
    .getRepos(username)
    .then((data) => {
      dispatch(setRepositories(data));
    })
    .catch((error) => {
      dispatch(setRepositories([]));
      console.error(error);
    });
};
