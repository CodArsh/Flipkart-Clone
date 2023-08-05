import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  getProductDetailsReducer,
  getProductsReducer,
} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";

const reducers = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  cart: cartReducer,
});
const middleWare = [thunk];
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
