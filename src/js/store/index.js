import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);     //Like the brain of the program, in charge of orchestrating all the movements

export default store;