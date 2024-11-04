// ./src/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import reducers from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./components/App";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

const root = createRoot(document.querySelector("#root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
