import { createStore } from "redux";
import rootReducer from "../reducers/index";

const savedState = JSON.parse(localStorage.getItem("store"));
let store;

if (savedState) {
  store = createStore(
    rootReducer,
    savedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
} else {
  store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

store.subscribe(() => {
  localStorage.setItem("store", JSON.stringify(store.getState()));
});

export default store;
