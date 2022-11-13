import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer); // This will create a store object

export default store;
