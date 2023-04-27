import { combineReducers } from "redux";
import { productReducer } from "./product-reducer";
import { globalReducer } from "./global-reducer";

export const rootReducer = combineReducers({
  productReducer,
  globalReducer
})