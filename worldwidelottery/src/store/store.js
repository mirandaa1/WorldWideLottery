import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import userReducer from "../store/reducers/fetchRandomUser.reducer";

const appReducer = combineReducers({
  userReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
