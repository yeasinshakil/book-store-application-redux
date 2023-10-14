import bookReducer from "./products/bookReducer";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(bookReducer, composeWithDevTools());

export default store;
