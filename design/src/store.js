import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { newProductReducer, productDetailsReducer, productReducer, productsReducer } from "./component/reducers/productReducer";
import { allUsersReducer, profileReducer, userDetailsReducer, userReducer } from "./component/reducers/userReducers";
import { updateUser } from "./component/actions/userAction";


const reducer = combineReducers({
 products: productsReducer,
 product: productReducer,
 allUsers: allUsersReducer,
 profile: profileReducer,
 newProduct: newProductReducer,
 user: userReducer,
 productDetails: productDetailsReducer,
 userDetails: userDetailsReducer,
});

let initialState = {
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;