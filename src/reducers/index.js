import { combineReducers } from "redux";

import { stackoverflowReducer } from "../modules/stackoverflow";
import { githubReducer } from "../modules/github";

const reducers = combineReducers({
  github: githubReducer,
  stackoverflow: stackoverflowReducer,
});

export default reducers;
