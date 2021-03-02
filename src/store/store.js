import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import { foodListReducer } from "./FoodList/foodList.reducer";

const rootReducer = combineReducers({
  foodList: foodListReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export default store;
