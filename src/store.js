import { appReducer } from "./appReducer";
import { createStore } from "redux";

export const store = createStore(appReducer);

